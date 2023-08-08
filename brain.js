class Brain
{
    constructor(size)
    {
        this.size = size;
        this.directions = [];
        this.step = 0;
        this.randomize();
    }

    randomize()
    {
        for (let i = 0; i < this.size; i++) {
            this.randomAngle = random(2 * PI);
            this.directions[i] = p5.Vector.fromAngle(this.randomAngle);
        }
    }

    cloneBrain()
    {
        this.clone = new Brain(this.directions.length);

        for(let i = 0; i < this.directions.length; i++)
            this.clone.directions[i] = this.directions[i].copy();

        return this.clone;
    }

    mutate()
    {
        this.mutationRate = 0.01;

        for(let i = 0; i < this.directions.length; i++)
        {
            this.rand = random(1);
            if(this.rand < this.mutationRate)
            {
                this.newAngle = random(2 * PI);
                this.directions[i] = p5.Vector.fromAngle(this.newAngle);
            }
        }
    }
}