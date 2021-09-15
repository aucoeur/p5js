let hue = 0;
let trail = [];
let alpha = 0;

function setup() {
  createCanvas(640, 360);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
  // frameRate(10);
  background(20);
}

const reset = () => {
  trail.shift();
  fill(20, 10);
  // ellipse(last[0], last[1], 100);
  rect(0,0, width, height);
  alpha = 0;
}

function mouseMoved() {
  if (mouseX % 2 === 0 || mouseY % 2 === 0) {
    trail.push([mouseX, mouseY]);

  }

  for (let i = 0; i < trail.length; i++) {
    // let color = hue+mouseX*i % 360;
    let color = (hue+i)+mouseX % 360;
    // let color = map(mouseX, 0, width, 0, 360)
    fill(color, 100, 100, alpha);
    // ellipse(mouseX, mouseY, 30);
    ellipse(trail[i][0], trail[i][1], 60);
    // trail.length > 20
    alpha >= 100 ? reset() : alpha += 1;
    // print(trail.length, alpha)
  }

  hue >= 360 ? hue == 0 : hue;

}

function draw() {

}
