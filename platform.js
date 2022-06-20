class Platform 
{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        push();

        fill(200, 20, 20);
        rect(this.x, this.y, this.width, this.height);

        pop();
    }

    isTopCollidingWithPlayer(player) {
        return (player.x + player.width) >= this.x
                && player.x <= (this.x + this.width)
                && (player.y + player.height) >= this.y
                && (player.y + player.height) - this.y <= (player.terminalYVelocity)
    }
}
