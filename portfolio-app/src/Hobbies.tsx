import { Carousel } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import jugglingVideoMov from "./videos/juggling.mov";
import jugglingVideoMp4 from "./videos/juggling.mp4";

function WrestlingCarousel() {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className="photo d-block"
                src={require("./photos/Wrestling1.jpg")}
                alt="In Singlet"
                ></img>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="photo d-block"
                src={require("./photos/Wrestling2.jpg")}
                alt="In Uniform"
                ></img>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="photo d-block"
                src={require("./photos/Trophy.jpg")}
                alt="Trophy"
                ></img>
            </Carousel.Item>
        </Carousel>
    )
    
}

const JugglingVideo: React.FC = () => {
    return (
      <video controls muted width={600} height={600}>
        <source src={jugglingVideoMp4} type="video/mp4" />
        <source src={jugglingVideoMov} type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
    );
  };

function Hobbies() {
    return (
        <div className="standard-margin-btm">
            <h2><strong>Hobbies</strong></h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Wrestling</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            I was a varsity wrestler in high school, and <strong>wrestling</strong> is my favorite sport by far.
                            I am on my journey of learning other martial arts such as muay thai and judo.
                        </p>
                        <WrestlingCarousel />

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Juggling</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            I love learning new skills. One interesting skill I learned is <strong>juggling</strong>.
                            Juggling takes a lot of work to learn, but learning the tricks is worth it in the end.
                        </p>

                        <JugglingVideo />

                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Gaming</Accordion.Header>
                    <Accordion.Body>
                        <p>
                            I also love to game in my free time.  Some of my favorite games are <strong>Rocket League, Counter Strike 2, Street Fighter 6, Super Smash Bros, and Rainbow Six Siege</strong>.
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            
        </div>
    );
}

export default Hobbies;