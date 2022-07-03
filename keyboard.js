function checkKeyDown() 
{
    if (!gameWon && !gameLost)
    {
        if (keyIsDown(LEFT_ARROW))
        {
            player.velocity.x = -3;
        }

        if (keyIsDown(RIGHT_ARROW))
        {
            player.velocity.x = 3;
        }

         // 32 is space bar
        if ((keyIsDown(UP_ARROW) || (keyIsDown(32))) && player.isInAir === false)
        {
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