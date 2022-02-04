//Styling
import '../css/ServerTitle.css'

export default function ServerTitle(props) {
  return <header className='server-title'>
            {props.server ? <h2>{props.server}</h2> : <h2>No Name</h2>}
        </header>;
}