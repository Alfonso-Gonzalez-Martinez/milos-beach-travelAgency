
function DestinationsItem({image, name, price}){
    return(
         <div className="destinationsItem">
            <div style={{backgroundImage:`url(${image})`}}></div>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}

export default DestinationsItem;

// The component will receive the information from the Menulist object through props.
// This props are specified on the Menu.js
// The component will be in charge of using the props to create the image, h1 and p in a dinamic way.