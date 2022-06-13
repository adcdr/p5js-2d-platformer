let dudeSpriteSheet;
let dude;
let platforms = [];
const groundYPosition = 450;
let scenery;

/**
 * The preload function runs once before anything else.
 * It is used to run tasks that take a long time, such as loading images.
 */
function preload()
{
    dudeSpriteSheet = loadImage('assets/sprites/tiny-hero/Dude_Monster/Dude_Monster_Walk_6.png');
}

/**
 * The setup function also runs once after setup()
 * but before any other functions run.
 */
function setup()
{
    createCanvas(1000, 600);

    const dudeSprite = new Sprite(dudeSpriteSheet, 6);
    const dudeXPosition = 400;
    const dudeYPosition = groundYPosition - dudeSprite.height;
    dude = new Character(dudeSprite, dudeXPosition, dudeYPosition);

    dude.sprite.boundingBoxIsVisible = true;

    platforms[0] = new Platform(50, 50, 100, 20);
    platforms[1] = new Platform(550, 350, 200, 20);
    platforms[2] = new Platform(750, 300, 150, 20);

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

    if (keyIsDown(LEFT_ARROW))
    {
        dude.xPosition = dude.xPosition - 1;
        dude.isMoving = true;
    }
    else if (keyIsDown(RIGHT_ARROW))
    {
        dude.xPosition = dude.xPosition + 1;
        dude.isMoving = true;
    }

    // if (dude.isFalling)
    // {
    //     dude.yPosition = dude.yPosition + 1;
    //
    //     if (dude.yPosition + dude.height >= groundYPosition)
    //     {
    //         dude.isFalling = false;
    //     }
    // }

    dude.jump();

    // for (let i = 0; i < platforms.length; i++)
    // {
    //     if (platforms[i].isPlayerCollisionTop(dude.xPosition, dude.yPosition, dude.sprite.width, dude.height)) {
    //         dude.isFalling = false;
    //         break;
    //     }
    //     else if (dude.yPosition + dude.height < groundYPosition)
    //     {
    //         dude.isFalling = true;
    //     }
    // }

    scenery.drawGround(groundYPosition);

    for (let i = 0; i < platforms.length; i++)
    {
        platforms[i].draw();
    }

    dude.draw();
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
        dude.sprite.facingDirection = 'left';
    }

    if (keyCode === RIGHT_ARROW)
    {
        dude.sprite.facingDirection = 'right';
    }

    if (keyCode === UP_ARROW)
    {
        dude.isJumping = true;
    }
}

function keyReleased()
{
    dude.isMoving = false;
}

// function mouseMoved() {
//     console.log(mouseX, mouseY);
// }
