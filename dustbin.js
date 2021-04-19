class Dustbin
  {
    constructor(x,y,width,height)
      {
          var options=
            {
                isStatic:true,
            }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width
        this.height=height
        this.image=loadImage("sprites/dustbingreen.png")
        World.add(world,this.body)
      }
      display()
      {
          var pos =this.body.position;
          fill("yellow")
          //imageMode(CENTER);

          image(this.image,1124,500,180,180)

          //rectMode(CENTER);
          //rect(this.body.position.x,this.body.position.y,this.width,this.height);


         // rect(pos.x, pos.y);
      
      }
  }