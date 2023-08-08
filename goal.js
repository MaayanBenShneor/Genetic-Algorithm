class Goal
{
    constructor(x, y, w, h)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    show()
    {
        fill(0, 250, 0);
        ellipse(this.x, this.y, this.w, this.h);
    }
}