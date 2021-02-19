class Circle{
    constructor(x,y,radius,colour){
        this.x = x
        this.y = y
        this.radius = radius
        this.colour = colour 
        this.bubble =  createSprite(this.x,this.y,this.radius,this.radius);
        this.bubble.shapeColor = this.colour
        this.bubble.velocityX = random(-20,20);
        this.bubble.velocityY = random(-20,20);
        var a = Math.round(random(1,100));
        var b = Math.round(random(1,100));
        var ops = Math.round(random(1,4));
        var question = Math.round(random(1,10));
        if(ops == 1){
            this.text  = a + "+" + b
            this.ans = a + b
        }
        if(ops == 2){
            this.text = a + "-" + b
            this.ans = a-b
        }
        if(ops == 3){
            this.text = a + "*" + b
            this.ans = a * b
        }
        if(ops == 4){
            this.text = a + "/" + b
            this.ans = Math.round(a/b);
        }
        
    }
    display(){
        textSize(24);
        fill("white");
       text(this.text,this.bubble.x,this.bubble.y);
    }
}