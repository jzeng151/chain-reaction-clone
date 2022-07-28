interface IObjectKeys {
  [key: string]: string | string[] | number | boolean | undefined
}

export interface GameProps extends IObjectKeys {
  chain?: string[],
  chainProgress?: string[],
  currWordTopIdx?: number,
  currWordBottomIdx?: number,
  guessingAt?: string,
  loading?: boolean,
  isGuessing?: boolean,
}

export interface ShowLetterProps {
  game: GameProps,
  setGame: React.Dispatch<React.SetStateAction<GameProps>>,
  currentWordTop: string,
  currentWordBottom: string,
}

export interface GuessWordProps {
  game: GameProps,
  setGame: React.Dispatch<React.SetStateAction<GameProps>>,
}