import {Link} from 'react-router-dom'
import BannerImage from '../assets/home.jpg'
import "../styles/Home.css"

function Home(){

    return(
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}} > 
            <div className="headerContainer">
                <h1>Milos's Beaches Trips</h1>
                <p>DISCOVER WHAT MILOS HAS TO OFFER</p>
                <Link to="/destinations">
                    <button>Plan a trip</button>
                </Link>
            </div>
        </div>
    )
}
export default Home;

// style={{backgroundImage: `url(${BannerImage})`}}

// We use the LINK provided by react-router-dom.