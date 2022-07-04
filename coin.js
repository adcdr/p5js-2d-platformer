class Coin {
    constructor(x, y) {
        this.sprite = new Sprite(coinSpriteSheet, 6);;
        this.x = x;
        this.y = y;
        this.width = this.sprite.width;
        this.height = this.sprite.height;
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