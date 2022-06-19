class Character {
    constructor(sprite, xPosition, yPosition) {
        this.sprite = sprite;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.height = sprite.height;
        this.width = sprite.width;
        this.isInAir = false;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.terminalYVelocity = 6;
        this.gravity = 0.15;
    }

    draw() {
        const animate = this.xVelocity !== 0;
        this.xPosition += this.xVelocity;

        this.sprite.draw(this.xPosition, this.yPosition, animate);
    }

    // jump() {
    //     this.yVelocity = -this.maxYVelocity;
    //     this.isInAir = true;
    // }

    applyGravity(groundYPosition, platforms) {
        if (this.yVelocity > this.terminalYVelocity) this.yVelocity -= this.gravity;
        if (this.yVelocity < this.terminalYVelocity) this.yVelocity += this.gravity;

        if (this.yVelocity > 0) {
            if (this.isOnGround(groundYPosition) || this.isOnPlatform(platforms)) {
                this.yVelocity = 0;
                this.isInAir = false;
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
            if (platforms[i].isTopCollidingWithPlayer(this)) 
            {
                return true;
            }
        }

        return false;
    }
}
