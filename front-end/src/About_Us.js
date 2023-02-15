import {Link} from 'react-router-dom'
import './About_Us.css'
const picture = require("./Christina.png");
/**
 * @param {*} param0
 * @returns
 */
const About_Us = props => {
  return (
    <>
      <h1>About me</h1>
      <p>My name is Christina Borao. I am a junior in CAS studying Computer Science and Economics. </p>
      
      <p>As for some background information about me, I grew up in New Jersey. I now reside in New York
        for school. I have a twin sister and a younger brother. When I am not studying I enjoy trying new 
        cusines. I appreciate that food can offer a lens into exciting new cultures.
      </p>
      
	<img src={picture} />

    </>
  
  )
}

export default About_Us