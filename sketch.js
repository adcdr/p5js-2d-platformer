let dudeSpriteSheet, dudeSprite;
let platforms = [];
const groundYPosition = 450;
let dudeIsMoving = false;
let dudeIsJumping = false;
let dudeIsFalling = false;
let scenery;

/**
 * The preload function runs once before anything else.
 * It is used to run tasks that take a long time, such as loading images.
 */
function preload() 
{
    // Load the sprite sheet image fo the "dude" character.
    dudeSpriteSheet = loadImage('assets/sprites/tiny-hero/Dude_Monster/Dude_Monster_Walk_6.png');
}

/**
 * The setup function also runs once after setup()
 * but before any other functions run.
 */
function setup() 
{
    // Create a canvas to draw on. It is 1500 by 800 pixels.
    createCanvas(1000, 600);

    // Create a sprite object, with 6 frames.
    dudeSprite = new Sprite(dudeSpriteSheet, 6);

    dudeSprite.setXPosition(400);
    dudeSprite.setYPosition(groundYPosition - dudeSprite.getHeight());

    // Optionally draw the bounding box.
    dudeSprite.setShowBoundingBox(true);

    // Create a platform.
    // The platform has x position is 50 pixels from the left.
    // The platform has y position 50 pixels from the top.
    // The platform has a width of 100 pixels, and a height of 20 pixels.
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
    // Set the background color to 0 (black)
    background(0);

    scenery.drawGround(groundYPosition);

    // For every platform in the platforms variable,
    // draw it to the screen.
    for (let i = 0; i < platforms.length; i++) 
    {
        platforms[i].draw();
    }

    // Draw the dude sprite to the screen.
    dudeSprite.draw();

    // For every 10th frame animate the dude sprite.
    // This means we draw the next frame from the sprite sheet.
    if (dudeIsMoving && frameCount % 10 == 0) 
    {
        dudeSprite.animate();
    }

    if (keyIsDown(LEFT_ARROW)) {
        // Update dude x position after a key press.
        dudeSprite.setXPosition(dudeSprite.getXPosition() - 1);
    }
    else if (keyIsDown(RIGHT_ARROW)) 
    {
        // Update dude x position after a key press.
        dudeSprite.setXPosition(dudeSprite.getXPosition() + 1);
    }

    if (dudeIsJumping) 
    {
        dudeSprite.setYPosition(dudeSprite.getYPosition() + 1);

        if (dudeSprite.getYPosition() + dudeSprite.getHeight() == groundYPosition) {
            dudeIsJumping = false;
        }
    }

    for (let i = 0; i < platforms.length; i++) 
    {
        if (platforms[i].isPlayerCollisionTop(dudeSprite.getXPosition(), dudeSprite.getYPosition(), dudeSprite.getWidth(), dudeSprite.getHeight())) {
            dudeIsJumping = false;
            break;
        } else if (dudeSprite.getYPosition() + dudeSprite.getHeight() < groundYPosition) {
            dudeIsJumping = true;
        }
    }
}

/**
 * This function is called once when a key is pressed on the keyboard.
 *
 * The variable "keyCode" is automatically set with the name of the
 * pressed key.
 */
function keyPressed() 
{
    dudeIsMoving = true;

    // If the left arrow key is pressed.
    if (keyCode === LEFT_ARROW) 
    {
        // Make the dude sprite face to the left.
        dudeSprite.setDirection('left');
    }
    
    // If the right arrow key is pressed.
    if (keyCode === RIGHT_ARROW)
    {
        // Make the dude sprite face to the right.
        dudeSprite.setDirection('right');
    }
    
    if (keyCode === UP_ARROW)
    {
        if (!dudeIsJumping) 
        {
        dudeSprite.setYPosition(dudeSprite.getYPosition() - 150);
            dudeIsJumping = true;
        }
    }
}

function keyReleased() 
{
    dudeIsMoving = false;
}