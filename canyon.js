class Canyon {
    constructor(x, width) {
        this.x = x;
        this.width = width;
    }

    draw() {
        push();

            noStroke();
            fill(43, 47, 20);
            rect(this.x, groundYPosition, this.width, windowHeight);

            // canyonImage.resize(this.width, height - groundYPosition);
            // image(canyonImage, this.x, groundYPosition);

        pop();
    }

    isPlayerInside(player) {
        return player.x + 15 > this.x && (player.x + player.width - 15) < (this.x + this.width);
    }
}