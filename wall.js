class Wall
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.adjustable = true;
        this.width = 0;
        this.height = 0;
    }

    show()
    {
        fill(0, 0, 250);
        stroke(0, 0, 250);
        rect(this.x, this.y, this.width, this.height);
    }

    update()
    {
        if(mouseIsPressed && this.adjustable)
        {
            this.width = -(this.x - mouseX);
            this.height = -(this.y - mouseY);
        }
        else
            this.adjustable = false;
    }
}