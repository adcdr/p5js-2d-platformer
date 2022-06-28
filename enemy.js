class Enemy extends Character {
    constructor(spriteSheet, groundYPosition, xMin, xMax, speed) {
        super(spriteSheet, 8, groundYPosition);
                
        this.xMin = xMin;
        this.xMax = xMax;
        this.speed = speed;
        this.xVelocity = speed;

        this.x = (xMin + xMax) / 2;
        this.movingLeft = false;
    }

    draw() {
        this.doPatrol();
        super.draw();
    }

    doPatrol() {
        if (this.movingLeft) {
            if (this.x > this.xMin) {
                this.xVelocity = -this.speed;
                console.log(1)
            } else {
                this.movingLeft = false;
            }
        } else {
            if (this.x < this.xMax) {
                this.xVelocity = this.speed;
                console.log(2)
            } else {
                this.movingLeft = true;
            }
        }
    }
}