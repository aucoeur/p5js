function setup() {
  createCanvas(400, 400);
  colorMode(HSB, 360, 100, 100);
  strokeWeight(4);
}

let indent = 20;
let hue = 0;

function draw() {

  background(15);

  for (var i = 0; i < 10; i++) {

    let color = (hue+i * 30) % 360
    stroke(color, 100, 100);

    // these are the same but made two variables so easier to read
    let x = (i * 40) + indent;
    let y = (i * 40) + indent;

    line(0, y, width, y); // horizontal line (across x axis)
    line(x, 0, x, height); // vertical line (across y axis)

  }

  hue += 1 % 360;

  // noLoop();
}
