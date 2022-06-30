class Player extends Character {
    constructor(spriteSheet) {
        super(spriteSheet, 16);
    }

    reset() {
        this.x = width / 2;
        worldXPosition = 0;
        this.y = groundYPosition - player.height;
        this.isPlummeting = false;
        this.flash();
    }

    hasDied() {
        if (this.y > height || this.isInContactWithEnemy()) {
            return true;
        }

        return false;
    }

    isInContactWithEnemy() {
        for (let i = 0; i < enemies.length; i++) {
            if (enemies[i].isInContactWithPlayer()) return true;
        }

        return false;
    }
}