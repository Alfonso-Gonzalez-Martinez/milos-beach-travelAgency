import { DestinationsList } from '../helpers/DestinationsList.js'
import DestinationsItem from '../components/DestinationsItem.js';
import '../styles/Destinations.css'

function Destinations(){
    return(
        <div className="destinations">
            <h1 className="destinationsTitle">Our Top Beaches</h1>
            <div className="destinationsList">
                {DestinationsList.map((destinationsItem, key) => {
                    return<DestinationsItem key={key}
                            image={destinationsItem.image}
                            name={destinationsItem.name}
                            price={destinationsItem.description}/>
                })}
            </div>
        </div>
    )
}

export default Destinations;

// We import a constant from our helpers.
// The constant is an array of objects and each one of them has an image, name and price.
// We have to give the name of the item and the key in React in the map function.
// We return a Component from the map function.
// The component will have the attributes in relation to the object that we created it from. 
// We will pass the properties of the objects through the component as props.
// Go to DestinationsItem.js


// The idea is that on each iteration of map, we render a new div we a new component that will use the properties
// of the object as props to render an image, name and price. 