class Scenery {
    drawGround(y) {
        push();

        fill(80, 200, 50);
        rect(0, y, width, height);

        pop();
    }
}
