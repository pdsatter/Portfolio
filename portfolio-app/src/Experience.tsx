import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Experience() {
    return (<>
        <h2><strong>Experience</strong></h2>
        <p>
            I am an experienced <strong>full stack web developer</strong>. I started my web development career in my sophmore year of college.
            I was lucky enough to take on 2 positions at the same time.  I started working a part time webmaster position working with H-GAC and 
            also started a research project with UH. I could do my job during the day and do research in my free time at night.  
        </p>
        <p>
            Most recently in the summer of 2023 I joined the <strong>Hewlett-Packard</strong> team for a summer internship.
            It was an amazing experience and made me realize how much there is to learn as a <strong>full stack developer</strong>. I am
            excited for my next opportunity and expand my knowledge in software design.
        </p>
    
        <Row>
            <Col xs={12} className="experience">
                <h4><b>GOWell</b></h4>
                <h5>Software Engineer</h5>
                <header><i>January 2024 - Current</i></header>
                <p>
                    Focus on software engineering efforts including development, design, implementation, test, deploy, and providing training for R&D projects.  
                    Support BD and clients, including testing, conferencing, training, and presentation,  when needed.  
                </p>
                <ul>
                    <li>R&D</li>
                    <li>Generative AI</li>
                    <li>AWS</li>
                </ul>
            </Col>
            <Col xs={12} className="experience">
                <h4><b>Hewlett-Packard (HP)</b></h4>
                <h5>Software Developer, Intern</h5>
                <header><i>June 2023 - Aug 2023</i></header>
                <p>
                    As a full-stack developer during my internship, I utilized React, Typescript, and Golang to enhance 
                    both the front-end experience and the back-end API of our product. 
                    I surpassed what was expected of me on this project. 
                </p>
                <ul>
                    <li>React</li>
                    <li>Typescript</li>
                    <li>Javascript</li>
                    <li>Golang</li>
                    <li>API</li>
                    <li>Github</li>
                    <li>AGILE</li>
                    <li>Edge Computing</li>
                </ul>
            </Col>

            <Col xs={12} className="experience">
                <h4><b>Houston Galveston Area Council (H-GAC)</b></h4>
                <h5>Webmaster, Intern</h5>
                <header><i>Aug 2021 - June 2023</i></header>
                <p>
                    As a full-stack webmaster, I was responsible for the development and maintenance of our website. 
                    My role involved creating web forms and various web components, which included tasks such as database management, 
                    user input validation, payment processing, and email confirmation. 
                </p>
                <ul>
                    <li>ASP.NET</li>
                    <li>C#</li>
                    <li>MVC</li>
                    <li>Javascript</li>
                    <li>Microsoft SQL Server</li>
                    <li>HTML</li>
                    <li>SEO</li>
                </ul>
            </Col>

            <Col xs={12} className="experience">
                <h4><b>University of Houston</b></h4>
                <h5>Software Developer & Researcher</h5>
                <header><i>Aug 2021 - June 2023</i></header> 
                <br />   
                <p>
                    <b>Light-Duty Vehicle GHG Emissions: A Transparent, Dynamic Model</b>
                </p>
                <p>
                    The first project was focused on taking an existing model and making it a web based model. I fully planned, built, and deployed a web application to reach this goal.
                    Requirements met included: functionality that takes user inputs and output an updated model, supporting large loads of viewers, maintaining a consistent experience for the user across multiple
                    web pages.
                </p>
                <p>
                    My second research assignment with them focused on doing the research and building my own model. I researched the emissions of Electric vehicles vs Gasoline vehicles.
                    I used regression analysis and other statistical tools to create a model during this research project.
                </p>
                <p>
                    For more detailed information, 
                    please refer to the accompanying <a target="_blank" rel="noreferrer" href="https://uh.edu/uh-energy/research/white-papers/vehicle-ghg-emissions">White Paper</a> and <a target="_blank" rel="noreferrer" href="https://flask.cs.uh.edu/">Web Pages</a>.
                </p>
                <ul>
                    <li>Flask</li>
                    <li>Python</li>
                    <li>Dev Ops</li>
                    <li>Gunicorn</li>
                    <li>Research</li>
                    <li>Statistics</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </Col>
        </Row>
    </>
        
    );
}

export default Experience;