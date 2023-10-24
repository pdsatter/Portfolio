import './App.css'
import ContactLinks from './ContactLinks';

function Header() {
return (
    <div className="Sticky main-body">
      <h1><strong>Preston Satterfield</strong></h1>
      <h2>Full Stack Developer</h2>
      <p>I build digital experiences on the web.</p>

      <ContactLinks />
    </div>
    
    );
}

export default Header;