const placement = () => {

  const getMousePosition = (canvas, event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    return (x, y);
  };

  let canvasElem = document.getElementById("Canvas");

  canvasElem.addEventListener("mousedown", function (e) {
    return getMousePosition(canvasElem, e);
  }); 
  
};

export default placement;