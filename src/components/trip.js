import './tripstyle.css'
import Destination from './utils/destinationlist';

function Trip(){
    return (
        <div className='trip-wrapper'>
         <h1 >
              Recent Trips
            </h1>
            <p>
            Tailor your journey to your preferences with our customizable itineraries, ensuring every trip is uniquely yours.
            </p>
       <div className='outer-container'>
           
            <div className='t-container'>
            {
                Destination.map((car)=>{
                    return(
                        <div className="t-card">
                        <div className='t-image'>
                            <img src={car.name}/>
                        </div>
                        <h4>{car.tit}</h4>
                        <p>{car.dep}</p>
                    </div>
                    );
                })
            }
            

            </div>
        </div>
        </div>
    );
}


export default Trip;