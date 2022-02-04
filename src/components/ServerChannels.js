//Styling
import '../css/ServerChannels.css'

//Components
import ServerTextChannels from './ServerTextChannels';

export default function ServerChannels() {
   return <section className='server__channels'>  
                <ServerTextChannels />
            </section>;
}