const squirrel = () => {

  const squirrels = [];

  const height = window.screen.height;
  const width = window.screen.width;
  const squirrel = document.getElementById("squirrel");
  const squirrelWidth = (6 * width) / 100;
  const squirrelHeight = (8 * height) / 100;
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  let count = 0;
  
  const getMousePosition = (canvas, event) => {
    count += 1;
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    ctx.drawImage(squirrel, x - 40, y - 40, squirrelWidth, squirrelHeight);
    squirrels.push({id: count, x: x, y: y});
    console.log(squirrels);
  };
  
  canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
  });

  
}

export default squirrel;

