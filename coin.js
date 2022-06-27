class Coin {
    constructor(spriteSheet, x, y) {
        this.sprite = new Sprite(spriteSheet, 6);;
        this.x = x;
        this.y = y;
        this.width = this.sprite.width;
        this.height = this.sprite.height;
    }

    draw() {
        this.sprite.draw(this.x, this.y, true);
    }

    isCollidingWithPlayer(player) {
        return (player.x + player.width) >= this.x
                && player.x <= this.x + this.width
                && (player.y + player.height) >= this.y
                && player.y <= (this.y + this.height) 
    }
}