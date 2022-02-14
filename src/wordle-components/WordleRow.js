import '../wordle-styling/WordleRow.css'
import WordleTile from '../wordle-components/WordleTile'

export default function WordleRow(props) {
  return (<div className='wordle-row'>
            <WordleTile letter={props.letter1}/>
            <WordleTile letter={props.letter2}/>
            <WordleTile letter={props.letter3}/>
            <WordleTile letter={props.letter4}/>
            <WordleTile letter={props.letter5}/>
          </div>
  )
}