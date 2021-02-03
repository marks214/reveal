import React, { useState } from 'react'
import TextScramble, { ScrambleTexts } from '@twistezo/react-text-scramble'
import './Logo'

//from: https://codesandbox.io/s/react-text-scramble-eyzqm?file=/src/Example.tsx:0-766
const scrambleTexts: ScrambleTexts = [
  'lorem ipsum',
  'dolor sit amet',
  'consectetur adipiscing elit'
]

const Logo: React.FC = () => {
  const [pause, setPause] = useState(false)

  return (
    <>
      <div className='Example'>
        <span className='Example__blinker'>_</span>
        <TextScramble
          texts={scrambleTexts}
          letterSpeed={5}
          nextLetterSpeed={100}
          pauseTime={1500}
          paused={pause}
        />
      </div>

      <button onClick={() => void setPause(!pause)}>
        {pause ? 'Resume' : 'Pause'}
      </button>
    </>
  )
}

export default Logo