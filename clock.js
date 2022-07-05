class Clock {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.startTimestamp = Math.floor(Date.now() / 1000);
    }

    startTimer() {
        this.seconds++;

        if (this.seconds > 59) {
            this.minutes++;
            this.seconds = 0;
        }
    }

    draw() {
        let currentTimestamp = Math.floor(Date.now() / 1000);
        let elapsedSeconds = currentTimestamp - this.startTimestamp;

        const secondsString = String(elapsedSeconds % 60).padStart(2, '0');
        const minutesString = String((2, Math.floor(elapsedSeconds / 60))).padStart(2, '0');
    
        text(minutesString + ':' + secondsString, (width - 50)/2 + 50, 30);
    }
}