function createWorldItems() {
    coins.push(new Coin(coinSpriteSheet, 1100, 750));
    coins.push(new Coin(coinSpriteSheet, 1600, 650));
    coins.push(new Coin(coinSpriteSheet, 1900, 550));
    coins.push(new Coin(coinSpriteSheet, 2250, 550));

    platforms.push(new Platform(1500, 700, 200, 20));
    platforms.push(new Platform(1800, 600, 200, 30));
    platforms.push(new MovingPlatform(2000, 600, 100, 20, 200, 2, 'HORIZONTAL'));
    // platforms.push(new MovingPlatform(750, 500, 200, 20, 100, 2, 'VERTICAL'));
    
    // coins.push(new Coin(coinSpriteSheet, 460, 570));
    // coins.push(new Coin(coinSpriteSheet, 840, 470));

    // canyons.push(new Canyon(1200, 200));

    // enemies.push(new Enemy(enemySpriteSheet, 350, 500, 200, 1.5));
}