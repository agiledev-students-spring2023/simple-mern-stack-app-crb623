import {Link} from 'react-router-dom'
import './About-Us.css'
const image = require("./Christina.png");
/**
 * A React component that represents one Message in the list of messages.
 * @param {*} param0 an object holding any props and a few function definitions passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const AboutUs = props => {
  return (
    <>
      <h1>About me</h1>
      <p>My name is Christina Borao. I am a junior in CAS studying Computer Science and Economics. </p>
      
      <p>As for some background information about me, I grew up in New Jersey. I now reside in New York
        for school. I have a twin sister and a younger brother. When I am not studying I enjoy trying new 
        cusines. I appreciate that food can offer a lens into exciting new cultures.
      </p>
      
	<img src={image} />

    </>
  
  )
}

export default About_Us