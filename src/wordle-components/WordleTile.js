import '../wordle-styling/WordleTile.css'

export default function WordleTile(props) {
  return (<div className='wordle-tile'>
            {props.letter}
        </div>
  )
}