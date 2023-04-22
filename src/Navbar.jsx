import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="panel welcome">
    <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </nav>
    </div>
  )
}

export default Navbar