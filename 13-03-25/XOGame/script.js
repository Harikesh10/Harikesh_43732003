let player = 'X';
        const cells = document.getElementsByClassName('cell');

        //The pattern for the players to win
        //In the pair of three to match either one of the player to win!
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], 
            [0, 3, 6], [1, 4, 7], [2, 5, 8], 
            [0, 4, 8], [2, 4, 6]
    ];

    function play(obj, i){
            if(obj.innerHTML === ''){
                obj.innerHTML = player;
            if(checkWin(player)){
                    setTimeout(() => {
                        alert(`${player} wins!`);
                          reset();
                    }, 100);
                    return;
                }
            if(filled()){
                    setTimeout(() => {
                        alert('Draw!');
                        reset();
                    }, 100);
                    return;
                }
                player = (player === 'X') ? 'O' : 'X';
            }
        }

        function checkWin(player){
            return winPatterns.some(pattern => {
                return pattern.every(index => cells[index].innerHTML === player);
            });
        }

        function filled(){
            return [...cells].every(cell => cell.innerHTML !== '');
        }

        function reset(){
            for(let i = 0; i < 9; i++){
                cells[i].innerHTML = '';
            }
            player = 'X';
        }