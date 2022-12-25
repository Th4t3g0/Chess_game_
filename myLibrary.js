var exports=module.exports={};

exports.pawnMoves=function pawnM(all,i,piece,end,sign) {
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

exports.horseMoves=function horsemo(all,i,piece) {
   if (all[i].getElementsByTagName("img")[0].getAttribute("alt")==piece ) {
        
      for (let iii = 0; iii < 8; iii++) {
        try {
          all[i+horse[iii]].style.borderColor="#eb8334";
        } catch (error) {
          continue;
        } } }
  
}