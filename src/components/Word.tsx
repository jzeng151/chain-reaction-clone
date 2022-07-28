import React, { ReactElement } from 'react'

function Word({ word }: {word: string}) {
  const letters: ReactElement[] = [];
  const styles = {
    width: '30px',
    height: '28px'
  }
  for (let i = 0; i < 10; i++) {
    letters[i] = 
      <button style={styles} key={Math.random() + i}>
        {word[i]?.toUpperCase() || '?'}
      </button>
  }
  return (
    <div>
       {letters}
    </div>
  )
}

export default Word;
