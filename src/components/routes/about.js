import Footer from "../fooster";
import Hero from "../hero";
import Navbar from "../navbar";

function About (){
    return (
        <>
        <Navbar/>
        <Hero
           cName="hero-mid"
           imgname="https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/swiezmifobyjibudd4cc/4IslandsDayTourfromKrabi.jpg"
           title="About"
         
           url="/"
        />
        
        <h1>Our History </h1>
        <p>Founded on the passion for exploration and the love of travel, our journey began in 2024 with a simple idea: to connect people with extraordinary destinations. What started as a small endeavor fueled by wanderlust has evolved into a leading force in the travel industry. Over the years, we have curated unforgettable experiences, forged lasting partnerships, and built a community of adventurers united by a shared sense of discovery. As we continue to grow, our commitment to innovation, authenticity, and personalized service remains unwavering, ensuring that every journey with us is a testament to the timeless spirit of exploration.<br/></p>
        <h1>Our Mission</h1>
        <p>At Holiday Tours, our mission is to inspire and empower travelers to embark on transformative journeys that enrich their lives and broaden their perspectives. We strive to create seamless and memorable travel experiences that exceed expectations, foster meaningful connections with diverse cultures, and promote sustainability and responsible tourism practices. With a relentless dedication to customer satisfaction and a deep respect for the destinations we visit, we aim to be the preferred choice for discerning travelers seeking authenticity, adventure, and unparalleled service.<br/></p>
       <h1>Our Vision</h1>
       <p>Our vision is to be the premier global platform for immersive travel experiences, recognized for our unwavering commitment to excellence, innovation, and sustainability. We envision a world where travel transcends boundaries, fosters empathy and understanding, and leaves a positive impact on both travelers and the communities they explore. Through continuous innovation, strategic partnerships, and a steadfast dedication to our core values, we aspire to shape the future of travel and inspire a new generation of explorers to embark on extraordinary journeys of discovery.<br/></p>
        <Footer/>
        </>
    );

}

export default About;