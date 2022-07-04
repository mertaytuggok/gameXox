import React, { useState } from "react";
import './Game.css'

const Game = () => {
    const[turn, setTurn] = useState(Array(9).fill('start'));
    const[cells, setCells] = useState(Array(9).fill(''));
    const[win, setWin] = useState();

    let combos = {
        across: [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
        ],
        down: [
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
        ],
        giagnol: [
            [0, 4, 8],
            [2, 4, 6],
        ],
    };

    const checkWinner = (squares) => {
      
      

        for(let combo in combos){
            combos[combo].forEach((pattern) => {
               if(
                squares[pattern[0]] == '' ||
                squares[pattern[1]] == '' ||
                squares[pattern[2]] == '' 
               ){}
               else if (
                squares[pattern[0]] === squares[pattern[1]] &&
                squares[pattern[1]] === squares[pattern[2]]                 
                ){
                    setWin(squares[pattern[0]]);
                }

               
            });
        }
    } 
    const handleClick = (num) => {
		if (win === ''){
			let squares = [...cells];
			if (cells[num] === '') {
				squares[num] = 'x';
				turn[num] = 'start' + ' xL ';
			} else if (cells[num] === 'x') {
				squares[num] = 'o';
				turn[num] = 'start' + ' oL ';
			} else {
				squares[num] = '';
				turn[num] = 'start';
			}
			for (let combo in combos) {
				combos[combo].forEach((item) => {
					if (
						turn[item[0]] === 'start' ||
						turn[item[1]] === 'start' ||
						turn[item[2]] === 'start'
					) {} else if (
						turn[item[0]] === turn[item[1]] && 
						turn[item[1]] === turn[item[2]] &&
						squares[item[0]] === 'x'
						
					) {
						turn[item[0]] = 'start' + ' xL ' + ' winx';
						turn[item[1]] = 'start' + ' xL ' + ' winx';
						turn[item[2]] = 'start' + ' xL ' + ' winx';
	
					} else if (
						turn[item[0]] === turn[item[1]] && 
						turn[item[1]] === turn[item[2]] &&
						squares[item[0]] === 'o'
					) {
						turn[item[0]] = 'start' + ' oL ' + ' wino';
						turn[item[1]] = 'start' + ' oL ' + ' wino';
						turn[item[2]] = 'start' + ' oL ' + ' wino';
					}
				});
			}
			checkWinner(squares);
			setCells(squares);	
			setTurn(turn);	
		} else {
				setWin('');
				setCells(Array(9).fill(''));
				setTurn(Array(9).fill('start'));
		}
	};
    const Cell = ({ num }) => {
        return <td onClick={() => handleClick (num)}>{cells[num]}</td>

    };


return (
       
      <div className="Container">
        
        <table>
            <div className="gt">GAME TIME</div>
            <div className="Board">
                <tbody className="xO " >
                <tr>
                    <Cell num={0}/>
                    <Cell num={1}/>
                    <Cell num={2}/>
                </tr>
                <tr>
                    <Cell num={3}/>
                    <Cell num={4}/>
                    <Cell num={5}/>
                </tr>
                <tr>
                    <Cell num={6}/>
                    <Cell num={7}/>
                    <Cell num={8}/>
                </tr>
                </tbody>
                </div>
        </table>
        </div>
        
      
);   
};

export default Game;