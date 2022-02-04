//Styling
import '../css/ActivityRegion.css'

export default function ActivityRegion() {
  return <div className='activity__region'>
            
                <div className='activity__header'>
                    <h2>Activity</h2>
                </div>
                
                <div className='activity__body'>
                    <div id='quietActivity'>
                        <h5>Cricket, Cricket, Cricket...</h5>
                        <h6>When something's happening it'll be displayed here</h6>
                    </div>
                </div>
        </div>;
}