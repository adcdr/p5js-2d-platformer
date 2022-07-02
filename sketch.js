var player;
var hearts;
var platforms = [];
var coins = [];
var originalCoins = [];
var canyons = [];
var enemies = [];
var worldXPosition = 0;
var worldHeight = 1000;
var groundYPosition = worldHeight * 0.8;
var scenery;
var score = 0;
var livesRemaining = 3;
var gameIsOver = false;

/**
 * The preload function runs once before anything else.
 * It is used to run tasks that take a long time, such as loading images.
 */
function preload()
{
    playerSpriteSheet = loadImage('assets/sprites/purple_monster.png');
    enemySpriteSheet = loadImage('assets/sprites/green_slime.png');
    coinSpriteSheet = loadImage('assets/sprites/coin/coin-sprite.png');
}

/**
 * The setup function also runs once after setup()
 * but before any other functions run.
 */
function setup()
{
    createCanvas(windowWidth, worldHeight);
    textSize(18);

    player = new Player(playerSpriteSheet);
    // player.sprite.boundingBoxIsVisible = true;

    hearts = new Hearts(livesRemaining);
    platforms.push(new MovingPlatform(50, 100, 200, 20, 100, 2, 'VERTICAL'));
    platforms.push(new MovingPlatform(350, 200, 150, 20, 100, 2, 'HORIZONTAL'));
    platforms.push(new Platform(750, 370, 133, 20));
    
    coins.push(new Coin(coinSpriteSheet, 415, 230));
    coins.push(new Coin(coinSpriteSheet, 810, 400));

    canyons.push(new Canyon(1200, 200));

    enemies.push(new Enemy(enemySpriteSheet, 350, 500, 200, 1.5));
    // enemies[0].sprite.boundingBoxIsVisible = true;

    scenery = new Scenery();

    copyCoins(coins, originalCoins);
}

/**
 * This is the main game loop.
 * It is called once for every frame in the game.
 * It runs forever.
 */
function draw()
{
    background(0);

    checkKeyboardInput();

    scenery.drawGround(groundYPosition);

    push();
   
        updateWorldXPosition();    

        canyons.forEach(canyon => {
            canyon.draw();
        });

        platforms.forEach(platform => {
            platform.update();
            platform.draw();
        });
        
        coins.forEach((coin, index) => {
            coin.draw();

            if (coin.isInContactWithPlayer()) 
            {
                collectCoin(index);
            }
        });

        enemies.forEach(enemy => {
            enemy.update();
        });

        player.update(); 
    
    pop();
    
    hearts.draw();   

    checkDeath();

    fill(255);
    text('Score: ' + score, 20, 20, 100, 80);
}

function checkKeyboardInput() 
{
    if (keyIsDown(LEFT_ARROW))
    {
        player.xVelocity = -3;
    }

    if (keyIsDown(RIGHT_ARROW))
    {
        player.xVelocity = 3;
    }

    if (keyIsDown(UP_ARROW) && player.isInAir === false)
    {
        player.yVelocity = -6;
        player.isInAir = true;
    }
}

function keyReleased()
{
    player.xVelocity = 0;
}

function keyPressed() 
{
    if (gameIsOver && keyIsDown(ENTER))
    {
        restartGame();
    }
}

function collectCoin(coinIndex) 
{
    coins.splice(coinIndex, 1);
    score = score + 1;
}

function checkDeath() 
{
    if (!this.gameIsOver && player.hasDied())
    {
        livesRemaining = livesRemaining - 1;
        hearts.count = livesRemaining;

        if (livesRemaining === 0)
        {
            doGameOver();
        }
        else
        {
            resetLevel();
        }
    }    
}

function resetLevel() 
{
    player.reset();

    for (let i = 0; i < enemies.length; i++)
    {
        enemies[i].reset();
    }

    loop();
}

function restartGame()
{
    score = 0;
    livesRemaining = 3;
    hearts.count = livesRemaining;
    gameIsOver = false;
    worldXPosition = 0;

    player.reset();

    enemies.forEach(enemy => {
        enemy.reset();
    });

    copyCoins(originalCoins, coins) 

    loop();
}

function doGameOver()
{
    gameIsOver = true;

    push();

        textSize(32);
        textStyle(BOLD);
        textAlign(CENTER);

        fill(173, 177, 222);
        rect((width - 400) / 2 - 10, (height - 300) / 2 - 10, 420, 150);
        
        fill(34, 47, 191);
        rect((width - 400) / 2, (height - 300) / 2, 400, 130);

        fill(255);
        
        text('GAME OVER', (width - 400)/2 + 200, (height - 300)/2 + 50);
        text('Press "enter" to restart...', (width - 400)/2 + 200, (height - 300)/2 + 100);

    pop();
    
    noLoop();
}

function updateWorldXPosition()
{
    var playerDistanceFromMiddle = Math.abs((player.x + worldXPosition) - (width / 2));
    
    if (playerDistanceFromMiddle > 1 && (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)))
    {        
        worldXPosition = worldXPosition - player.xVelocity;
    }

    translate(worldXPosition, 0);    
}

function windowResized() 
{
    resizeCanvas(windowWidth, worldHeight);

    hearts.x = width - 90;

    platforms.forEach(platform => {
        platform.updateYPosition();
    });

    enemies.forEach(enemy => {
        enemy.updateYPosition();
    });

    coins.forEach(coin => {
        coin.updateYPosition();
    });
}

function copyCoins(coinsA, coinsB) 
{
    coinsA.forEach(coin => {
        coinsB.push(coin);
    });
}