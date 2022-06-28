class Character {
    constructor(spriteSheet, frames, groundYPosition) {
        this.sprite = new Sprite(spriteSheet, frames);
        this.groundYPosition = groundYPosition;
        this.height = this.sprite.height;
        this.width = this.sprite.width;
        this.x = width / 2;
        this.y = groundYPosition - this.height;
        this.isInAir = false;
        this.xVelocity = 0;
        this.yVelocity = 0;
        this.terminalYVelocity = 6;
        this.gravity = 0.15;
        this.flashCount = 0;
        this.applyTint = false;
        this.isPlummeting = false;
    }    

    draw() {
        const animate = this.xVelocity !== 0;
        this.x += this.xVelocity;

        if (this.xVelocity < 0) 
            this.sprite.facingDirection = 'left';
        else 
            this.sprite.facingDirection = 'right'

        push()
            if (this.flashCount > 0) {
                if (frameCount % 20 === 0) {
                    this.applyTint = !this.applyTint;
                    this.flashCount--;
                }

                if (this.applyTint) {
                    tint(255, 100);
                } else {
                    tint(255, 255);
                }
            }

            this.sprite.draw(this.x, this.y, animate);
        pop();
    }

    flash() {
        this.flashCount = 6;
    }

    applyGravity(platforms, canyons) {
        if (this.yVelocity > this.terminalYVelocity) this.yVelocity -= this.gravity;
        if (this.yVelocity < this.terminalYVelocity) this.yVelocity += this.gravity;

        if (this.isInACanyon(canyons)) {
            this.yVelocity += 5;
            this.falling = true;
        } else if (this.yVelocity > 0) {
            if (this.isOnGround(groundYPosition) || this.isOnAPlatform(platforms)) {
                this.yVelocity = 0;
                this.isInAir = false;
            }
        }

        this.y += this.yVelocity;
    }

    isOnGround() {
        return !this.isPlummeting && this.groundYPosition - (this.y + this.height) < 1;
    }

    isOnAPlatform(platforms) {
        for (let i = 0; i < platforms.length; i++) {
            if (platforms[i].isTopCollidingWithPlayer(this)) {
                return true;
            }
        }

        return false;
    }

    isInACanyon(canyons) {
        if ((this.y + this.height) >= this.groundYPosition) {
            for (let i = 0; i < canyons.length; i++) {
                if (canyons[i].isPlayerInside(this)) {
                    this.isPlummeting = true;
                    return true;
                }
            }
        }

        return false;
    }
}
