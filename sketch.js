let heroSpriteSheet, coinSpriteSheet;
let hero;
let platforms = [];
let coins = [];
const groundYPosition = 450;
const backgroundXPosition = 0;
let scenery;
let score = 0;

/**
 * The preload function runs once before anything else.
 * It is used to run tasks that take a long time, such as loading images.
 */
function preload()
{
    heroSpriteSheet = loadImage('assets/sprites/tiny-hero/dude_Monster/dude_Monster_Walk_6.png');
    coinSpriteSheet = loadImage('assets/sprites/coin/coin-sprite.png');
}

/**
 * The setup function also runs once after setup()
 * but before any other functions run.
 */
function setup()
{
    createCanvas(1000, 600);
    textSize(18)

    const coinSprite = new Sprite(coinSpriteSheet, 6);
    const heroSprite = new Sprite(heroSpriteSheet, 6);
    
    const heroXPosition = 400;
    const heroYPosition = groundYPosition - heroSprite.height;

    hero = new Character(heroSprite, heroXPosition, heroYPosition);
    hero.sprite.boundingBoxIsVisible = true;

    platforms[0] = new Platform(750, 80, 100, 20);
    platforms[1] = new Platform(50, 350, 200, 20);
    platforms[2] = new Platform(350, 250, 150, 20);
    
    coins[0] = new Coin(coinSprite, 790, 55);
    coins[1] = new Coin(coinSprite, 370, 225);
    coins[2] = new Coin(coinSprite, 415, 225);
    coins[3] = new Coin(coinSprite, 460, 225);

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

    push();

        translate(backgroundXPosition, 0);    

    pop();

    if (keyIsDown(LEFT_ARROW))
    {
        hero.xVelocity = -1.5;
    }
    else if (keyIsDown(RIGHT_ARROW))
    {
        hero.xVelocity = 1.5;
    }

    hero.applyGravity(groundYPosition, platforms);

    scenery.drawGround(groundYPosition);

    for (let i = 0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }
    
    for (let i = 0; i < coins.length; i++)
    {
        coins[i].draw();

        if (coins[i].isCollidingWithPlayer(hero)) 
        {
            collectCoin(i);
        }
    }

    hero.draw();

    fill(255);
    text('Score: ' + score, 15, 15, 100, 80);
}

/**
 * This function is called once after a key is pressed on the keyboard.
 *
 * The variable "keyCode" is automatically set with the name of the
 * pressed key.
 */
function keyPressed()
{
    if (keyCode === LEFT_ARROW)
    {
        hero.sprite.facingDirection = 'left';
    }

    if (keyCode === RIGHT_ARROW)
    {
        hero.sprite.facingDirection = 'right';
    }

    if (keyCode === UP_ARROW)
    {
        if (!hero.isInAir)
        {
            hero.yVelocity = -5;
            hero.isInAir = true;
        }
    }
}

function keyReleased()
{
    // hero.animate = false;
    hero.xVelocity = 0;
}

function collectCoin(coinIndex) {
    coins.splice(coinIndex, 1);
    score = score - 1;
}
