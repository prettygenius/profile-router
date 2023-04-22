import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route} from 'react-router-dom'


function App () {
    return(
        
        <div>
            <Navbar />
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/contact" element={<Contact />}/>
            </Routes>
        </div>
    )
}
 
export default App;

