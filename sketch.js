let walls = [];

function setup() {
  createCanvas(800, 800);
  population = new Population(1000);
  goal = new Goal(400, 10, 7, 7);
}

function draw() {
  background(225);

  fill(0, 0, 0);
  textSize(22);
  text("Generation number: " + population.gen, 10, 30);
  goal.show();

  stroke(0, 0, 250);
  for(let i = 0; i < walls.length; i++)
  {
    walls[i].update();
    walls[i].show();
  }

  if(population.allPlayersDead())
  {
    population.calculateFitness();
    population.naturalSelection();
    population.mutateBabies();
  }
  else
  {
    population.update();
    population.show();
  }
}

function mousePressed()
{
  let w = new Wall(mouseX, mouseY);
  walls.push(w);
}
