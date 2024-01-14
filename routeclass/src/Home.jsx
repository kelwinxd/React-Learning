import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
const Home = () => {
  return (
    <div className="home"><h1>
      <Helmet>
        <title>Home</title>
      </Helmet>
    </h1>
    <div className="linkHome">
    <Link to="singles/classic/eights">Classic</Link>
      <Link to="singles/modernrock/twoeight">Modern Rock</Link>
    </div>
     
    </div>
  )
}

export default Home