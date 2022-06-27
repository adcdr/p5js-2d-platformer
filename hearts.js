class Hearts {
    constructor(livesRemaining) {
        this.count = livesRemaining;
        this.size = 15;
        this.x = width - 90;
        this.y = 20;
    }

    draw() {
        push();

        fill(255, 0, 0);
        
        for (let i = 0; i < this.count; i++) {
            beginShape();

            vertex(this.x + (i * this.size * 2), this.y);

            bezierVertex(
                this.x - this.size / 2 + (i * this.size * 2), 
                this.y - this.size / 2, 
                this.x - this.size + (i * this.size * 2), 
                this.y + this.size / 3, 
                this.x + (i * this.size * 2), 
                this.y + this.size);

            bezierVertex(
                this.x + this.size + (i * this.size * 2), 
                this.y + this.size / 3, 
                this.x + this.size / 2 + (i * this.size * 2), 
                this.y - this.size / 2, 
                this.x + (i * this.size * 2), 
                this.y);

            endShape(CLOSE);
        }

        pop();
    }
}