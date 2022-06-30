class Sprite {
    constructor(spriteSheet, numberOfFrames) {
        this.numberOfFrames = numberOfFrames;
        this.width = spriteSheet.width / numberOfFrames;
        this.height = spriteSheet.height;
        this.frames = this.getFrames(spriteSheet);
        this.currentFrame = 0;
        this.facingDirection = 'right';
        this.previousFacingDirection = this.facingDirection;
        this.boundingBoxIsVisible = false;
    }

    getFrames(spriteSheet) {
        const frames = [];
        const numberOfFrames = spriteSheet.width / this.width;

        for (let i = 0; i < numberOfFrames; i++) {
            let frame = spriteSheet.get(i * this.width, 0, this.width, this.height);
            frames.push(frame);
        }

        return frames;
    }

    draw(x, y, animate) {
        push();

        this.updateFrame(animate);

        if (this.facingDirection === 'left') {
            scale(-1, 1);
            x = -1 * x - this.width;
        }

        image(this.frames[this.currentFrame], x, y);

        this.drawBoundingBox(x, y);        

        pop();
    }

    updateFrame(animate) {
        if (animate) {
            if (frameCount % (20 - this.numberOfFrames) == 0) {
                this.currentFrame += 1;
                this.currentFrame = this.currentFrame % this.frames.length;
            }
        } else {
            this.currentFrame = 0;
        }
    }    

    drawBoundingBox(x, y) {
        if (this.boundingBoxIsVisible) {
            noFill();
            stroke(0, 255, 0);
            rect(x, y, this.width, this.height);
        }
    }
}
