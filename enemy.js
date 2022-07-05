class Enemy extends Character {
    constructor(xMin, xMax, y, speed) {
        super(enemySpriteSheet, 2);

        this.xMin = xMin;
        this.xMax = xMax;
        this.speed = speed;
        this.velocity.x = speed;

        this.x = random(xMin, xMax);
        this.y = y;
        this.initialY = y;
        this.movingLeft = false;
    }

    update() {
        if (this.isOnScreen()) {
            super.update();
            this.doPatrol();
        }
    }

    doPatrol() {
        if (this.movingLeft) {
            if (this.x > this.xMin) {
                this.velocity.x = -this.speed;
            } else {
                this.movingLeft = false;
            }
        } else {
            if (this.x + this.width < this.xMax) {
                this.velocity.x = this.speed;
            } else {
                this.movingLeft = true;
            }
        }
    }

    isInContactWithPlayer() {
        return Math.hypot((this.x + this.width/2) - (player.x + player.width/2), (this.y + this.height/2) - (player.y + player.height/2))
                <= this.width/2 + player.width/2;
    }

    reset() {
        this.x = (this.xMin + this.xMax) / 2
        this.y = this.initialY;
        this.movingLeft = false;
    }

    isOnScreen() {
        return this.x - worldXPosition > 0 && this.x + worldXPosition < width;
    }
}
