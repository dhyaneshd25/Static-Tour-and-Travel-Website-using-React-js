import Footer from "../fooster";
import SendForm from "../form";
import Hero from "../hero";
import Navbar from "../navbar";

function Contact (){
    return (
      <> 
        <Navbar/>
        <Hero
        cName="hero-mid"
        imgname="https://imgcld.yatra.com/ytimages/image/upload/v1471865079/Mauritius_Best_Time1.jpg"
        title="Contact"
      
        url="/"
        />
       <SendForm/>
       <Footer/>
        </>
    );

}

export default Contact;