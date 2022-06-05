let dudeSpriteSheet, dudeSprite;
let platforms = [];
const floorYPosition = 450;
const dudeWidth = 35;
const dudeHeight = 35;
let dudeXPosition = 400;
let dudeYPosition = floorYPosition - dudeHeight;
let dudeIsMoving = false;
let dudeIsJumping = false;
let dudeIsFalling = false;
let scenery;

/**
 * The preload function runs once before anything else.
 * It is used to run tasks that take a long time, such as loading images.
 */
function preload() {
    // Load the sprite sheet image fo the "dude" character.
    dudeSpriteSheet = loadImage('assets/sprites/tiny-hero/Dude_Monster/Dude_Monster_Run_6.png');
}

/**
 * The setup function also runs once after setup()
 * but before any other functions run.
 */
function setup() {
    // Create a canvas to draw on. It is 1500 by 800 pixels.
    createCanvas(1000, 600);

    // Create a sprite object, with 6 frames.
    dudeSprite = new Sprite(dudeSpriteSheet, 6);

    dudeSprite.setXPosition(dudeXPosition);
    dudeSprite.setYPosition(dudeYPosition);

    // Optionally draw the bounding box.
    dudeSprite.setShowBoundingBox(true);

    // Create a platform.
    // The platform has x position is 50 pixels from the left.
    // The platform has y position 50 pixels from the top.
    // The platform has a width of 100 pixels, and a height of 20 pixels.
    platforms[0] = new Platform(50, 50, 100, 20);
    platforms[1] = new Platform(550, 350, 200, 20);

    scenery = new Scenery();
}

/**
 * This is the main game loop.
 * It is called once for every frame in the game.
 * It runs forever.
 */
function draw() {
    // Set the background color to 0 (black)
    background(0);

    scenery.draw();

    // Draw the dude sprite to the screen.
    dudeSprite.draw();

    // For every 10th frame animate the dude sprite.
    // This means we draw the next frame from the sprite sheet.
    if (dudeIsMoving && frameCount % 10 == 0) {
        dudeSprite.animate();
    }

    // For every platform in the platforms variable,
    // draw it to the screen.
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }

    if (keyIsDown(LEFT_ARROW)) {
        // Update position after a key press
        dudeXPosition = dudeXPosition - 1;

        // Set the dude sprites x position on the screen.
        dudeSprite.setXPosition(dudeXPosition);
    }
    else if (keyIsDown(RIGHT_ARROW)) {
        // Update position after a key press
        dudeXPosition = dudeXPosition + 1;

        // Set the dude sprites x position on the screen.
        dudeSprite.setXPosition(dudeXPosition);
    }

    if (dudeIsJumping) {
        dudeYPosition = dudeYPosition + 1;

        dudeSprite.setYPosition(dudeYPosition);

        if (dudeYPosition + dudeHeight == floorYPosition) {
            dudeIsJumping = false;
        }
    }

    for (let i = 0; i < platforms.length; i++) {
        if (platforms[i].isPlayerCollisionTop(dudeXPosition, dudeYPosition, dudeWidth, dudeHeight)) {
            dudeIsJumping = false;
            dudeIsFalling = false;
        } else if (dudeYPosition + dudeHeight < floorYPosition) {
            dudeIsFalling = true;
            console.log(dudeIsFalling);
        }
    }
}

/**
 * This function is called once when a key is pressed on the keyboard.
 *
 * The variable "keyCode" is automatically set with the name of the
 * pressed key.
 */
function keyPressed() {
    dudeIsMoving = true;

    // If the left arrow key is pressed.
    if (keyCode === LEFT_ARROW) {
        // Make the dude sprite face to the left.
        dudeSprite.setDirection('left');
    }
    // If the right arrow key is pressed.
    else if (keyCode === RIGHT_ARROW)
    {
        // Make the dude sprite face to the right.
        dudeSprite.setDirection('right');
    }
    else if (keyCode === UP_ARROW)
    {
        if (!dudeIsJumping) {
            dudeYPosition = dudeYPosition - 150;
            dudeSprite.setYPosition(dudeYPosition);
            dudeIsJumping = true;
        }
    }
}

function keyReleased() {
    dudeIsMoving = false;
}
