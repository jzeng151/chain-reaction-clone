import PropTypes from 'prop-types'
import { GuessWordProps, GameProps } from '../../interfaces';

function GuessWord({setGame, game}: GuessWordProps) {
  const {
    chain,
    chainProgress,
    currWordTopIdx, 
    currWordBottomIdx,
    guessingAt
  }: GameProps = game;

  function guessWord() {
    const guess = (document.querySelector('#guess-word-input') as HTMLInputElement).value;
    let currIdx: number;
    let newTopOrBotIdx: string;
    if (guessingAt === 'above') {
      currIdx = currWordBottomIdx! - 1;
      newTopOrBotIdx = 'currWordBottomIdx';
    } else if (guessingAt === 'below') {
      currIdx = currWordTopIdx! + 1;
      newTopOrBotIdx = 'currWordTopIdx';
    }
    if (guess === chain![currIdx!]) {
      const newChainProgress: string[] = [...chainProgress!];
      newChainProgress[currIdx!] = chain![currIdx!];
      const newGameState: GameProps = {
        ...game,
        chainProgress: newChainProgress,
        isGuessing: false,
      }
      newGameState![newTopOrBotIdx! as keyof GameProps] = currIdx!;
      setGame(newGameState);
    } else {
      setGame({
        ...game,
        isGuessing: false,
      })
    }

  }

  return (
    <div>
      <input id="guess-word-input" type="text" placeholder="Guess the word"></input>
      <button type="button" onClick={guessWord}>Guess</button>
    </div>
  )
}

GuessWord.propTypes = {
  game: PropTypes.object.isRequired,
  setGame: PropTypes.func.isRequired,
};

export default GuessWord