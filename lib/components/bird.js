import birdDraw from './birdDraw';

function  Bird(hitpoints, value, screenHeight, screenWidth){
  this.hitpoints = hitpoints;
  this.value = value;
  this.count = 0;
  this.x = (-10);
  this.y = (61.5 * screenHeight) / 100;

  const draw = setInterval(() => {
    const updatedBird = birdDraw(this.x, this.y, this.count, draw)
    this.x = updatedBird.x;
    this.y = updatedBird.y;
    this.count = updatedBird.count;
    return updatedBird;
  }, 10);
}

export default Bird;