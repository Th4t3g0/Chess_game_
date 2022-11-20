
class Piece {
  constructor(name,position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
    this.name=name;
  }

}
const chess_board= [[6,5,4,10,8,4,5,6],
                  [1,1,1,1,1,1,1,1],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0],
                  [-1,-1,-1,-1,-1,-1,-1,-1],
                  [-6,-5,-4,-10,-8,-4,-5,-6]
                  ];

//var white_pawn = new Piece("pawn","a3",true,true);

var piece=[];
var piece_before=[];

var er;

/////////////
//let a=document.getElementById("p1");
//a.addEventListener("click",function(){
//document.getElementById("empy").innerHTML=a.innerHTML;
//a.innerHTML="";
//});

/////////////////////
let all=document.querySelectorAll("button");




for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("click",function(){





    
  //console.log(all[i].getElementsByTagName("img")[0].src);
  //console.log(all[i].getElementsByTagName("img")[0].getAttribute("alt"));

try {
 er =all[i].getElementsByTagName("img")[0].getAttribute("alt");
} catch (error) {
  er=false;
}


    
    if(er){
      //console.log("hello world");
      //piece.push(all[i].getElementsByTagName("img")[0]);
      //console.log(all[i].getElementsByTagName("img")[0]);
      if(piece.length>0){
        piece=[];
      piece_before=[];
      
      }
      piece.push(all[i].innerHTML);
      piece_before.push(i);
      //console.log(all[i].innerHTML);
      
      
      






      
    }
    else if(!er && !piece.length==0){
      //console.log("hello World");
      all[i].innerHTML=piece[0];
      all[piece_before].innerHTML="";
      piece=[];
      piece_before=[];
      
      
      //all[i].createElement("img").src=piece[0].getElementsByTagName("img")[0].getAttribute("src");
    }










    
});}
/////////////////





function hightlight(button) {
if (button.getElementsByTagName("img")[0].getAttribute("alt")=="pawn") {
  //all[i].getElementsByTagName("img")[0].getAttribute("alt")
}

  
}



