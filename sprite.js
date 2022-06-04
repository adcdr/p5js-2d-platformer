class Sprite {
    constructor(spriteSheet, numberOfFrames) {
        this.frames = this.getFrames(spriteSheet, numberOfFrames);
        this.currentFrame = 0;
    }

    getFrames(spriteSheet, numberOfFrames) {
        const frames = [];
        const frameWidth = spriteSheet.width / numberOfFrames;
    
        for (let i = 0; i < numberOfFrames; i++) {
            let frame = spriteSheet.get(i * frameWidth, 0, frameWidth, spriteSheet.height);
            frames.push(frame);
        }
    
        return frames;
    }

    show() {
        image(this.frames[this.currentFrame], 0, 0);
    }

    animate() {
        this.currentFrame += 1;
        this.currentFrame = this.currentFrame % this.frames.length;
    }
}