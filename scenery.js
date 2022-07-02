class Scenery {
    drawGround(y) {
        push();

        noStroke();

        fill(105, 55, 31);
        rect(0, y, width, height);

        fill(72, 120, 23);
        rect(0, y, width, height / 25)

        fill(33, 74, 42);
        rect(0, y, width, 4);

        pop();
    }
}
