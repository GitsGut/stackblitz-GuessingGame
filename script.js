const no =    Math.round((Math.random()*100 +1));
const form = document.querySelector('form');
let arr= [];
let gr = 10 ;
const reset = document.querySelector('.btn');

reset.addEventListener('click', ()=>
{
  location.reload();
})
form.addEventListener('submit',(e)=>
{
  e.preventDefault();
  const guess = parseInt(document.querySelector('.guessfield').value);
  const hint = document.querySelector('.highorlow');
  const remaining = document.querySelector('.Remaining');
  const pguess = document.querySelector('.guesses');
  if (isNaN(guess) || guess <= 0 || guess > 100) {
    hint.innerHTML = 'Please enter a valid number between 1 and 100.';
    return  ;
  }
  if (gr === 0) {
    hint.innerHTML = `Game Over! The number was ${no}.`;
     arr= [];
     gr = 10 ;
    remaining.innerHTML = gr;
    pguess.innerHTML = `${arr}`;
    return; // Prevent further guesses after game over
  }
  if(guess === no )
  {
    hint.innerHTML = `You guessed it right  its ${guess}`;
    arr = [];
    remaining.innerHTML = gr;
    gr = 10;
    return ;
  }
  else if(guess > no)
  {
    hint.innerHTML = `Too High`;
    arr.push(guess);
   // let newarr = arr.join(',')
    pguess.innerHTML = `${arr}`;
   gr--;
   remaining.innerHTML = gr;
  }
  else
  {
    hint.innerHTML = `Too Low`;
    arr.push(guess);
    // let newarr = arr.join(',')
    pguess.innerHTML = `${arr}`;
   gr--;
   remaining.innerHTML = gr;
  }
  gameOver(gr);
})



