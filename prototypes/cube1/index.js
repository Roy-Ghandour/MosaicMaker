


//p5.js progress : 



const W = 0
const Y = 1
const R = 2
const O = 3
const B = 4
const G = 5


let cube = {

    //Faces
    top : new Array (9).fill(W),
    bottom : new Array (9).fill(Y),
    front : new Array (9).fill(G),
    right : new Array (9).fill(R),
    left : new Array (9).fill(O),
    back: new Array (9).fill(B),
  
    //Moves
    moves : [],
  
    F : function () {
      this.front = rotateFace(this.front);
      
      let temp = [
        getRow_ (2, this.top),
        getColumn_(0, this.right),
        getRow_(0, this.bottom),
        getColumn_(2, this.left)
      ]
      
      //left to top
      this.top = 
        setRow_(2, temp.pop().reverse(), this.top)
      
      //bottom to left
      this.left = 
        setColumn_(2, temp.pop(), this.left)
      
      //right to bottom
      this.bottom =
        setRow_ (0, temp.pop().reverse(), this.bottom)
      
      //top to right
      this.right =
        setColumn_ (0, temp.pop(), this.right)
      
      this.moves.concat("F")
      
    },
    
    FP : function () {
      for (let i = 0; i < 3; i++) {
        this.F()
      }
    }


}

function getRow_ (index, face) {
  index = index * 3
  return [face[0 + index], face[1 + index], face[2+index]]
}

function setRow_ (index, row, face) {
  let newFace = face.slice()
  index = index * 3
  newFace[0 + index] = row[0]
  newFace[1 + index] = row[1]
  newFace[2 + index] = row[2]
  return newFace
}

function getColumn_ (index, face) {
  return [face[0 + index], face[3 + index], face[6 + index]]
}

function setColumn_ (index, column, face) {
  let newFace = face.slice()
  newFace[0 + index] = column[0]
  newFace[3 + index] = column[1]
  newFace[6 + index] = column[2]
  return newFace
}

function rotateFace(face) {
  
  //Rotation happens clockwise
  
  let newFace = 
      [
        face[6], face[3], face[0],
        face[7], face[4], face [1],
        face [8], face[5], face[2]
        
      ]
  return newFace;
  
}


function setup() {
  createCanvas(600, 450);
  
  background(220);
  
  cube.top[6] = B

  
  
  
  
  
  //Drawing cube 
  drawFace(cube.top, 150, 0)
  
  //drawFace(test, 300, 0)
  
  
  drawFace(cube.left, 0, 150)
  drawFace(cube.front, 150, 150)
  drawFace(cube.right, 300, 150)
  drawFace(cube.back, 450, 150)
  drawFace(cube.bottom, 150, 300)
}

function getColor(ref) {
  if (ref == W) return color(255, 255, 255);
  if (ref == Y) return color(255, 255, 0)
  if (ref == R) return color(255, 0, 0);
  if (ref == O) return color(255, 125, 0);
  if (ref == B) return color(0, 0, 255);
  if (ref == G) return color(0, 255, 0);
  
}

function drawFace(face, x , y) {
  
  for (let i = 0; i < face.length; i++) {
    fill(getColor(face[i]))
    rect(x + 50 * (i % 3), y + 50 * Math.floor(i / 3), 50, 50)
  }
  
  
}

function draw() {
  
  
}




