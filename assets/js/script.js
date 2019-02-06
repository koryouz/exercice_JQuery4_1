$(document).ready(function(){
  var win = 0,lost = 0;
  $('#rock,#paper,#cissor').click(function(){
    var value = $(this).attr('id');
    var array=['rock','paper','cissor'];
    var randomChoice = array[Math.floor(Math.random() * 3)];
    if(value == randomChoice){
        alert('Egalité\nUrsign: '+value+'\nBotsign: '+randomChoice+'\nWin: '+win+'\nLost: '+lost+'\nW/L: '+Math.round(win/(win+lost)*100)+'%');
      }
    else if((value == 'rock' && randomChoice == 'cissor')||(value == 'cissor' && randomChoice == 'paper')||(value == 'paper' && randomChoice == 'rock')){
        win++;
        alert('Win !\nUrsign: '+value+'\nBotsign: '+randomChoice+'\nWin: '+win+'\nLost: '+lost+'\nW/L: '+Math.round(win/(win+lost)*100)+'%');
      }
    else{
        lost++;
        alert('Looser !\nUrsign: '+value+'\nBotsign: '+randomChoice+'\nWin: '+win+'\nLost: '+lost+'\nW/L: '+Math.round(win/(win+lost)*100)+'%');
      }
  });
});
