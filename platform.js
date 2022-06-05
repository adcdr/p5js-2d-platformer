class Platform {
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

    isPlayerCollisionTop(playerX, playerY, playerWidth, playerHeight) {
        if (playerX >= this.x
            && playerX <= this.x + playerWidth
            && playerY + playerHeight - this.y < 1) {
            return true;
        }
        else {
            return false;
        }
    }
}
