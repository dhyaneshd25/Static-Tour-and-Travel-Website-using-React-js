import Destination from "../destination";
import Footer from "../fooster";
import Hero from "../hero";
import Navbar from "../navbar";

import Trip from "../trip";

function Home (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero"
        imgname="https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_640.jpg"
        title="Welcome to Your Ultimate Tour Hub"
        text="Discover breathtaking destinations, exciting adventures, and unforgettable experiences"
        btntext="Plan Your Next Adventure"
        btnclass="show"
        url="/"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );

}

export default Home;