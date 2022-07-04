class Platform 
{
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    update() {}


    draw() {
        push();

        const drawingLineWidth = 2;

        strokeWeight(drawingLineWidth * 2);
        stroke(181, 43, 2);

        beginShape(LINES);        

        const spacing = 10;
        const wholeSegments = Math.floor(this.width / (2 * spacing));

        for (let i = 0; i < wholeSegments; i++) {
            vertex(this.x + (i*spacing) + i*spacing, this.y + drawingLineWidth + 1);
            vertex(this.x + ((i+1)*spacing) + i*spacing, this.y + this.height);
            vertex(this.x + ((i+1)*spacing) + i*spacing, this.y + this.height);
            vertex(this.x + ((i+2)*spacing) + i*spacing, this.y + drawingLineWidth + 1);
        }

        const finalSegmentWidth = this.width - (wholeSegments * spacing * 2);

        if (finalSegmentWidth > 5) {
            vertex(this.x + wholeSegments * spacing * 2, this.y + drawingLineWidth + 1);
            vertex(this.x + wholeSegments * spacing * 2 + finalSegmentWidth, this.y + this.height);
        }

        endShape();

        stroke(247, 7, 7);
        rect(this.x, this.y + drawingLineWidth, this.width, 1);
        rect(this.x, this.y + this.height, this.width, 1);

        pop();
    }

    isCharacterOnTop(character) {
        return (character.x + character.width - 15) >= this.x
                && character.x + 15 <= (this.x + this.width)
                && (character.y + character.height) >= this.y
                && (character.y + character.height) - this.y <= character.terminalYVelocity;
    }
}
