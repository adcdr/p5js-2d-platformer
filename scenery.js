class Scenery {
    constructor() {
        this.createTrees();
    }

    drawGround() {
        push();

        noStroke();

        fill(173, 100, 57);
        rect(0, groundYPosition, width, height);

        fill(26, 98, 48);
        rect(0, groundYPosition, width, height / 25)

        fill(0,71,59);
        rect(0, groundYPosition, width, 4);

        pop();
    }

    drawBackground() {
        for (let i = 0; i < width / mountainsImage.width; i++) {
            image(mountainsImage, i * mountainsImage.width, groundYPosition - mountainsImage.height);
        }
    }

    createTrees() {
        const treesSprite = new Sprite(treesSpriteSheet, 14);
        const treeImages = treesSprite.getFrames(treesSpriteSheet);
        let lastTreeX = 0;

        while (lastTreeX < width * 10) {
            lastTreeX = random(lastTreeX + 100, lastTreeX + width);
            let overACanyon = false;
            
            for (let i = 0; i < canyons.length; i++) {
                if (lastTreeX + treeImages[0].width >= canyons[i].x && lastTreeX <= canyons[i].x + canyons[i].width) {
                    overACanyon = true;
                    break;
                }
            }

            if (!overACanyon) {
                trees.push({
                    image: random(treeImages),
                    x: lastTreeX
                });
            }
        }
    }

    drawTrees() {
        for (let i = 0; i < trees.length; i++) {
            image(trees[i].image, trees[i].x, groundYPosition - 195);
        }
    }
}
