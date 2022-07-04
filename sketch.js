const HORIZONTAL = 0;
const VERTICAL = 1;
const SPACE_BAR = 32;

let player;
let hearts;
const platforms = [];
const coins = [];
const originalCoins = [];
const canyons = [];
const enemies = [];
const fireworks = [];
const trees = [];
let worldXPosition = 0;
let worldHeight = 700;
const groundYPosition = worldHeight * 0.8;
let scenery;
let score = 0;
const scoreToWin = 12;
let livesRemaining = 3;
let gameLost = false;
let gameWon = false;
let playerSpriteSheet, enemySpriteSheet, coinSpriteSheet, treesSpriteSheet, mountainsImage;

function preload()
{
    playerSpriteSheet = loadImage('assets/sprites/purple_monster.png');
    enemySpriteSheet = loadImage('assets/sprites/green_slime.png');
    coinSpriteSheet = loadImage('assets/sprites/coin/coin-sprite.png');
    treesSpriteSheet = loadImage('assets/sprites/trees.png')
    mountainsImage = loadImage('assets/mountains.png');
}

function setup()
{
    createCanvas(windowWidth, worldHeight);
    textSize(18);

    player = new Player(playerSpriteSheet);

    hearts = new Hearts(livesRemaining);

    createWorldItems();

    scenery = new Scenery();

    copyCoins(coins, originalCoins);
}

function draw()
{
    background(0);

    checkKeyDown();

    scenery.drawGround();
    scenery.drawBackground();

    push();

        updateWorldXPosition();

        canyons.forEach(canyon => {
            canyon.draw();
        });

        scenery.drawTrees();

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

    if (gameWon)
    {
        doGameWon();
    }
}

function collectCoin(coinIndex)
{
    coins.splice(coinIndex, 1);
    score = score + 1;

    if (score === scoreToWin)
    {
        gameWon = true;
    }
}

function checkDeath()
{
    if (!this.gameLost && player.hasDied())
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
    gameLost = false;
    worldXPosition = 0;

    player.reset();

    enemies.forEach(enemy => {
        enemy.reset();
    });

    copyCoins(originalCoins, coins)

    loop();
}

function updateWorldXPosition()
{
    var playerDistanceFromMiddle = Math.abs((player.x + worldXPosition) - (width / 2));

    if (playerDistanceFromMiddle !== 0 && (keyIsDown(RIGHT_ARROW) || keyIsDown(LEFT_ARROW)))
    {
        worldXPosition = worldXPosition - player.velocity.x;
    }

    translate(worldXPosition, 0);
}

function windowResized()
{
    resizeCanvas(windowWidth, worldHeight);

    hearts.x = width - 90;
}

function copyCoins(coinsA, coinsB)
{
    coinsA.forEach(coin => {
        coinsB.push(coin);
    });
}

function doGameWon()
{
    push();

        noStroke();
        fill(0, 0, 0, 130);
        rect(0, 0, width, height);

    pop();

    push();

        if (random(1) < 0.03) {
            fireworks.push(new Firework());
        }

        for (let i = fireworks.length - 1; i >= 0; i--) {
            fireworks[i].update();
            fireworks[i].show();

            if (fireworks[i].done()) {
              fireworks.splice(i, 1);
            }
        }

    pop();

    displayMessage('Congratulations', 'YOU WIN!');
}

function doGameOver()
{
    gameLost = true;

    displayMessage('GAME OVER', 'Press "enter" to restart...');
    noLoop();
}

function displayMessage(line1, line2)
{
    push();

    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER);

    fill(173, 177, 222);
    rect((width - 400) / 2 - 10, (height - 300) / 2 - 10, 420, 150);

    fill(34, 47, 191);
    rect((width - 400) / 2, (height - 300) / 2, 400, 130);

    fill(255);

    text(line1, (width - 400)/2 + 200, (height - 300)/2 + 50);
    text(line2, (width - 400)/2 + 200, (height - 300)/2 + 100);

    pop();
}
