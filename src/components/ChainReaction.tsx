import { useState, useEffect } from 'react'
import Word from './Word';
import GuessWord from './GuessWord';
import ShowLetter from './ShowLetter';
import { GameProps } from '../../interfaces';

function ChainReaction() {
  const [game, setGame] = useState<GameProps>({ loading: true })

  useEffect(() => {
    startGame();
  }, [])

  function startGame(): void {
    // add functionality to fetch from backend
    const chain: string[] = ['student', 'debt', 'free', 'parking', 'garage', 'sale'];
    const chainProgress: string[] = new Array(chain.length).fill('');
    const endIdx: number = chain.length - 1;
    chainProgress[0] = chain[0];
    chainProgress[endIdx] = chain[endIdx];
    setGame({
      chain,
      chainProgress,
      currWordTopIdx: 0,
      currWordBottomIdx: endIdx,
      loading: false,
      isGuessing: false,
      guessingAt: '',
    })
  }

  console.log(game.chainProgress)
  console.log(game.currWordTopIdx)
  console.log(game.currWordBottomIdx)

  return (
    <div style={{textAlign: 'center'}}>
      Chain Reaction
      {game.chainProgress && game.chainProgress.map((word, i) => {
        return <Word word={word} key={word+i} />
      })}

      {game.isGuessing && 
        <GuessWord 
          game={game}
          setGame={setGame} />}

      {!game.isGuessing && !game.loading &&
        <ShowLetter
          game={game}
          setGame={setGame}
          currentWordBottom={game.chainProgress![game.currWordBottomIdx!]} 
          currentWordTop={game.chainProgress![game.currWordTopIdx!]} />}
          
    </div> 
  )
}

export default ChainReaction;
