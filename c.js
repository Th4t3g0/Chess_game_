
class Piece {
  constructor(name,position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
    this.name=name;
  }

}
var chess_board= [[0,1,2,3,4,5,6,7],
                  [8,9,10,11,12,13,14,15],
                  [16,17,18,19,20,21,22,23],
                  [24,25,26,27,28,29,30,31],
                  [32,33,34,35,36,37,38,39],
                  [40,41,42,43,44,45,46,47],
                  [48,49,50,51,52,53,54,55],
                  [56,57,58,59,60,61,62,63]
                  ];

//var white_pawn = new Piece("pawn","a3",true,true);
var p=0;
var b1=0;
var b2=0;
var piece=[];
var piece_before=[];
var horse=[6,17,10,15,-10,-15,-6,-17];
var h1=[0,8,16,24,32,40,48,56];
var h2=[7,15,23,31,39,47,55,63];
var b9=[9,18,27,36,45,54,63,72,81,90];
var b7=[7,14,21,28,35,42,49,56,63,70];
var take=[];
var taken=0;
//var b77;
//var b99;
var one=1;
var ka=true;

var er;

let all=document.querySelectorAll("button");



/////////////
for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("click",function(){
try {
 er =all[i].getElementsByTagName("img")[0].getAttribute("alt");
} catch (error) {
  er=false;
}

//first click
if(er&&taken==0){
      if(piece.length>0){
        setter(all);
        piece=[];
      piece_before=[];
      
      }
  console.log("Previous value Pushed");
      piece.push(all[i].innerHTML);
      piece_before.push(i);
      all[i].style.backgroundColor="yellow";
//start pawn
pawnM(all,i,"white pawn",16,"+");
pawnM(all,i,"black Pawn",47,"-");
//end pawn
//start horse
horsemo(all,i,"white horse");
horsemo(all,i,"black horse");
     
//end horse
     
//start bishop
bishopMoves(all,i,"white bishop");
bishopMoves(all,i,"black bishop");

//end bishop
///queen
QueenMoves(all,i,"white queen");
QueenMoves(all,i,"black queen");
      

///end queen

//King
kingsMove(all,i,"white king");
kingsMove(all,i,"black king");


//end King
      
//Castle
castleMoves(all,i,"black castle");
castleMoves(all,i,"white castle");
//end Castle

  
}
// end of the first click
////
   else if(er && taken!=0){
      setter(all);
      all[i].innerHTML=piece[0];
     
     console.log(piece_before)
     
      all[piece_before[0]].innerHTML="";
      piece=[];
      piece_before=[];
     taken=[];

    }
      
/// start of the second click
    else if(!er && !piece.length==0){

     if(!(all[i].style.borderColor=="")){
       setter(all);
      all[i].innerHTML=piece[0];
      all[piece_before].innerHTML="";
      piece=[];
      piece_before=[];
       taken=0;

    } 
    }
    ///end of the second click   
});}
/////////////////

///method for highting pawn movements
function pawnM(all,i,piece,end,sign) {
take=TakePawnW(all,i,"white pawn");
taken=take.length;
  let r;
if(piece=="white pawn"){
r=i<end
}
  else{
    r=i>end
  }

  if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==piece && r) {
        
      for (let iii = 0; iii < 2; iii++) {
        all[eval(i+sign+p)].style.borderColor="#eb8334";
        p+=8;
      }
        p=8;
      }else if(all[i].getElementsByTagName("img")[0].getAttribute("alt")==piece){
        all[eval(i+sign+p)].style.borderColor="#eb8334";
      }

  for (let q of take) {
        all[q].style.borderColor="#eb1238";
      }
  take=[];
  
}
//method for clearing out borders
function setter(button) {
for (let j = 0; j < button.length; j++) {
  button[j].style.removeProperty('border');
  button[j].style.removeProperty('background-color');
}
  
}
///horse method
function horsemo(all,i,piece) {
   if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==piece ) {
        
      for (let iii = 0; iii < 8; iii++) {
        try {
          all[i+horse[iii]].style.borderColor="#eb8334";
        } catch (error) {
          continue;
        } } }
  
}
function bishopMoves(all,i,name) {
  if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==name) {
let list =BishopMatrix(i,chess_board);
    for (let ww = 0; ww < list.length; ww++) {
      all[list[ww]].style.borderColor="#eb8334";
   
    }
  }
  
}
//Castle method begins
function castleMoves(all,i,name) {
  if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==name) {
let list =castleMatrix(i,chess_board);
    take=list;
    for (let ww = 0; ww < list.length; ww++) {
      
      all[list[ww]].style.borderColor="#eb8334";
    }
  }
}
//
function castleMatrix(i,board) {
let row=Math.floor(i/8);
let col=i%8;
let mat=[];
  for (let ii = 0; ii < 8; ii++) {
  mat.push(board[ii][col]);
  mat.push(board[row][ii]);
  }
  mat=mat.filter(function(item){return item !==i});
  mat=mat.filter(function(element){return element !== undefined;});
  return mat;
  
}
//Castle method ends


//Bishop method begins
function BishopMatrix(i,board){
let row=Math.floor(i/8);
let col=i%8;
let mat=[];
let x=0;

  for (let ii = 0; ii < 8; ii++) {
    try {
      mat.push(board[row+x][col+x]);
      x+=1;
    } catch (error) {
      break;
    }   
  }
  x=0;

  for (let ii = 0; ii < 8; ii++) {
    try {
      mat.push(board[row-x][col-x]);
      x+=1;
    } catch (error) {
      break;
    }   
  }
  x=0;

  
  for (let ii = 0; ii < 8; ii++) {
    try {
      mat.push(board[row+x][col-x]);
      x+=1;
    } catch (error) {
      break;
    }   
  }
  x=0;  
  for (let ii = 0; ii < 8; ii++) {
    try {
      mat.push(board[row-x][col+x]);
      x+=1;
    } catch (error) {
      break;
    }   
  }
  x=0;
  mat=mat.filter(function(item){return item !==i});
  mat=mat.filter(function(element){return element !== undefined;});
  return mat;
}
//Bishop ends

//Queen movements
function QueenMoves(all,i,name) {

  if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==name) {
    let list=[];
  list=BishopMatrix(i,chess_board);
  list2=castleMatrix(i,chess_board);
  for (let a of list2) {
    list.push(a);
  }
  for (let ww = 0; ww < list.length; ww++) {
      all[list[ww]].style.borderColor="#eb8334";
    }
  }
}
//King movements
function kingsMove(all,i,name) {
if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==name) {
let row=Math.floor(i/8);
let col=i%8;
let mat=[];
let x=1,y=8,z=7,q=9;
let ks=[1,8,7,9,-1,-8,-7,-9];
  
 for (let iii = 0; iii < 8; iii++) {
        try {
          all[i+ks[iii]].style.borderColor="#eb8334";
        } catch (error) {
          continue;
        } } 
}
}

function TakePawnW(all,i,name) {
let row=Math.floor(i/8);
let col=i%8;
let mat=[];
  if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==name) {
    try {
  if (all[chess_board[row+1][col+1]].getElementsByTagName("img")[0]) {
    mat.push(chess_board[row+1][col+1]);
  }
  
} catch (error) {
  
}
try {
  if (all[chess_board[row+1][col-1]].getElementsByTagName("img")[0]) {
      mat.push(chess_board[row+1][col-1]);
  }

} catch (error) {
}

  } else {
    try {
      if (all[chess_board[row-1][col+1]].getElementsByTagName("img")[0]) {
         mat.push(chess_board[row-1][col+1]);
      }
 
} catch (error) {
  
}
try {
  if (all[chess_board[row-1][col-1]].getElementsByTagName("img")[0]) {
     mat.push(chess_board[row-1][col-1]);
  }
 
} catch (error) {
} 
  }
return mat;
}

