class Enemy extends Character {
    constructor(spriteSheet, xMin, xMax, distanceAboveGround, speed) {
        super(spriteSheet, 2);
                
        this.xMin = xMin;
        this.xMax = xMax;
        this.speed = speed;
        this.xVelocity = speed;

        this.x = (xMin + xMax) / 2;
        this.distanceAboveGround = distanceAboveGround;
        this.initialY = groundYPosition - distanceAboveGround - this.height;
        this.y = this.initialY;
        this.movingLeft = false;
    }

    updateYPosition() {
        this.y = groundYPosition - this.distanceAboveGround;
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
        return Math.hypot((this.x + this.width/2) - (player.x + player.width/2), (this.y + this.height/2) - (player.y + player.height/2)) 
                <= this.width/2 + player.width/2;
    }

    reset() {
        this.x = (this.xMin + this.xMax) / 2
        this.y = this.initialY;
        this.movingLeft = false;
    }
}