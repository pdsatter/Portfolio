import { Carousel } from "react-bootstrap";

function Hobbies() {
    return (
        <div>
            <h2><strong>Hobbies</strong></h2>
            <h4>Wrestling</h4>
            <p>
                I was a varsity wrestler in high school, and <strong>wrestling</strong> is my favorite sport by far.
                I am on my journey of learning other martial arts such as muay thai and judo.
            </p>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={require("./photos/Wrestling1.jpg")}
                    alt="First slide"
                    ></img>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://lorempixel.com/800/400/food/1"
                    alt="First slide"
                    ></img>
                </Carousel.Item>
            </Carousel>

            <h4>Juggling</h4>
            <p>
                I love learning new skills. One interesting skill I learned is <strong>juggling</strong>.
                Juggling takes a lot of work to learn, but learning the tricks is worth it in the end.
            </p>

            <h4>Gaming</h4>
            <p>
                I also love to game in my free time.  Some of my favorite games are <strong>Rocket League, CS2, Super Smash Bros, and Rainbow Six Siege</strong>.
            </p>
        </div>
    );
}

export default Hobbies;