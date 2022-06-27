class Canyon {
    constructor(x, y, width) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height - y;
    }

    draw() {
        push();

            fill(0);
            rect(this.x, this.y, this.width, this.height);

        pop();
    }

    isPlayerInside(player) {
        return player.x > this.x && (player.x + player.width) < (this.x + this.width);
    }
}