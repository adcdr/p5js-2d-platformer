class Enemy extends Character {
    constructor(spriteSheet, xMin, xMax, y, speed) {
        super(spriteSheet, 8);
                
        this.xMin = xMin;
        this.xMax = xMax;
        this.speed = speed;
        this.xVelocity = speed;

        this.x = (xMin + xMax) / 2;
        this.initialY = y - this.height
        this.y = this.initialY;
        this.movingLeft = false;
    }

    update() {
        super.update();
        this.doPatrol();
    }

    doPatrol() {
        if (this.movingLeft) {
            if (this.x > this.xMin) {
                this.xVelocity = -this.speed;
            } else {
                this.movingLeft = false;
            }
        } else {
            if (this.x + this.width < this.xMax) {
                this.xVelocity = this.speed;
            } else {
                this.movingLeft = true;
            }
        }
    }

    isInContactWithPlayer() {
        return ((this.x >= player.x && this.x <= (player.x + player.width))
                || ((this.x + this.width) >= player.x && (this.x + this.width) <= (player.x + player.width)))
                && 
                ((this.y >= player.y && this.y <= (player.y + player.height))
                || ((this.y + this.height) >= player.y && (this.y + this.height) <= (player.y + player.height)))
    }

    reset() {
        this.x = (this.xMin + this.xMax) / 2
        this.y = this.initialY;
        this.movingLeft = false;
    }
}