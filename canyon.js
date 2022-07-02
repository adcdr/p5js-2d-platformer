class Canyon {
    constructor(x, width) {
        this.x = x;
        this.width = width;
    }

    draw() {
        push();

            fill(0);
            rect(this.x, groundYPosition, this.width, windowHeight);

        pop();
    }

    isPlayerInside(player) {
        return player.x + 15 > this.x && (player.x + player.width - 15) < (this.x + this.width);
    }
}