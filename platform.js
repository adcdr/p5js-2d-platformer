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

        fill(110, 0, 0);

        strokeWeight(4);
        stroke(224, 7, 7);

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
