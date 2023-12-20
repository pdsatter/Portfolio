import './App.css'
import ContactLinks from './ContactLinks';
import Resume from './Resume';
function Header() {
return (
  <div className="Sticky main-body">
    <div>
      <h1><strong>Preston Satterfield</strong></h1>
      <h2>Full Stack Developer</h2>
      <p>Looking for opportunities to expand my skills in software engineering.</p>

      <ContactLinks />
    </div>

    <div className="resume-padding">
      <Resume />
    </div>
  </div>
    
    );
}

export default Header;