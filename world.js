function createWorldItems() {
    coins.push(new Coin(1100, 500));
    coins.push(new Coin(1600, 350));
    coins.push(new Coin(1900, 250));
    coins.push(new Coin(2500, 250));
    coins.push(new Coin(2820, 50));
    coins.push(new Coin(3500, 500));
    coins.push(new Coin(4000, 500));
    coins.push(new Coin(5400, 230));
    coins.push(new Coin(5950, 500));

    platforms.push(new Platform(1500, 450, 200, 20));

    // Task 3
    platforms.push(new Platform(1800, 350, 200, 30));

    platforms.push(new MovingPlatform(2000, 300, 100, 20, 500, 2, HORIZONTAL));

    platforms.push(new MovingPlatform(2800, 500, 50, 20, 450, 2, VERTICAL));

    canyons.push(new Canyon(3000, 200));

    enemies.push(new Enemy(3900, 4100, 400, 2));

    for (let i = 0; i < 3; i++)
    {
        let xOffset = i * 300;
        let yOffset = i * 100;

        platforms.push(new Platform(4700 + xOffset, 450 - yOffset, 200, 20));
    }

    enemies.push(new Enemy(5300, 5500, 200, 2));

    for (let i = 0; i < 3; i++)
    {
        let offset = i * 300;

        enemies.push(new Enemy(5800 + offset, 5800 + offset + 100, 400, 2));
    }

    for (let i = 0; i < 3; i++)
    {
        let offset = i * 100;

        coins.push(new Coin(7000 + offset, 500));
    }
}
