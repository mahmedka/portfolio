function initSimulation() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    Events = Matter.Events,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;
  var engine = Engine.create(),
    world = engine.world;
  var containerElement = document.querySelector(".tag-canvas");
  var containerWidth = containerElement.clientWidth + 2;
  var containerHeight = containerElement.clientHeight + 2;
  var render = Render.create({
    element: containerElement,
    engine: engine,
    options: {
      width: containerWidth,
      height: containerHeight,
      pixelRatio: 2,
      background: "transparent",
      wireframes: false,
    },
  });
  var ground = Bodies.rectangle(
    containerWidth / 2,
    containerHeight + 50,
    containerWidth,
    100,
    { isStatic: true }
  );
  var wallLeft = Bodies.rectangle(
    -50,
    containerHeight / 2,
    100,
    containerHeight,
    { isStatic: true }
  );
  var wallRight = Bodies.rectangle(
    containerWidth + 50,
    containerHeight / 2,
    100,
    containerHeight,
    { isStatic: true }
  );
  var roof = Bodies.rectangle(containerWidth / 2, -50, containerWidth, 100, {
    isStatic: true,
  });

  function createRandomBody(imagePath) {
    var randomX = Math.random() * containerWidth;
    var randomY = (Math.random() * containerHeight) / 2;
    var img = new Image();
    img.src = imagePath;

    img.onload = function () {
      var body = Bodies.rectangle(randomX, randomY, 145, 40, {
        render: {
          fillStyle: "#EDDC8C",
          sprite: { texture: imagePath, xScale: 1, yScale: 1 },
        },
      });
      var randomForceX = (Math.random() - 0.5) * 0.03;
      var randomForceY = (Math.random() - 0.5) * 0.03;
      Matter.Body.applyForce(
        body,
        { x: body.position.x, y: body.position.y },
        { x: randomForceX, y: randomForceY }
      );
      World.add(engine.world, body);
    };

    img.onerror = function () {
      console.error(`Failed to load image: ${imagePath}`);
    };
  }

  var imagePaths = [
    "./assets/images/skills/html.svg",
    "./assets/images/skills/css.svg",
    "./assets/images/skills/bootstrap.svg",
    "./assets/images/skills/scss.svg",
    "./assets/images/skills/laravel.svg",
    "./assets/images/skills/php.svg",
    "./assets/images/skills/javascript.svg",
    "./assets/images/skills/tailwind.svg",
    "./assets/images/skills/git.svg",
    "./assets/images/skills/github.svg",
    "./assets/images/skills/vue.svg",
    "./assets/images/skills/mysql.svg",
    "./assets/images/skills/canva.svg",
    "./assets/images/skills/typescript.svg",
    "./assets/images/skills/photoshop.svg",
    "./assets/images/skills/sql.svg",
    "./assets/images/skills/ui-ux.svg",
  ];

  // تحميل كل الصور بشكل متزامن
  imagePaths.forEach((path) => {
    createRandomBody(path);
  });

  World.add(engine.world, [ground, wallLeft, wallRight, roof]);
  var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
  World.add(world, mouseConstraint);
  render.mouse = mouse;
  Engine.run(engine);
  Render.run(render);
}

var containerElement = document.querySelector(".tag-canvas");
var observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      initSimulation();
      observer.disconnect();
    }
  });
});
observer.observe(containerElement);
