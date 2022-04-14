let win =document.querySelector('win');
let turn=('x');
let squares=[];
function end(num1 , num2,num3){
    document.getElementById('item'+num1).style.background='#000'; 
    document.getElementById('item'+num2).style.background='#000'; 
    document.getElementById('item'+num3).style.background='#000'; 
    setTimeout(function(){location.reload()},1500);
}
function winner() {
  for (let i=1; i<10; i++){
     squares[i]= document.getElementById('item'+i).innerHTML;
  }  
  if( squares[1]==squares[2]&&squares[2]==squares[3]&& squares[1] != '')
  {
     
     document.getElementById('item'+1).style.background='#000'; 
     document.getElementById('item'+2).style.background='#000'; 
     document.getElementById('item'+3).style.background='#000'; 
     setTimeout(function(){location.reload()},1500);
    for( i=0;i<9;i++){
       if (squares[i].clicked ===true){
        setTimeout(function(){location.reload()},1500);
       }

    }
  }
  else if ( squares[4]==squares[5]&&squares[5]==squares[6]&& squares[4] != ''){
end(4,5,6);
  }
  else if ( squares[7]==squares[8]&&squares[8]==squares[9]&& squares[9] != ''){
    end(7,8,9);
}
else if ( squares[1]==squares[4]&&squares[4]==squares[7]&& squares[4] != ''){end(1,4,7);
      
}
else if ( squares[2]==squares[5]&&squares[5]==squares[8]&& squares[5] != ''){end(2,5,8);
      
}
else if ( squares[3]==squares[6]&&squares[6]==squares[9]&& squares[6] != ''){end(3,6,9);
      
}
else if ( squares[4]==squares[5]&&squares[5]==squares[6]&& squares[4] != ''){end(4,5,6);
      
}
else if ( squares[1]==squares[5]&&squares[5]==squares[9]&& squares[5] != ''){end(1,5,9);
      
}
else if ( squares[3]==squares[5]&&squares[5]==squares[7]&& squares[5] != ''){end(3,5,7);
      
}

}
function game(id)
{
    let elemnt= document.getElementById(id);
    if (turn === 'x' && elemnt.innerHTML=='')
    {
        elemnt.innerHTML='X';
        turn ='o';
       
    }
    else if(turn==='o' && elemnt.innerHTML==''){
        elemnt.innerHTML='O';
        turn='x';
        
    }
    winner();
}
function reset(){
    setTimeout(function(){location.reload()},100);
    fetch("Json.json");
    document.appendChild(fetch("Json.json"))
}