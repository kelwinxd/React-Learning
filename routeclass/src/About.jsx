import {useNavigate} from  'react-router-dom'
import {Helmet} from 'react-helmet'


const About = () => {
    const navigate = useNavigate()

    function handleClick(){
        navigate('/')
    }
  return (


    <div className="about">
          <Helmet>
            <title>About</title>
          </Helmet>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quos consequuntur pariatur placeat suscipit ut in illum. Magni fugiat, esse, animi consectetur deleniti sit nulla consequatur dignissimos dolor eveniet possimus.</p>
        <button onClick={handleClick}>Home</button>
    </div>
  )
}

export default About