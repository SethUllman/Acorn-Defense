export const squirrel = () => {

  const getMousePosition = (canvas, event) => {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    return (x, y);
  };

  const squirrel = document.getElementById("blue_bird");
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");

  canvas.addEventListener("mousedown", function (e) {
    getMousePosition(canvas, e);
  });

}

