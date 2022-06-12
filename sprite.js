class Sprite {
    constructor(spriteSheet, numberOfFrames) {
        this.x = 0;
        this.y = 0;
        this.width = spriteSheet.width / numberOfFrames;
        this.height = spriteSheet.height;

        this.frames = this.getFrames(spriteSheet);
        this.currentFrame = 0;
        this.direction = 'right';
        this.showBoundingBox = false;
    }

    setShowBoundingBox(showBoundingBox) {
        this.showBoundingBox = showBoundingBox;
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

    draw() {
        push();

        if (this.showBoundingBox) {
            noFill();
            stroke(0, 255, 0);
        }

        if (this.direction === 'left') {
            const mirroredX = -1 * this.x - this.width
            scale(-1, 1); // Flip image horizontally.
            image(this.frames[this.currentFrame], mirroredX, this.y);

            if (this.showBoundingBox) {
                rect(mirroredX, this.y, this.width, this.height);
            }
        }

        image(this.frames[this.currentFrame], this.x, this.y);

        if (this.showBoundingBox) {
            rect(this.x, this.y, this.width, this.height);
        }

        pop();
    }

    animate() {
        this.currentFrame += 1;
        this.currentFrame = this.currentFrame % this.frames.length;
    }

    setDirection(direction) {
        this.direction = direction;
    }

    getXPosition() {
        return this.x;
    }

    getYPosition() {
        return this.y;
    }

    setXPosition(x) {
        this.x = x;
    }

    setYPosition(y) {
        this.y = y;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }

    setWidth(width) {
        this.width = width;
    }

    setHeight(height) {
        this.height = height;
    }
}
