class Character {
    constructor(sprite, xPosition, yPosition) {
        this.sprite = sprite;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.height = sprite.height;
        this.isJumping = false;
        this.isMoving = false;
        this.jumpStep = 5;
        this.jumpDuration = 100;
        this.jumpTick = 0;
    }

    draw() {
        this.sprite.draw(this.xPosition, this.yPosition, this.isMoving);
    }

    jump() {
        if (this.isJumping) {
            if (this.jumpTick <= this.jumpDuration) {
                const relativeJumpTick = this.jumpTick / this.jumpDuration;
                const yDelta = this.jumpStep * Math.sin(Math.PI * relativeJumpTick);
                this.yPosition -= yDelta;

                this.jumpTick++;
            }
        }
    }
}
