function createWorldItems() {
    coins.push(new Coin(1100, 600));
    coins.push(new Coin(1600, 450));
    coins.push(new Coin(1900, 350));
    coins.push(new Coin(2500, 350));
    coins.push(new Coin(2820, 100));
    coins.push(new Coin(3500, 600));    
    coins.push(new Coin(4000, 600));    
    coins.push(new Coin(5400, 330));    
    coins.push(new Coin(5950, 600));

    platforms.push(new Platform(1500, 550, 200, 20));
    platforms.push(new Platform(1800, 450, 200, 30));
    platforms.push(new MovingPlatform(2000, 400, 100, 20, 500, 2, HORIZONTAL));
    platforms.push(new MovingPlatform(2800, 600, 50, 20, 450, 2, VERTICAL));

    canyons.push(new Canyon(3000, 200));

    enemies.push(new Enemy(3900, 4100, 500, 2));

    for (let i = 0; i < 3; i++)
    {
        let xOffset = i * 300;
        let yOffset = i * 100;

        platforms.push(new Platform(4700 + xOffset, 550 - yOffset, 200, 20));
    }
    
    enemies.push(new Enemy(5300, 5500, 300, 2));

    for (let i = 0; i < 3; i++)
    {
        let offset = i * 300;

        enemies.push(new Enemy(5800 + offset, 5800 + offset + 100, 500, 2));
    }
    
    for (let i = 0; i < 3; i++)
    {
        let offset = i * 100;
   
        coins.push(new Coin(7000 + offset, 600));
    }
}