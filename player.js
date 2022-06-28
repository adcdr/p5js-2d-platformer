class Player extends Character {
    constructor(spriteSheet, groundYPosition) {
        super(spriteSheet, 6, groundYPosition);
    }

    reset() {
        this.x = width / 2;
        worldXPosition = 0;
        this.y = groundYPosition - player.height;
        this.isPlummeting = false;
        this.flash();
    }

    hasDied() {
        if (this.y > height) {
            return true;
        }

        return false;
    }
}