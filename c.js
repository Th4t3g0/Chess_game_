
class Piece {
  constructor(name,position, movable,active) {
    this.position = position;
    this.movable = movable;
    this.active =active;
    this.name=name;
  }

}
const chess_board= [[0,1,2,3,4,5,6,7],
                  [8,9,10,11,12,13,14,15],
                  [16,17,18,19,20,21,22,23],
                  [24,25,26,27,28,29,30,31],
                  [32,33,34,35,36,37,37,39],
                  [40,41,42,43,44,45,46,47],
                  [48,49,50,51,52,53,54,55],
                  [56,57,58,59,60,61,62,63]
                  ];

//var white_pawn = new Piece("pawn","a3",true,true);
var p=0;
var b1=7;
var b2=9;
var piece=[];
var piece_before=[];
var horse=[6,17,10,15,-10,-15,-6,-17];
var h1=[0,8,16,24,32,40,48,56];
var h2=[7,15,23,31,39,47,55,63];
var b9=[9,18,27,36,45,54,63,72,81,90];
var b7=[7,14,21,28,35,42,49,56,63,70];
//var h11;
//var h222;
//var b77;
//var b99;
var one=1;
var ka=true;

var er;

/////////////
//let a=document.getElementById("p1");
//a.addEventListener("click",function(){
//document.getElementById("empy").innerHTML=a.innerHTML;
//a.innerHTML="";
//});

/////////////////////
let all=document.querySelectorAll("button");



/////////////
for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("click",function(){
try {
 er =all[i].getElementsByTagName("img")[0].getAttribute("alt");
} catch (error) {
  er=false;
}




    
  //console.log(all[i].getElementsByTagName("img")[0].src);
  //console.log(all[i].getElementsByTagName("img")[0].getAttribute("alt"));
    if(er){
      //console.log("hello world");
      //piece.push(all[i].getElementsByTagName("img")[0]);
      //console.log(all[i].getElementsByTagName("img")[0]);
      if(piece.length>0){
        setter(all);
        piece=[];
      piece_before=[];
      
      }
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
      
///queen


///end queen

//King



//end King
      
//Castle
castleM(all,i,"white castle");
castleM(all,i,"black castle");



//end Castle



//


      














      
  
  //all[i].getElementsByTagName("img")[0].getAttribute("alt")
}
// end of the first click









      
/// start of the second click
    else if(!er && !piece.length==0){
      //console.log("hello World");
      
     if(!(all[i].style.borderColor=="")){
       setter(all);
      all[i].innerHTML=piece[0];
      all[piece_before].innerHTML="";
      piece=[];
      piece_before=[];
    }
      
      //all[i].createElement("img").src=piece[0].getElementsByTagName("img")[0].getAttribute("src");
    }
    ///end of the second click










    
});}
/////////////////






///function for diagonals for queen and bishop
function diagonals() {
  
  
  for (let iii = 0; iii < 7; iii++) {
        try {
        all[i+b1].style.borderColor="#eb8334";
        all[i+b2].style.borderColor="#eb8334";
        
          if (!(b1+i==0 || b1+i==8 || b1+i==16 || b1+i==24 || b1+i==32 || b1+i==40 || b1+i==48 || b1+i==56 )) {
           b1+=7;
            // break;
          }
          if (!(b2+i==7 || b2+i==15 || b2+i==23 || b2+i==31 || b2+i==39 || b2+i==47 || b2+i==55 || b1+i==63 )) {
            b2+=9;
            //break;
          }
          
        
        }catch (error) {

          break;
        }
        
      }
        b1=7;
  
  
}






///


////button.getElementsByTagName("img")[0].getAttribute("alt")=="pawn"

///methods

///method for highting pawn movements
function pawnM(all,i,piece,end,sign) {
  let r;
if(piece=="white pawn"){
r=i<end
}
  else{
    r=i>end
  }

  
  if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==piece && r) {
        
      for (let iii = 0; iii < 2; iii++) {
        //console.log("hello world");
        //its a negative
        all[eval(i+sign+p)].style.borderColor="#eb8334";
        p+=8;
      }
        p=8;
      }else if(all[i].getElementsByTagName("img")[0].getAttribute("alt")==piece){
       
        //console.log("hello world");
        all[eval(i+sign+p)].style.borderColor="#eb8334";
      }
  
}

////method for highllighting bishop movements










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

function castleM(all,i,piece) {

  if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==piece) {
  
      for (let iii = 0; iii < 8; iii++) {
        try {
          p+=8;
        all[i+p].style.borderColor="#eb8334";
          //console.log("working1a");
        
        } catch (error) {
          
          continue;}
        
      }
        p=0;
     for (let iii = 0; iii < 8; iii++) {
       try {
         p-=8;
        all[i+p].style.borderColor="#eb8334";
         
        
         } catch (error) {
         
         continue;
                          }
      }
        p=0;

    
      
   for (let iii = 0; iii < 8; iii++) {
     if (ka) {
       try {
        all[i+one].style.borderColor="#eb8334";
         for (let zz of h2) {
           if (zz==(i+one)||zz==i) {
             ka=false;
           }}
        
         } catch (error) {continue;}
   }
     one+=1;
      }
        one=1;
        ka=true;
  for (let iii = 0; iii < 8; iii++) {
    if (ka) {
       try {
        all[i-one].style.borderColor="#eb8334";
        
         for (let zz of h1) {
           if (zz==(i-one)||zz==i) {
             ka=false;
           }}
       
         } catch (error) {continue;}
}
    one+=1;
      }
  ka=true;
  one=1;
}
}

function bishopM(all,i,name) {


  
}


////
