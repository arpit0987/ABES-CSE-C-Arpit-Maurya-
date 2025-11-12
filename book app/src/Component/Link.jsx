
import { BrowserRouter,Routes,Route, Link} from 'react-router-dom'

function MainRouter() {

    function Home () {
        <h1>This is my Home page</h1>
    }

    function About() {
        <h1>This is my AboutUs Page</h1>
    }
  return (

    <div>
      <nav>
       <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
       </nav>
      </nav>
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/about" element={About}/>
      </Routes>
    </div>
  )
}

export default MainRouter