const birdDraw = (x, y, count, draw, alive, squirrels) => {

  const height = window.screen.height;
  const width = window.screen.width;
  const birdWidth = (4.5 * width) / 100;
  const birdHeight = (6 * height) / 100;
  const canvas = document.getElementById("Canvas");
  const ctx = canvas.getContext("2d");
  const birdImage = document.getElementById("blue_bird");
  ctx.clearRect(x - 3, y - 4, birdWidth + 6, birdHeight + 6);
  ctx.imageSmoothingEnabled = false;
  
  ctx.drawImage(birdImage, x, y, birdWidth, birdHeight);
  
    if (count < 1000) {
      if (y === ((61.5 * height) / 100) && x < ((10 * width) / 100)) {
        x += 4;

      } else if (x > ((9.4 * width) / 100) && x < ((19 * width) / 100) && y > ((46.5 * height) / 100)) {
        y -= 4;

      } else if (y > ((45.9 * height) / 100) && y < ((47 * height) / 100) && x < ((20 * width) / 100)) {
        x += 4;

      } else if (x > ((20 * width) / 100) && x < ((20.5 * width) / 100) && y < ((76.5 * height) / 100) && y > ((40 * height) / 100)) { // 46 < y < 76.5
        y += 4;

      } else if (y > ((76 * height) / 100) && y < ((77 * height) / 100) && x < ((35 * width) / 100)) {
        x += 4;

      } else if (x > ((34 * width) / 100) && y > ((54 * height) / 100)) {
        y -= 4;

      } else if (y < ((54 * height) / 100) && y > ((32 * height) / 100) && x < ((50 * width) / 100)) {
        x += 4;

      } else if (x > ((49 * width) / 100) && x < ((50.5 * width) / 100) && y > ((31.5 * height) / 100)) {
        y -= 4;

      } else if (y > ((30 * height) / 100) && x > ((40.5 * width) / 100)) {
        x -= 4;

      } else if (x < ((41 * width) / 100) && y > ((24 * height) / 100)) {
        y -= 4;

      } else if (y < ((24 * height) / 100) && y > ((22 * height) / 100) && x > ((15.5 * width) / 100)) { // 22 < y < 24
        x -= 4;

      } else if (x < ((15.75 * width) / 100) && y < ((24 * height) / 100) && y > ((8.5 * height) / 100)) { // 8 < y < 24
        y -= 4;

      } else if (y < ((8.5 * height) / 100) && x < ((60 * width) / 100)) {
        x += 4;
      } else if (x > ((59 * width) / 100)) {
        clearInterval(draw);
        ctx.clearRect(x, y, birdWidth + 1, birdHeight);
      }
    }
  count += 1;
  const updatedBird = {x: x, y: y, count: count, interval: draw, alive: true};
  // debugger;
  return updatedBird;
  
  
}

export default birdDraw;