class Player
{
    constructor(x, y, w, h)
    {
        this.width = w;
        this.height = h;
        this.pos = createVector(x, y);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.brain = new Brain(600);
        this.dead = false;
        this.distanceToGoal;
        this.reachedGoal = false;
        this.isBest = false;
    }

    show()
    {
        if(this.isBest)
        {
            fill(250, 0, 0);
            stroke(0);
            ellipse(this.pos.x, this.pos.y, this.width, this.height);
        }
        else
        {
            fill(0);
            stroke(0);
            ellipse(this.pos.x, this.pos.y, this.width, this.height);
        }
    }

    move()
    {
        if(this.brain.directions.length > this.brain.step)
        {
            this.acc = this.brain.directions[this.brain.step]
            this.brain.step++;
        }
        else
        {
            this.dead = true;
        }
        
        this.vel.add(this.acc);
        this.vel.limit(10);
        this.pos.add(this.vel);
    }

    update()
    {
        if(!this.dead && !this.reachedGoal)
        {
            this.move();
            if(this.pos.x < 2 || this.pos.y < 2 || this.pos.x > width || this.pos.y > height)
            {
                this.dead = true;
            }
            else if(dist(this.pos.x, this.pos.y, goal.x, goal.y) < 7)
            {
                this.reachedGoal = true;
            }
            else if(get(this.pos.x, this.pos.y)[2] == 250)
                this.dead = true;
        }
    }

    calculateFitness()
    {
        if(this.reachedGoal)
            this.fitness = 1.0 / 16.0 + 10000.0 / (float)(this.brain.step * this.brain.step)
        else
        {
            this.distanceToGoal = dist(this.pos.x, this.pos.y, goal.x, goal.y);
            this.fitness = 1.0 / (this.distanceToGoal * this.distanceToGoal);
        }
    }

    getBaby()
    {
        this.baby = new Player(width / 2, height - 10, 5, 5);
        this.baby.brain = this.brain.cloneBrain();
        return this.baby;
    }
}