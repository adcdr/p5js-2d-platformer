function createWorldItems() {
    coins.push(new Coin(1100, 500));
    coins.push(new Coin(1600, 320));
    coins.push(new Coin(2325, 500));
    coins.push(new Coin(3000, 50));
    coins.push(new Coin(3700, 450));
    coins.push(new Coin(4800, 530));
    coins.push(new Coin(6000, 200));
    coins.push(new Coin(7000, 500));
    coins.push(new Coin(7950, 150));
    coins.push(new Coin(8400, 500));

    platforms.push(new Platform(1500, 450, 200, 20));

    // Task 3    
    platforms.push(new Platform(2050, 530, 600, 30));

    platforms.push(new Platform(7850, 200, 200, 20));

    platforms.push(new MovingPlatform(2980, 500, 50, 20, 400, 2, VERTICAL));
    platforms.push(new MovingPlatform(3400, 500, 100, 15, 600, 2, HORIZONTAL));

    canyons.push(new Canyon(-500, 1000));
    canyons.push(new Canyon(2100, 500));
    canyons.push(new Canyon(3500, 500));
    canyons.push(new Canyon(4750, 50));
    canyons.push(new Canyon(7700, 600));

    for (let i = 0; i < 3; i++)
    {
        let xOffset = i * 300;
        let yOffset = i * 100;

        platforms.push(new Platform(5300 + xOffset, 450 - yOffset, 200, 20));
    }

    enemies.push(new Enemy(4700, 4900, 200, 20));
    enemies.push(new Enemy(7850, 8050, 150, 10));

    for (let i = 0; i < 3; i++)
    {
        let offset = i * 300;

        enemies.push(new Enemy(6500 + offset, 6800 + offset + 100, 400, 2));
    }
}
