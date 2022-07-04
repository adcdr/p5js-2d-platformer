function checkKeyDown()
{
    if (!gameWon && !gameLost)
    {
        if (keyIsDown(LEFT_ARROW))
        {
            player.velocity.x = -3;
        }

        // Task 1
        if (keyIsDown(RIGHT_ARROW))
        {
            player.velocity.x = 3;
        }

        if ((keyIsDown(UP_ARROW) || (keyIsDown(SPACE_BAR))) && !player.isInAir)
        {
            // Task 2
            player.velocity.y = -6;
            player.isInAir = true;
        }
    }
}

function keyReleased()
{
    player.velocity.x = 0;
}

function keyPressed()
{
    if (gameLost && keyIsDown(ENTER))
    {
        restartGame();
    }
}
