class Scenery {
    drawGround(y) {
        push();

        noStroke();

        fill(173, 100, 57);
        rect(0, y, width, height);

        fill(26,98,48);
        rect(0, y, width, height / 25)

        fill(82,165,61);
        rect(0, y, width, 4);

        pop();
    }
}
