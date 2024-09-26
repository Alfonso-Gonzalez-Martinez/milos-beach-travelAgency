import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './pages/Home.js'
import Destinations from './pages/Destinations.js'
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/Destinations" exact Component={Destinations} />
        <Route path="/About" exact Component={About} />
        <Route path="/Contact" exact Component={Contact} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;

// React router dom takes care of the links in react. It has to be imported on the top of the hierachy tree.
// We keep the Navbar component on the top and just switch the pages that we are showing below it. As if we were switching
// between components that are effectively different pages. 
// We have two components: Navbar that is static throughout the pages and Routes that switches from one page to the other one.
// Step 1: imports
// Step 2: Wrap everything in <Router>.
// Step 3: Create the <Routes> component that will have all the pages.
// Step 4: Use one <Route /> fo each page that you want to go to. 
// Step 5: use <Link> from react-router-dom in the pages to go back to the menu or where you want to go.


// Router: Wraps all your routes and enables routing in your app.
// Routes: Contains all the Route components.
// Route: Defines a specific route. In this case, the route with path / renders the Home component.
// path="/": This is the URL path for which the route should be matched. Here, it's the root path.
// element={<Home />}: This specifies which component should be rendered when the path is matched.

// What Does It Do?
// When a user navigates to the root URL of your application (/), the Home component will be rendered.
// The Router component ensures that the application is aware of URL changes and renders the appropriate components accordingly.
// The Routes component manages all the defined routes, ensuring the correct component is rendered based on the current URL.


// Effect:
// Navbar and Footer are sticky components and then we switch through the pages components. 
