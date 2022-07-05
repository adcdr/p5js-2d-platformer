function checkKeyDown()
{
    if (!gameWon && !gameLost)
    {
        if (keyIsDown(LEFT_ARROW))
        {
            player.velocity.x = -3.2;
        }


        //=================
        // Task 1
        //=================


        if ((keyIsDown(UP_ARROW) || (keyIsDown(SPACE_BAR))) && !player.isInAir)
        {
            //=================
            // Task 2
            //=================
            player.velocity.y = -4;

            player.isInAir = true;
            jumpSound.play();
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
