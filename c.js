class Pawn {
  constructor(position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
  }
take(){
return;
}
move(){
return;
}

}
//
class Castle {
  constructor(position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
  }
take(){
console.log("Hello world");
}
move(){
console.log("Hello world");
}

}
//
class Bishop {
  constructor(position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
  }
take(){
console.log("Hello world");
}
move(){
console.log("Hello world");
}

}
//
class Horse {
  constructor(position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
  }
take(){
console.log("Hello world");
}
move(){
console.log("Hello world");
}

}
//
class Queen {
  constructor(position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
  }
take(){
console.log("Hello world");
}
move(){
console.log("Hello world");
}

}
//
class King {
  constructor(position, movable,active,checked) {
    this.position = position;
    this.movable = movable;
    this.active =active;
    this.checked=checked;

  }
take(){
console.log("Hello world");
}
move(){
console.log("Hello world");
}

}
/////////////
let a=document.getElementById("p1");
a.addEventListener("click",function(){
document.getElementById("empy").innerHTML=a.innerHTML;
a.innerHTML="";
});





