class Platform 
{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw() {
        push();

        // fill(30, 0, 0);

        // strokeWeight(4);
        // stroke(224, 7, 7);

        // rect(this.x, this.y, this.width, this.height);
        const drawingLineWidth = 2;

        strokeWeight(drawingLineWidth * 2);
        stroke(224, 7, 7);

        beginShape(LINES);

        rect(this.x, this.y + drawingLineWidth, this.width, 1);
        rect(this.x, this.y + this.height, this.width, 1);

        const spacing = 10;
        const wholeSegments = Math.floor(this.width / (2 * spacing));

        for (let i = 0; i < wholeSegments; i++) {
            vertex(this.x + (i*spacing) + i*spacing, this.y + drawingLineWidth);
            vertex(this.x + ((i+1)*spacing) + i*spacing, this.y + this.height);
            vertex(this.x + ((i+1)*spacing) + i*spacing, this.y + this.height);
            vertex(this.x + ((i+2)*spacing) + i*spacing, this.y + drawingLineWidth);
        }

        const finalSegmentWidth = this.width - (wholeSegments * spacing * 2);

        if (finalSegmentWidth > 5) {
            vertex(this.x + wholeSegments * spacing * 2, this.y + drawingLineWidth);
            vertex(this.x + wholeSegments * spacing * 2 + finalSegmentWidth, this.y + this.height);
        }

        endShape();

        pop();
    }

    isTopCollidingWithPlayer(player) {
        return (player.x + player.width) >= this.x
                && player.x <= (this.x + this.width)
                && (player.y + player.height) >= this.y
                && (player.y + player.height) - this.y <= (player.terminalYVelocity)
    }
}
