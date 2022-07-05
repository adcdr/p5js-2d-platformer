function createWorldItems() {
    coins.push(new Coin(1100, 500));
    coins.push(new Coin(1600, 320));
    coins.push(new Coin(2325, 500));
    coins.push(new Coin(3000, 50));
    coins.push(new Coin(3700, 450));
    coins.push(new Coin(4850, 530));
    coins.push(new Coin(6000, 200));
    coins.push(new Coin(7000, 500));
    coins.push(new Coin(7950, 150));
    coins.push(new Coin(8400, 500));

    platforms.push(new Platform(1500, 450, 200, 20));
    platforms.push(new Platform(7850, 200, 200, 20));


    //=================
    // Task 3
    //=================


    //=================
    // Task 4
    //=================


    //=================
    // Task 5
    //=================


    canyons.push(new Canyon(-1500, 2000));
    canyons.push(new Canyon(2100, 500));
    canyons.push(new Canyon(3500, 500));
    canyons.push(new Canyon(7700, 600));


    //=================
    // Task 6
    //=================


    //=================
    // Task 7
    //=================
    for (let i = 0; i < 3; i++)
    {
        let xOffset = i * 300;

        platforms.push(new Platform(5300 + xOffset, 450, 200, 20));
    }

    enemies.push(new Enemy(4820, 4900, 550, 2));
    enemies.push(new Enemy(7850, 8050, 150, 10));

    //=================
    // Task 8
    //=================
    for (let i = 0; i < 3; i++)
    {
        enemies.push(new Enemy(6950, 7050, 550, 2));
    }
}
