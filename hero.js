class Hero {

  constructor(x,y,width,height) {

      var options={
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
          'isStatic':true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Superhero-01.png");
      World.add(world,this.body);

  }

  display() {
      push();
      translate(this.body.x, this.body.y);
      imageMode(CENTER);
      image(this.image ,this.body.x,this.body.y,40,40);
      pop();

  }
}
