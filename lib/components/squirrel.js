const squirrel = (squirrels) => {

  

  const height = window.screen.height;
  const width = window.screen.width;
  const squirrel = document.getElementById("squirrel");
  const squirrelWidth = (6 * width) / 100;
  const squirrelHeight = (8 * height) / 100;
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  
  const getMousePosition = (canvas, event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    ctx.drawImage(squirrel, x - 40, y - 40, squirrelWidth, squirrelHeight);
    squirrels.push({x: x, y: y});
    canvas.removeEventListener('mousedown', click, false);
  };

  const click = (e) => {
    getMousePosition(canvas, e);
  }

  canvas.addEventListener("mousedown", click, false);

  return squirrels;
}

export default squirrel;

