import aboutImage from '../assets/about.jpg'
import '../styles/About.css'

function About(){
    return(
        <div className="about">
            <div className="aboutTop"
                style={{backgroundImage: `url(${aboutImage})`}}>
            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p>Discover the beauty of Milos, Greece with our travel agency, your local experts for an unforgettable island experience. From the stunning, lunar-like landscapes of Sarakiniko Beach to the hidden coves of Tsigrado and the majestic sea caves of Kleftiko, we offer personalized tours and insider knowledge to help you explore Milos' breathtaking beaches, rich history, and vibrant culture. Whether you’re seeking adventure, relaxation, or a romantic getaway, let us craft the perfect itinerary to reveal the true magic of Milos. Your dream island escape starts here!</p>
            </div>
        </div>
    )
}

export default About;