import AboutMe from './AboutMe';
import Experience from './Experience';
import Hobbies from './Hobbies';
import './App.css'

function Body() {
    return (
        <div className="main-body">
            <AboutMe />
            <Hobbies />
            <Experience />
            
        </div>
        
    );
}

export default Body;