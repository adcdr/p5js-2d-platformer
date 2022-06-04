let dudeSpriteSheet, dudeSprite;

function preload() {
  dudeSpriteSheet = loadImage('assets/sprites/tiny-hero/Dude_Monster/Dude_Monster_Run_6.png');
}

function setup() {
    createCanvas(1500, 800);
    
    dudeSprite = new Sprite(dudeSpriteSheet, 6);
  }
  
  function draw() {
    background(0);

    dudeSprite.show();
    
    if (frameCount % 10 == 0)
      dudeSprite.animate();
  }