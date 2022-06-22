let app = document.getElementById("writter");
let typewriter = new Typewriter(app, {
  loop: false,
  delay: 50,
  deleteSpeed: 100,
});

typewriter

  .typeString("Bienvenue")
  .pauseFor(500)
  .deleteAll()
  .typeString("Dans")
  .pauseFor(500)
  .deleteAll()
  .typeString("<strong>🍿PopCode🍿</strong>")
  .pauseFor(500)
  .deleteAll()
  .typeString("Une production")
  .pauseFor(500)
  .deleteAll()
  .typeString("Access Code School Lons")
  .pauseFor(500)
  .deleteAll()
  .typeString("<strong>🍿PopCode🍿</strong>")
  .start();
0;

setTimeout(() => {
  app.style.fontSize = "8rem";
}, 11500);
