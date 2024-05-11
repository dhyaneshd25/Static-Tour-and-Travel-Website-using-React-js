import './tripstyle.css'
import Destination from './utils/destinationlist';

function Trip(){
    return (
        <section className='trip-wrapper'>
         <h1 >
              Recent Trips
            </h1>
            <p>
            Tailor your journey to your preferences with our customizable itineraries, ensuring every trip is uniquely yours.
            </p>
       <div className='outer-container'>
           
            <div className='t-container'>
                {/*
                {Destination.map((card,in)=>{
                    return(
                        <div className="t-card">
                        <div className='t-image'>
                            <img/>
                        </div>
                        <h4>kf;rkgrf;oetkfgktlkh</h4>
                        <p>fhidjfirgilrkjflgkjtgjwrio nhf he ehejke fe fje fje jfjf ije fjwef j e fhfehfej fljefe fefef efefefefi</p>
                    </div>
                    );
                })}
            */}
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
        </section>
    );
}


export default Trip;