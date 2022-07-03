class Character {
    constructor(spriteSheet, frames) {
        this.sprite = new Sprite(spriteSheet, frames);
        this.height = this.sprite.height;
        this.width = this.sprite.width;
        this.x = width / 2;
        this.y = groundYPosition - this.height;
        this.isInAir = false;
        this.velocity = createVector(0, 0);
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.terminalYVelocity = 6;
        this.gravity = 0.15;
        this.flashCount = 0;
        this.applyTint = false;
        this.isPlummeting = false;
    }    

    update() {
        this.applyGravity();

        const animate = this.velocity.x !== 0;
        this.x += this.velocity.x;

        if (this.velocity.x < 0) 
            this.sprite.facingDirection = 'left';
        else if (this.velocity.x !== 0) 
            this.sprite.facingDirection = 'right'

        push()
            if (this.flashCount > 0) {
                if (frameCount % 10 === 0) {
                    this.applyTint = !this.applyTint;
                    this.flashCount--;
                }

                this.applyTint ? tint(255, 20) : tint(255, 255);
            }

            this.sprite.draw(this.x, this.y, animate);
        pop();
    }

    flash() {
        this.flashCount = 6;
    }

    applyGravity() {
        if (this.velocity.y > this.terminalYVelocity) this.velocity.y -= this.gravity;
        if (this.velocity.y < this.terminalYVelocity) this.velocity.y += this.gravity;

        if (this.isInACanyon()) {
            this.velocity.y += 5;
            this.falling = true;
        } else if (this.velocity.y > 0) {
            if (this.isOnGround() || this.isOnAPlatform()) {
                this.velocity.y = 0;
                this.isInAir = false;
            }
        }

        this.y += this.velocity.y;
    }

    isOnGround() {
        if (!this.isPlummeting && groundYPosition - (this.y + this.height) < 1) {
            this.y = groundYPosition - this.height;
            return true;
        }
    }

    isOnAPlatform() {
        for (let i = 0; i < platforms.length; i++) {
            if (platforms[i].isCharacterOnTop(this)) {
                this.y = platforms[i].y - this.height + (platforms[i].speed || 0);
                return true;
            }
        }

        return false;
    }

    isInACanyon() {
        if ((this.y + this.height) >= groundYPosition) {
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
