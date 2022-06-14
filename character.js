class Character {
    constructor(sprite, xPosition, yPosition) {
        this.sprite = sprite;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.height = sprite.height;
        this.width = sprite.width;
        this.isMoving = false;
        this.isInAir = true;
        this.yVelocity = 0;
        this.maxYVelocity = 7;
        this.gravity = 0.15;
    }

    draw() {
        this.sprite.draw(this.xPosition, this.yPosition, this.isMoving);
    }

    jump() {
        this.yVelocity = -this.maxYVelocity;
    }

    applyGravity(groundYPosition, platforms) {
        if (this.yVelocity >= (-this.maxYVelocity) && this.yVelocity < this.maxYVelocity) {
            this.yVelocity += this.gravity;
        }

        if (this.yVelocity > 0) {
            if (this.isOnGround(groundYPosition) || this.isOnPlatform(platforms)) {
                this.yVelocity = 0;
                this.isInAir = true;
            }
        }

        this.yPosition += this.yVelocity;
    }

    isOnGround() {
        return groundYPosition - (this.yPosition + this.height) < 1;
    }

    isOnPlatform(platforms) {
        for (let i = 0; i < platforms.length; i++)
        {
            if (platforms[i].isCollidingWithPlayer(this)) 
            {
                return true;
            }
        }

        return false;
    }
}
