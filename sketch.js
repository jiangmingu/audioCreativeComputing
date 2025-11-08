let osc;
let shapes = [];


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  osc = new p5.Oscillator('triangle');
  osc.amp(0); 
  osc.start();
}

function draw() {
  background(240);
  text('press A / S / D / F / G / H / J to generate shape', width/2, 24);

  for (let s of shapes) {
    push();
    translate(s.x, s.y);
    rotate(frameCount * s.spin);
    //noStroke();
    fill(s.c, 150);
    //noStroke();
     stroke(68, 108, 87);
    strokeWeight(2);
    if (s.type === 'text') textWord(0,0,s.size);
    else if (s.type === 'liner') liner(0,0,s.size);
    else if (s.type === 'tri') triangle(-s.size/2, s.size/2, 0, -s.size/2, s.size/2, s.size/2);
    else if (s.type ==='line')line(0,-s.size/2,s.size/2,-s.size/2);
    else if (s.type === 'flower')flower(0,0,s.size);
     else if (s.type === 'star')sakura(0,0,s.size);
      else if (s.type === 'poker')poker(0,0,s.size);
    pop();
    s.size *= 0.995; 
  }
}

function keyPressed() {
 
  if (key === 'A' || key === 'a') trigger(261, 'text');
  if (key === 'S' || key === 's') trigger(293, 'liner');
  if (key === 'D' || key === 'd') trigger(329, 'tri');
  if (key === 'F' || key === 'f') trigger(349, 'poker');
  if (key === 'G' || key ==='g' ) trigger(392,'line');
  if (key === 'H' || key === 'h') trigger(440,'flower');
  if (key === 'J' || key === 'j') trigger(493,'star');
}

function trigger(freq, shapeType) {
  
  osc.freq(freq);
  osc.amp(0.2, 0.01);          
  osc.amp(0, 0.2);              


  shapes.push({
    x: random(width),
    y: random(height),
    size: random(40, 100),
    type: shapeType,
    c: color(random(100,255), random(100,200), random(200,240)),
    spin: random(-0.02, 0.02),
  });
}
function flower(x,y,radius){
  stroke(68, 108, 87);
  push();
  translate(x,y);
  beginShape();
  let vertNum = 6;
 
  for(let i = 0 ; i< vertNum ;i++){
     
    let angleStep = 360/vertNum;
    let radian = radians(angleStep*i);
    let vX = sin(radian)*radius*0.2;
    let vY = cos(radian)*radius*0.2;
    
    line(x,y,vX,vY);
    
    endShape();
  
  }
  
  pop();  
  
  
} 
function sakura(x,y,radius){
  //sfgnoStroke();
 
  push();
  translate(0,0);

  let vertNum= 4;
  let offset = 20;
  for(let i = 0 ; i<vertNum; i++){
  let angleStep = 360/vertNum;
  let radian = radians(angleStep*i);
    let vX = sin(radian)*offset;
    let vY = cos(radian)*offset;
     //ellipseMode(CENTER)
    push();
    translate(offset,0);
      rotate(radian);
    rect(0,0,radius*0.8,radius,15);
    pop();
    
   
  
  }
    pop();
}
function textWord(x,y,sz){
  //noStroke();
  textSize(sz);
  text('#',x,y);
  textFont('Arial');
}
function poker(x,y,sz){
  //noStroke();
  textSize(sz);
  text('✱',x,y);
  textFont('Arial');
}
function liner(x,y,sz){
  //noStroke();
  strokeWeight(2);
  textSize(sz);
  text('❞',x,y);
  textFont('Arial');
}
