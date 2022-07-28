import PropTypes from 'prop-types';
import { ShowLetterProps } from '../../interfaces';

function ShowLetter({setGame, game, currentWordTop, currentWordBottom}:ShowLetterProps) {
  const { 
    chain,
    chainProgress,
    currWordTopIdx, 
    currWordBottomIdx,
  } = game;

  function revealLetter(place: string): void {
    let currIdx: number;
    if (place === 'above') {
      currIdx = currWordBottomIdx! - 1;
    } else if (place === 'below') {
      currIdx = currWordTopIdx! + 1;
    }
    const currWordLength: number = chainProgress![currIdx!].length;
    const newChainProgress: string[] = [...chainProgress!];
    const newWord: string = chain![currIdx!].slice(0, currWordLength + 1);
    newChainProgress[currIdx!] = newWord;
    setGame({
      ...game,
      chainProgress: newChainProgress,
      guessingAt: place,
      isGuessing: true,
    });
  }
  
  return (
    <div>
      Where would you like your letter?
      <button type="button" onClick={() => revealLetter('above')}>
        Above{currentWordBottom}
      </button>
      <button type="button" onClick={() => revealLetter('below')}>
        Below{currentWordTop}
      </button>
    </div>
  )
}

ShowLetter.propTypes = {
  game: PropTypes.object.isRequired,
  setGame: PropTypes.func.isRequired,
  currentWordTop: PropTypes.string.isRequired,
  currentWordBottom: PropTypes.string.isRequired,
};

export default ShowLetter;
