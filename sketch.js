var quiz,Squiz,Tquiz,Iquiz,Riddles;
var S,T,I,R;
var q1,gucciImage
var q2,smritiIrani
var q3,ghajini;
var q4,australia;
var q5,aishwarya;
 var optionA1A,optionA1B
 var A1A,A1B;
 var more;
 var moreImage;
var A2A,A2B;
var A3A,A3B;
var A4A,A4B;
var ground1;
var homepageb;
var h;
var score,point,marks;
var B1A,B1B

function preload(){

quiz=loadImage("quiz.png");
S=loadImage("sound.png");
T=loadImage("general.png");
I=loadImage("image.png");
R=loadImage("riddles.png");
gucciImage=loadImage("gucci.png");
A1A=loadImage("A1A.png");
A1B=loadImage("A1B.png");
moreImage=loadImage("continue.png");
smriti_rani=loadImage("smriti-irani.jpg");
A2A=loadImage("shivsena.png");
A2B=loadImage("answer2.png");
ghajini=loadImage("ghagini.jfif")
ghaj=loadImage("ghajini.png");
A3B=loadImage("A3B.png");
aust=loadImage("australia.png");
A4A=loadImage("aust.png");
A4B=loadImage("AFRICA.png");
aish=loadImage("aishwarya.jfif");
p=loadImage("prachidesai.png")
a=loadImage("aish.png");
ground1=loadImage("background.jfif");
h=loadImage("homepage.jfif");
r1=loadImage("riddle1.jfif");
r2=loadImage("riddle 2.png");
r3=loadImage("riddle 3.jfif");
r4=loadImage("riddle 4.png");
r5=loadImage("riddle 5.png");
b=loadImage("click.png");
pl=loadImage("play.png")
sound1=loadSound("sound2.wav")
sound2=loadSound("correct.wav");
sound3=loadSound("wrong.mp3");
janie=loadImage("janie joule.png");
judy=loadImage("judy.png");
f=loadImage("F.png");
ha=loadImage("harmonica.png");
sound4=loadSound("flute.wav");
}



function setup(){
createCanvas(800,700);
gameState=1;
Squiz=createSprite(150,300,10,10);
Squiz.addImage(S);
Squiz.visible=false;
Squiz.scale=0.7;
Tquiz=createSprite(650,300,10,10);
Tquiz.addImage(T);
Tquiz.visible=false;
Tquiz.scale=0.7;
Iquiz=createSprite(600,550,10,10);
Iquiz.addImage(I);
Iquiz.visible=false; 
Iquiz.scale=0.7;
Riddles = createSprite(200,550,20,50);
Riddles.addImage(R)
R.visible=false;
Riddles.scale=0.7
more=createSprite(100,650)
more.addImage(moreImage);
more.scale=0.5;
more.visible=false;
q1=createSprite(100,100)
q1.addImage(gucciImage)
q1.scale=0.7;
q1.visible=false;
q2=createSprite(100,130)
q2.addImage(smriti_rani)
q2.scale=0.2;
q2.visible=false;
optionA1A=createSprite(200,400)
optionA1A.addImage(A1A);
optionA1B=createSprite(600,400);
optionA1B.addImage(A1B);
optionA1A.visible=false;
optionA1B.visible=false;
optionA2A=createSprite(200,400);
optionA2A.addImage(A2A);
optionA2A.visible=false;
optionA2A=createSprite(200,400);
optionA2A.addImage(A2A);
optionA2A.visible=false;
optionA2B=createSprite(600,400);
optionA2B.addImage(A2B);
optionA2B.visible=false;
optionA3A=createSprite(200,400);
optionA3A.addImage(ghaj);
optionA3A.visible=false;
optionA3B=createSprite(600,400);
optionA3B.addImage(A3B);
optionA3B.visible=false;
optionA3A.scale=0.7;
optionA3B.scale=0.7;
q3=createSprite(120,130)
q3.addImage(ghajini);
q3.scale=0.7;
q3.visible=false;
q4=createSprite(120,130)
q4.addImage(aust);
q4.scale=0.7;
q4.visible=false;
optionA4A=createSprite(200,400);
optionA4A.addImage(A4A);
optionA4A.visible=false;
optionA4B=createSprite(600,400);
optionA4B.addImage(A4B);
optionA4B.visible=false;
optionA4A.scale=0.7;
optionA4B.scale=0.7;
q5=createSprite(120,130)
q5.addImage(aish);
q5.scale=0.7;
q5.visible=false;
optionA5A=createSprite(200,400);
optionA5A.addImage(p);
optionA5A.visible=false;
optionA5B=createSprite(600,400);
optionA5B.addImage(a);
optionA5B.visible=false;
optionA5A.scale=0.7;
optionA5B.scale=0.7;
homepageb=createSprite(670,680);
homepageb.addImage(h);
homepageb.visible=false;
homepageb.scale=0.2
score=0;
marks=0;
point=0
button=createSprite(500,600,10,10)
button.addImage(b);
button.visible=false;
play=createSprite(100,200,10,10);
play.visible=false;
play.addImage(pl);
optionB1A=createSprite(200,400);
optionB1A.addImage(janie);
optionB1A.visible=false;
optionB1B=createSprite(600,400);
optionB1B.addImage(judy);
optionB1B.visible=false;
optionB1A.scale=0.7;
optionB1B.scale=0.7;
optionB2A=createSprite(200,400);
optionB2A.addImage(ha);
optionB2A.visible=false;
optionB2B=createSprite(600,400);
optionB2B.addImage(f);
optionB2B.visible=false;
optionB2A.scale=0.7;
optionB2B.scale=0.7;
}




function draw(){
background("black")





if(gameState===1){
background(quiz);
Squiz.visible=true;
Tquiz.visible=true;
Iquiz.visible=true;
Riddles.visible=true;
homepageb.visible=true
optionA1A.visible=false
optionA1B.visible=false
optionA2A.visible=false
optionA2B.visible=false
optionA3A.visible=false
optionA3B.visible=false
optionA4A.visible=false
optionA4B.visible=false
optionA5A.visible=false
optionA5B.visible=false
q1.visible=false
q2.visible=false
q3.visible=false
q4.visible=false
q5.visible=false
more.visible=false
button.visible=false;
play.visible=false
optionB2A.visible=false
optionB2B.visible=false

optionB1A.visible=false
optionB1B.visible=false
score=0
point=0
if(mousePressedOver(Iquiz)){
gameState=2;
}
if(mousePressedOver(Riddles)){
    gameState=18;
    }
    if(mousePressedOver(Squiz)){

        gameState=33
    }
    if(mousePressedOver(Tquiz)){
        gameState=30
    }
}





if(mousePressedOver(homepageb)){
    sound2.play();
    gameState=1;
}

if(gameState===2)
{

background("black");
textSize(30);
fill("white");
strokeWeight(4)
stroke("deeppink");
text("WHICH COMPANY OWNS THIS LOGO?",200,50)
  Squiz.visible=false;
  Tquiz.visible=false;
  Iquiz.visible=false;
  Riddles.visible=false;
q1.visible=true;
optionA1A.visible=true;
optionA1B.visible=true;
textSize(20);
text("OR",350,400)

if(mousePressedOver(optionA1A)){
gameState=3;
score=score+1
sound2.play()
}
if(mousePressedOver(optionA1B)){

    gameState=13;
    sound3.play();
}
}





if(gameState===3){

    background("black");
textSize(30);
fill("white");
strokeWeight(4)
stroke("deeppink");
    text("OR",350,400)
    text("WHICH COMPANY OWNS THIS LOGO?",200,50);
    text("WELL DONE YOU ARE CORRECT !",200,600)
    more.visible=true;
    if(mousePressedOver(more)){
        gameState=4
    }
}





if(gameState===4){
background("black")
    optionA1A.visible=false;;
    optionA1B.visible=false;
    more.visible=false
    q1.visible=false;
    optionA2A.visible=true;
    q2.visible=true;
    optionA2B.visible=true;
    fill("white");
strokeWeight(4)
stroke("deeppink");
textSize(30);
text("WHO IS THIS FAMOUS POLITICAL LEADER?",180,50)
textSize(30);
  text("OR",350,400)
if(mousePressedOver(optionA2B)){
    gameState=5
    score=score+1
    sound2.play()
}
if(mousePressedOver(optionA2A)){
    gameState=14
    sound3.play();
}
}









if(gameState===5){
    background("black");
textSize(30);
fill("white");
strokeWeight(4)
stroke("deeppink");
    text("OR",350,400)
    text("WHO IS THIS FAMOUS POLITICAL LEADER?",160,50)
    text("BRAVO YOU ARE CORRECT !",200,600)
    more.visible=true;
    if(mousePressedOver(more)){
        gameState=6;
    }
}





if(gameState===6){

    background("black");
    q2.visible=false;
    q3.visible=true;
    more.visible=false;
    optionA2B.visible=false;
    optionA2A.visible=false;
    optionA3A.visible=true;
    textSize(30);
    
fill("white");
strokeWeight(4)
stroke("deeppink");
text("OR",350,400)
    text("IN WHICH FILM AMIR KHAN HAS PLAYED THIS ROLE?",30,50);
    optionA3B.visible=true;
    if(mousePressedOver(optionA3A)){
        gameState=7;
     sound2.play();
        score=score+1
    }
    if(mousePressedOver(optionA3B)){
     sound3.play();
        gameState=15;
    }
}




if(gameState===7)
{
background("black");
textSize(30);
    
fill("white");
strokeWeight(4)
stroke("deeppink");
text("OR",350,400)

    text("IN WHICH FILM AMIR KHAN HAS PLAYED THIS ROLE?",30,50);
    text("WOW IT WAS AMAZING !",200,600)
    more.visible=true;

if(mousePressedOver(more)){
gameState=8;
}

}





if(gameState===8){
    q3.visible=false;
    optionA3A.visible=false
    optionA3B.visible=false
    more.visible=false;
    q4.visible=true;
    textSize(30);
    
fill("white");
strokeWeight(4)
stroke("deeppink");
text("OR",350,400)
    text("THIS IS THE MAP OF WHICH CONTINENT?",30,50);
    optionA4A.visible=true
    optionA4B.visible=true
    if(mousePressedOver(optionA4A)){
        gameState=9;
        score=score+1
        sound2.play();
    }
    if(mousePressedOver(optionA4B)){
        gameState=16;
        sound3.play();
    }
}


if(gameState===9){

    background("black");
textSize(30);
    
fill("white");
strokeWeight(4)
stroke("deeppink");
text("OR",350,400)

    text("THIS IS THE MAP OF WHICH CONTINENT?",30,50);
    text(" OH! YOU ARE A CHAMP",200,600)
    more.visible=true;

if(mousePressedOver(more)){
gameState=10;
}
}



if(gameState===10){
optionA4A.visible=false;
optionA4B.visible=false
q4.visible=false
more.visible=false
q5.visible=true;
textSize(30);
fill("white");
strokeWeight(4)
stroke("deeppink");
    text("OR",350,400)
    text("WHOSE CHILDHOOD PHOTO IS THIS?",200,50);
    optionA5A.visible=true
    optionA5B.visible=true
    if(mousePressedOver(optionA5B)){
        gameState=11;
        score=score+1;
        sound2.play();
    }

    if(mousePressedOver(optionA5A)){
     sound3.play();
        gameState=17;
    }
}




if(gameState===11){
    background("black");
    textSize(30);
        
    fill("white");
    strokeWeight(4)
    stroke("deeppink");
    text("OR",350,400)
    
        text("WHOSE CHILDHOOD PHOTO IS THIS?",200,50);
        text("FABOULUS!!",200,600)
        more.visible=true;
    
    if(mousePressedOver(more)){
    gameState=12;
    }


}

if(gameState===12){
background(ground1)
q5.visible=false
optionA5A.visible=false
optionA5B.visible=false
more.visible=false
textSize(30);
strokeWeight(4);
stroke("deeppink");
fill("white")
text("YOU SCORED:"+score,250,600)

}


  if(gameState===13){

 
    background("black");
textSize(30);
fill("white");
strokeWeight(4)
stroke("deeppink");
    text("OR",350,400)
    text("WHICH COMPANY OWNS THIS LOGO?",200,50);
    text("OOPS YOU ARE WRONG!!",200,600)
    more.visible=true;
    if(mousePressedOver(more)){
        gameState=4
    }
  }


  
  if(gameState===14){

 
    background("black");
textSize(30);
fill("white");
strokeWeight(4)
stroke("deeppink");
    text("OR",350,400)
    text("WHO IS THIS FAMOUS POLITICAL LEADER?",160,50)
    text("OOPS! BLUNDER",200,600)
    more.visible=true;
    if(mousePressedOver(more)){
        gameState=5
    }
  }


  if(gameState===15){

    background("black");
    textSize(30);
        
    fill("white");
    strokeWeight(4)
    stroke("deeppink");
    text("OR",350,400)
    
        text("IN WHICH FILM AMIR KHAN HAS PLAYED THIS ROLE?",30,50);
        text("OH! IT WAS TOO CLOSE",200,600)
        more.visible=true;
    
    if(mousePressedOver(more)){
    gameState=8;
    }
    
  }

  if(gameState===16){


    background("black");
textSize(30);
    
fill("white");
strokeWeight(4)
stroke("deeppink");
text("OR",350,400)

    text("THIS IS THE MAP OF WHICH CONTINENT?",30,50);
    text(" OH! MADE A MISTAKE?",200,600)
    more.visible=true;

if(mousePressedOver(more)){
gameState=10;
}
  }


  if(gameState===17){


    background("black");
textSize(30);
    
fill("white");
strokeWeight(4)
stroke("deeppink");
text("OR",350,400)

text("WHOSE CHILDHOOD PHOTO IS THIS?",200,50);

    text("OUCH IT WAS WRONG",200,600)
    more.visible=true;

if(mousePressedOver(more)){
gameState=12;
}
  }





  












  if(gameState===18)
{
background(r1);
Squiz.visible=false;
Tquiz.visible=false
Iquiz.visible=false;
Riddles.visible=false;
button.visible=true
if(mousePressedOver(button)){
    sound2.play()
    gameState=19
}
}





if(gameState===19){
    background("black");  
    button.visible=false;
    more.visible=true;
    textSize(100)
    fill("deeppink");
    strokeWeight(4);
    stroke("white")
    text("SPONGE",200,300);
    if(mousePressedOver(more)){
        sound2.play()
        gameState=20
    }
}


if(gameState===20)
{
more.visible=false;
background(r2)
button.visible=true
button.y=640;
if(mousePressedOver(button)){
    sound2.play()
    gameState=21;
}
}


if(gameState===21){

    background("black");  
    button.visible=false;
    more.visible=true;
    textSize(100)
    fill("deeppink");
    strokeWeight(4);
    stroke("white")
    text("AN ECHO",200,300);
    if(mousePressedOver(more)){
        sound2.play()
        gameState=22
    }
}


if(gameState===22){
    background(r3);
Squiz.visible=false;
Tquiz.visible=false
Iquiz.visible=false;
Riddles.visible=false;
button.visible=true
more.visible=false
button.x=600;
button.y=300
if(mousePressedOver(button)){
    sound2.play()
    gameState=23
}
}



if(gameState===23){
    background("black");  
    button.visible=false;
    more.visible=true;
    textSize(100)
    fill("deeppink");
    strokeWeight(4);
    stroke("white")
    text("ENVELOPE",200,300);
    if(mousePressedOver(more)){
        
        sound2.play()
        gameState=24
    }


  

}

if(gameState===24){ 
     background(r4);
Squiz.visible=false;
Tquiz.visible=false
Iquiz.visible=false;
Riddles.visible=false;
button.visible=true
more.visible=false
button.y=600
if(mousePressedOver(button)){
    sound2.play()
    gameState=25
}
}


if(gameState===25){
    background("black");  
    button.visible=false;
    more.visible=true;
    textSize(100)
    fill("deeppink");
    strokeWeight(4);
    stroke("white")
    text("SILENCE",200,300);
    if(mousePressedOver(more)){
        sound2.play()
        gameState=26
    }

}



if(gameState===26){

    background(r5);
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=true
    more.visible=false
 
    if(mousePressedOver(button)){
        sound2.play()
        gameState=27
    }
}


if(gameState===27){
    background("black");  
    button.visible=false;
    more.visible=true;
    textSize(40)
    fill("deeppink");
    strokeWeight(4);
    stroke("white")
    text("BECAUSE IT WAS NOT RAINING",50,300);
    if(mousePressedOver(more)){
        sound2.play()
        gameState=28
    }


}



if(gameState===28){
    background(ground1)
    button.visible=false
    more.visible=false
textSize(30);
strokeWeight(4);
stroke("deeppink");
fill("white")
text("WELL DONE!",250,600)
}







if(gameState===30){
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=true;
    more.visible=false;
    textSize(30);
strokeWeight(4);
stroke("white");
fill("deeppink")
    text("1. HOW MANY HEARTS DOES A OCTOPUS HAVE ?",20,50)
    text("2. WHO IS THE AUTHOR OF POEM-LUCY GRAY ?",20,150)
    text("3. WHICH IS THE LONGEST MUSCLE IN HUMAN BODY?",20,250)
    text("4. WHO DO HAVE YELLOW BLOOD?",20,350)
    text("5. WHAT IS THE MOST COMMON NAME IN WORLD?",20,450)
    if(mousePressedOver(button)){
        sound2.play()
        gameState=31
    }
}



if(gameState===31){

    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=true;
    textSize(30);
strokeWeight(4);
stroke("white");
fill("deeppink")
    text("1. OCTOPUS",20,50)
    text("2. WILLIAM WORDSWORTH",20,150)
    text("3. TONGUE",20,250)
    text("4. INSECTS",20,350)
    text("5. MOHAMMED",20,450) 
    if(mousePressedOver(more)){
gameState=32
    }
}




if(gameState===32){
    background(ground1);
    
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=false;
    textSize(30);
    strokeWeight(4);
    stroke("white");
    fill("deeppink")
    text("WOW NOW YOU KNOW SOME AWESOME FACTS!!!",100,650)
}


if(gameState===33){

    background("black");
    
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=false;
    textSize(30);
    strokeWeight(4);
    stroke("white");
    fill("deeppink")
    text("OR",350,400)
   text("WHOSE VOICE IS THIS?",100,50);
   play.visible=true;

optionB1A.visible=true
optionB1B.visible=true
   if(mousePressedOver(play)){

sound1.play();

   }

  if(mousePressedOver(optionB1A)){
gameState=34
point=point+1
sound2.play();

  }
  if(mousePressedOver(optionB1B)){
    gameState=35
    sound3.play();
    
      }
}

   


if(gameState===34){


    
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=true;
    textSize(30);
    strokeWeight(4);
    stroke("white");
    fill("deeppink")
    text("OR",350,400)
    text("WHOSE VOICE IS THIS?",100,50);
    text("WOW YOU ARE A CHAMP!!!",250,600)
    if(mousePressedOver(more)){
        gameState=36
    sound2.play();
    }
}

if(gameState===35){


    
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=true;
    textSize(30);
    strokeWeight(4);
    stroke("white");
    fill("deeppink")
    text("OR",350,400)
    text("WHOSE VOICE IS THIS?",100,50);
    text("OH! MADE A MISTAKE!!",250,600)
    if(mousePressedOver(more)){
        gameState=36
        sound2.play();
    }
}





if(gameState===36){
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=false;
    textSize(30);
    strokeWeight(4);
    stroke("white");
    fill("deeppink")
    text("OR",350,400)
   text("WHICH INSTRUMENT IS THIS?",100,50);
   play.visible=true;

optionB1A.visible=false
optionB1B.visible=false

optionB2A.visible=true
optionB2B.visible=true
if(mousePressedOver(play)){

    sound4.play();
       }
    
if(mousePressedOver(optionB2A)){
    gameState=38
    sound3.play();
}

if(mousePressedOver(optionB2B)){
    gameState=37
    point=point+1
    sound2.play();
}

}


if(gameState===37){
    
    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=true;
    textSize(30);
    strokeWeight(4);
    stroke("white");
    fill("deeppink")
    text("OR",350,400)
    text("WHICH INSTRUMENT IS THIS?",100,50);
    text("FABOULUS",250,600)
    if(mousePressedOver(more)){
        gameState=39
        sound2.play();
    }


}



if(gameState===38){


    Squiz.visible=false;
    Tquiz.visible=false
    Iquiz.visible=false;
    Riddles.visible=false;
    button.visible=false;
    more.visible=true;
    textSize(30);
    strokeWeight(4);
    stroke("white");
    fill("deeppink")
    text("OR",350,400)
    text("WHICH INSTRUMENT IS THIS?",100,50);
    text("OH! MADE A MISTAKE!!",250,600)
    if(mousePressedOver(more)){
        gameState=39
        sound2.play();
    }


}


if(gameState===39){
background(ground1)

Squiz.visible=false;
Tquiz.visible=false
Iquiz.visible=false;
Riddles.visible=false;
button.visible=false;
more.visible=false;
play.visible=false
optionB2A.visible=false
optionB2B.visible=false
textSize(50);
strokeWeight(4);
stroke("white");
fill("deeppink")

text("YOU SCORED:"+point,300,650)
}
    drawSprites();
}
















