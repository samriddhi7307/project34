/*class Pendulum
{
 constructor (x,y,color)
 {
  
 var options={
   // 'isStatic' : true,
    'restitution' : 1,
    'friction' : 0,
    'frictionAir':0.0,
    'slop' : 1,
    'inertia' : Infinity
 };
 
 this.body = Bodies.rectangle(x,y,40,40,options)
 this.width = 40;
 this.height = 40;
 this.color = color;
 World.add(world,this.body);
 
 }

 display()
 {
    var pos = this.body.position;
    var angle  = this.body.angle;
   push();
   translate(pos.x,pos.y);
   rotate(angle);
   strokeWeight(1);
   stroke("white");
   fill(this.color);
   ellipse(pos.x,pos.y,45,45);
   pop();  
 }
}*/


class Pendulum
{
 constructor (x,y)
 {
  
 var options={
    restitution : 1,
    friction : 0.3,
    density : 1,
 }
 
 this.body = Bodies.circle(x,y,25,options)
 World.add(world,this.body);
 
 }

 display()
 {
   push();
    var pos = this.body.position;
   fill(15);
   strokeWeight(1);
   stroke("white");
   ellipse(pos.x,pos.y,50,50); 
   pop();
 }
};