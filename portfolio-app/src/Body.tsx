import AboutMe from './AboutMe';
import Experience from './Experience';
import Education from './Education'
import Hobbies from './Hobbies';
import './App.css'

function Body() {
    return (
        <div className="main-body">
            <AboutMe />
            <Hobbies />
            <Education />
            <Experience />
            
        </div>
        
    );
}

export default Body;