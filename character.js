class Character {
    constructor(sprite, xPosition, yPosition) {
        this.sprite = sprite;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.height = sprite.height;
        this.isJumping = false;
        this.isFalling = false;
        this.isMoving = false;

        this.jumpHeight = 75;
        this.ySpeed = 0;
    }

    draw() {
        this.sprite.draw(this.xPosition, this.yPosition, this.isMoving);
    }

    jump() {
        if (this.isJumping && this.x < this.jumpHeight) {
            
        }

        this.yPosition += this.ySpeed;
    }
}