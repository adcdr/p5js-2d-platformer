class Coin {
    constructor(sprite, x, y) {
        this.sprite = sprite;
        this.x = x;
        this.y = y;
        this.width = sprite.width;
        this.height = sprite.height;
    }

    draw() {
        this.sprite.draw(this.x, this.y, true);
    }

    isCollidingWithPlayer(player) {
        return (player.xPosition + player.width) >= this.x
                && player.xPosition <= (this.x + this.width)
                && (player.yPosition + player.height) >= this.y
                && player.yPosition <= (this.y + this.height) 
    }
}