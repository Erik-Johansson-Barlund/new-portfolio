import { useState, useEffect } from 'react'

const wordList = [
  'Javascript_',
  'React_',
  'Typescript_',
  'good times_',
  'HTML_',
  'CSS_',
  'unit testing_',
  'tacos_',
  'agile_',
  'Node JS_',
  'WCAG_'
]

const chars = ['_', '-']

function Hero (): JSX.Element {
  const [counter, setCounter] = useState(0)
  const [currentWord, setCurrentWord] = useState('')
  const [charCounter, setCharCounter] = useState(0)

  useEffect(() => {
    if (counter === wordList.length) {
      setCounter(0)
      return
    };

    const word = wordList[counter]

    setTimeout(async () => {
      const sourceWordSplit = word.split('')
      const destinationWordSplit = currentWord.split('')

      if (
        destinationWordSplit.length > 1 &&
        sourceWordSplit[0] !== destinationWordSplit[0]
      ) {
        destinationWordSplit.pop()
        if (destinationWordSplit.length === 0) {
          await new Promise(resolve => setTimeout(resolve, 500))
        }
        setCurrentWord(destinationWordSplit.join(''))

        return
      }

      if (
        sourceWordSplit.length === destinationWordSplit.length &&
        sourceWordSplit[sourceWordSplit.length - 1] === destinationWordSplit[destinationWordSplit.length - 1]
      ) {
        await new Promise(resolve => setTimeout(resolve, 1200))
        setCounter(old => old + 1)
        return
      }

      let newChar
      if (charCounter !== 0) {
        destinationWordSplit.pop()
      }

      if (charCounter < 1) {
        newChar = chars[charCounter]
        setCharCounter(old => old + 1)
      } else {
        newChar = sourceWordSplit[currentWord.length - 1]
        setCharCounter(0)
      }

      destinationWordSplit.push(newChar)
      setCurrentWord(destinationWordSplit.join(''))
    }, 80)
  }, [counter, currentWord])

  return (
    <div className="flex flex-col">
<div className="relative flex flex-col w-128 h-40">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 object-bottom left-0 w-lg rounded-lg"
    controls={true}
    style={{ mask: 'url(#mask)' }} // Apply mask directly to the video
  >
    <source src="assets/lp.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <svg
    className="w-128 absolute top-0 left-0 z-0"
    viewBox="0 0 620 280"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <mask id="mask" x="0" y="0" width="100%" height="140%">
        <rect className="fill-white" x="0" y="0" width="100%" height="100%" /> {/* Masking area */}
        <text className="shadow-sm" x="0" y="40" fontSize="30" fontWeight="900" fill="black">
          <tspan x="0" dy="0">ERIK JOHANSSON</tspan>
          <tspan x="0" dy="27">BÄRLUND</tspan>
        </text>
      </mask>
    </defs>
    <rect className="fill-#846969" x="0" y="0" width="240" height="100" fill="#242424" mask="url(#mask)" />
  </svg>
</div>
<h1 className="text-white font-semibold pt-6 text-2xl z-50">Knows his way around {currentWord}</h1>
</div>
  )
}

export default Hero
