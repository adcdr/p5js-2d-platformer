var player;
var hearts;
var platforms = [];
var coins = [];
var canyons = [];
var enemies = [];
var groundYPosition = 450;
var worldXPosition = 0;
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
    playerSpriteSheet = loadImage('assets/sprites/tiny-hero/dude_Monster/dude_Monster_Walk_6.png');
    enemySpriteSheet = loadImage('assets/sprites/slime.png');
    coinSpriteSheet = loadImage('assets/sprites/coin/coin-sprite.png');
}

/**
 * The setup function also runs once after setup()
 * but before any other functions run.
 */
function setup()
{
    createCanvas(1500, 600);
    textSize(18)

    player = new Player(playerSpriteSheet, groundYPosition);
    // player.sprite.boundingBoxIsVisible = false;

    hearts = new Hearts(livesRemaining);

    platforms.push(new Platform(750, 80, 100, 20));
    platforms.push(new Platform(50, 350, 200, 20));
    platforms.push(new Platform(350, 250, 150, 20));
    
    coins.push(new Coin(coinSpriteSheet, 790, 55));
    coins.push(new Coin(coinSpriteSheet, 370, 225));
    coins.push(new Coin(coinSpriteSheet, 415, 225));
    coins.push(new Coin(coinSpriteSheet, 460, 225));

    canyons.push(new Canyon(1200, groundYPosition, 200));

    enemies.push(new Enemy(enemySpriteSheet, groundYPosition, 100, 200, 1.5));

    scenery = new Scenery();
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

    player.applyGravity(platforms, canyons);

    scenery.drawGround(groundYPosition);

    push();
   
        updateWorldXPosition();    

        for (var i = 0; i < canyons.length; i++)
        {
            canyons[i].draw();
        }

        for (var i = 0; i < platforms.length; i++)
        {
            platforms[i].draw();
        }
        
        for (var i = 0; i < coins.length; i++)
        {
            coins[i].draw();

            if (coins[i].isCollidingWithPlayer(player)) 
            {
                collectCoin(i);
            }
        }

        for (var i = 0; i < enemies.length; i++)
        {
            enemies[i].draw();
        }

        player.draw(); 
    
    pop();


    hearts.draw();   

    checkDeath();

    fill(255);
    text('Score: ' + score, 15, 15, 100, 80);
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
    if (keyIsDown(ENTER) && gameIsOver)
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
    if (player.hasDied())
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
}

function restartGame()
{
    score = 0;
    livesRemaining = 3;
    hearts.count = livesRemaining;
    gameIsOver = false;
    worldXPosition = 0;

    player.reset();
    loop();
}

function doGameOver()
{
    gameIsOver = true;
    draw();

    push();

        textSize(32);
        textStyle(BOLD);
        textAlign(CENTER);

        fill(143, 143, 143, 200);
        rect(200, 250, 400, 130);

        fill(255, 49, 18);
        
        text('GAME OVER', 400, 300);
        text('Press Enter to restart', 400, 350);

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

function mouseClicked() {
    console.log(mouseX, player.x)
}