class MovingPlatform extends Platform {
    constructor(x, y, width, height, range, speed, direction) {
        super(x, y, width, height);
        
        this.direction = direction;

        if (direction === HORIZONTAL) {
            this.rangeMin = x;
            this.rangeMax = x + range;
        } else {
            this.rangeMin = this.y - range;
            this.rangeMax = this.y;
        }

        this.speed = speed;
        this.movingPositiveDirection = true;
    }

    update() {
        if (this.direction === HORIZONTAL) {
            if (this.movingPositiveDirection) {
                if (this.x > this.rangeMin) {
                    this.x -= this.speed;

                    if (this.isCharacterOnTop(player)) player.x -= this.speed;
                } else {
                    this.movingPositiveDirection = false;
                }
            } else {
                if (this.x < this.rangeMax) {
                    this.x += this.speed;

                    if (this.isCharacterOnTop(player)) player.x += this.speed;
                } else {
                    this.movingPositiveDirection = true;
                }
            }
        } else {
            if (this.movingPositiveDirection) {
                if (this.y > this.rangeMin) {
                    this.y -= this.speed;

                    if (this.isCharacterOnTop(player)) player.y -= this.speed;
                } else {
                    this.movingPositiveDirection = false;
                }
            } else {
                if (this.y < this.rangeMax) {
                    this.y += this.speed;

                    if (this.isCharacterOnTop(player)) player.y += this.speed;
                } else {
                    this.movingPositiveDirection = true;
                }
            }
        }
    }
}