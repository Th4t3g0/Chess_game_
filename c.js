
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
var p=8;
var b1=7;
var b2=9;
var piece=[];
var piece_before=[];
var horse=[6,17,10,15,-10,-15,-6,-17];

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
      //console.log(all[i].innerHTML);

  
      /////black pawns
      if (all[i].getElementsByTagName("img")[0].getAttribute("alt")=="black Pawn" && i>47) {
        
      for (let iii = 0; iii < 2; iii++) {
        //console.log("hello world");
        all[i-p].style.borderColor="#eb8334";
        p+=8;
      }
        p=8;
      }

      
      //end
      ////white_pawn
       if (all[i].getElementsByTagName("img")[0].getAttribute("alt")=="white pawn" && i<16) {
        
      for (let iii = 0; iii < 2; iii++) {
        //console.log("hello world");
        all[i+p].style.borderColor="#eb8334";
        p+=8;
      }
        p=8;
      
      }
      /////end
  
     ///white bishop
      if (all[i].getElementsByTagName("img")[0].getAttribute("alt")=="white bishop") {
        
      for (let iii = 0; iii < 7; iii++) {
        //console.log("hello world");
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
        b2=9;

        //

for (let iii = 0; iii < 7; iii++) {
        //console.log("hello world");
        try {
        all[i-b1].style.borderColor="#eb8334";
        all[i-b2].style.borderColor="#eb8334";

/////
// if (!(b1+i==0 || b1+i==8 || b1+i==16 || b1+i==24 || b1+i==32 || b1+i==40 || b1+i==48 || b1+i==56 )) {
     //      b1+=7;
            // break;
      //    }
       //   if (!(b2+i==7 || b2+i==15 || b2+i==23 || b2+i==31 || b2+i==39 || b2+i==47 || b2+i==55 || b1+i==63 )) {
       //     b2+=9;
            //break;
        //  }
          ////
         if (!(b1-i==0 || b1-i==8 || b1-i==16 || b1-i==24 || b1-i==32 || b1-i==40 || b1-i==48 || b1-i==56 )) {
          b1+=7;
      
          }
          if (!(b2-i==7 || b2-i==15 || b2-i==23 || b2-i==31 || b2-i==39 || b2-i==47 || b2-i==55 || b1-i==63 )) {
            b2+=9;
            
          }
          
        
        }catch (error) {

          break;
        }
        
      }
        b1=7;
        b2=9;



        //

      }
      //horse
       if (all[i].getElementsByTagName("img")[0].getAttribute("alt")=="white horse" ) {
        
      for (let iii = 0; iii < 8; iii++) {
        try {
          all[i+horse[iii]].style.borderColor="#eb8334";
        } catch (error) {
          continue;
        } } }

       if (all[i].getElementsByTagName("img")[0].getAttribute("alt")=="black horse" ) {
        
      for (let iii = 0; iii < 8; iii++) {
        try {
          all[i+horse[iii]].style.borderColor="#eb8334";
        } catch (error) {
          continue;
        } } }
      ////end horse
      
///queen


///end queen

//King



//end King
      
//Castle



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





function setter(button) {
for (let j = 0; j < button.length; j++) {
  button[j].style.removeProperty('border');
}
  
}
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
