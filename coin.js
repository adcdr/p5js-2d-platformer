class Coin {
    constructor(spriteSheet, x, distanceAboveGround) {
        this.sprite = new Sprite(spriteSheet, 6);;
        this.x = x;
        this.distanceAboveGround = distanceAboveGround;
        this.y = groundYPosition - distanceAboveGround;
        this.width = this.sprite.width;
        this.height = this.sprite.height;
    }

    updateYPosition() {        
        this.y = groundYPosition - this.distanceAboveGround;
    }

    draw() {
        this.sprite.draw(this.x, this.y, true);
    }

    isInContactWithPlayer() {
        return (player.x + player.width) >= this.x
                && player.x <= this.x + this.width
                && (player.y + player.height) >= this.y
                && player.y <= (this.y + this.height) 
    }
}