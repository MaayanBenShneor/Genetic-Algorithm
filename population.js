class Population
{
    constructor(size)
    {
        this.players = [];

        for(let i = 0; i < size; i++)
        {
            this.players[i] = new Player(width / 2, height - 10, 5, 5);
        }

        this.fitnessSum = 0;
        this.bestPlayer = 0;
        this.minSteps = 600;
        this.gen = 1;
    }

    show()
    {
        for (let i = 1; i < this.players.length; i++)
        {
            this.players[i].show();
        }
        this.players[0].show();
    }

    update()
    {
        for (let i = 0; i < this.players.length; i++)
        {
            if(this.players[i].brain.step > this.minSteps)
                this.players[i].dead = true;
            else
            {
                this.players[i].update();
            }  
        }
        console.log(this.minSteps);
    }

    calculateFitness()
    {
        for (let i = 0; i < this.players.length; i++)
        {
            this.players[i].calculateFitness();
        }
    }

    allPlayersDead()
    {
        for(let i = 0; i < this.players.length; i++)
        {
            if(!this.players[i].dead && !this.players[i].reachedGoal)
                return false;
        }

        return true;
    }

    naturalSelection()
    {
        this.newPlayers = [];
        this.calculateFitnessSum();
        this.setBestPlayer();

        this.newPlayers[0] = this.players[this.bestPlayer].getBaby();
        this.newPlayers[0].isBest = true;
        for(let i = 1; i < this.players.length; i++)
        {
            this.parent = this.selectParent();
            this.newPlayers[i] = this.parent.getBaby();
        }

        this.players = this.newPlayers;
        this.gen++;
        this.winnersAmount = 0;

        if(this.gen % 5 == 0 && this.minSteps < 600)
        {
            this.minSteps += 50;
        }
            
    }

    calculateFitnessSum()
    {
        this.fitnessSum = 0;
        for(let i = 0; i < this.players.length; i++)
        {
            this.fitnessSum += this.players[i].fitness;
        }
    }

    selectParent()
    {
        this.rand = random(this.fitnessSum);

        this.runningSum = 0;

        for(let i = 0; i < this.players.length; i++)
        {
            this.runningSum += this.players[i].fitness;
            if(this.runningSum > this.rand)
                return this.players[i];
        }

        return null;
    }

    mutateBabies()
    {
        for(let i = 1; i < this.players.length; i++)
            this.players[i].brain.mutate();
    }

    setBestPlayer()
    {
        this.max = 0;
        this.maxIndex = 0;

        for (let i = 0; i < this.players.length; i++) 
        {
            if(this.players[i].fitness > this.max)
            {
                this.max = this.players[i].fitness;
                this.maxIndex = i;
            }
        }

        this.bestPlayer = this.maxIndex;

        if(this.players[this.bestPlayer].reachedGoal)
        {
            this.minSteps = this.players[this.bestPlayer].brain.step;
            console.log("minimum steps: " + this.minSteps);
        }
            
    }
}