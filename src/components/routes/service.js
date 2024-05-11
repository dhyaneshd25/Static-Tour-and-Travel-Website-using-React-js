import Footer from "../fooster";
import Hero from "../hero";
import Navbar from "../navbar";
import Trip from "../trip";

function Service (){
    return (
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        imgname="https://media1.thrillophilia.com/filestore/c8yj5qwy02ce1e6bsp0f3wizxb55_Krabi-Boat-Tour.jpg"
        title="Service"
        />
        <Trip/>
        <Footer/>
        </>
    );

}

export default Service;