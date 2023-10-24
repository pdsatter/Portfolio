import AboutMe from './AboutMe';
import Experience from './Experience';
import Resume from './Resume';
import './App.css'

function Body() {
    return (
        <div className="main-body">
            <AboutMe />
            <Experience />
            <Resume />
        </div>
        
    );
}

export default Body;