class MovingPlatform extends Platform {
    constructor(x, distanceAboveGround, width, height, range, speed, direction) {
        super(x, distanceAboveGround, width, height);

        if (direction === 'HORIZONTAL') {
            this.direction = 0;
            this.rangeMin = x;
            this.rangeMax = x + range;
        } else {
            this.direction = 1;
            this.rangeMin = this.y - range;
            this.rangeMax = this.y;
        }

        this.speed = speed;
        this.movingPositiveDirection = true;
    }

    update() {
        if (this.direction === 0) { // horizontal
            if (this.movingPositiveDirection) {
                if (this.x > this.rangeMin) {
                    this.x -= this.speed;

                    if (super.isCharacterOnTop(player)) player.x -= this.speed;
                } else {
                    this.movingPositiveDirection = false;
                }
            } else {
                if (this.x < this.rangeMax) {
                    this.x += this.speed;

                    if (super.isCharacterOnTop(player)) player.x += this.speed;
                } else {
                    this.movingPositiveDirection = true;
                }
            }
        } else {
            if (this.movingPositiveDirection) {
                if (this.y > this.rangeMin) {
                    this.y -= this.speed;

                    if (super.isCharacterOnTop(player)) player.y -= this.speed;
                } else {
                    this.movingPositiveDirection = false;
                }
            } else {
                if (this.y < this.rangeMax) {
                    this.y += this.speed;

                    if (super.isCharacterOnTop(player)) player.y += this.speed;
                } else {
                    this.movingPositiveDirection = true;
                }
            }
        }
    }
}