import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Experience() {
    return (<>
        <h2><strong>Experience</strong></h2>
        <p>
            I am an experienced <strong>full stack web developer</strong>. I started by web development career in my sophmore year of college.
            I was lucky enough to take on 2 positions at the same time.  I started working a part time webmaster position working with H-GAC and 
            also started a research project with UH. I could do my job during the day and do research in my free time at night.  
        </p>
        <p>
            This added a lot of stress because I still had to get good grades at school, but it really slingshotted my experience working with websites. 
            One thing I really liked about my research is that I was given free reign on the entire development cycle.  I had weekly
            meetings to get constant feedback, however I planned, built, and deployed a web model in a short amount of time.
        </p>
        <p>
            Shortly after this research assignment, I started on a second research assignment.  Although this one was not
            software focused, it taught me a lot about <strong>statistics and mathematics</strong>.  Additonally, I learned how to seek out resources and focused on my problem solving skills. 
            This second research is still undergoing approval, however I am excited to see it published.
        </p>
        <p>
            Most recently in the summer of 2023 I joined the <strong>Hewlett-Packard</strong> team for a summer internship.
            It was an amazing experience and made me realize how much there is to learn as a <strong>full stack developer</strong>. I am
            excited to get more opportunities and expand my knowledge in software design.
        </p>
    
        <Row>
            <Col xs={12} className="experience">
                <h4><b>Hewlett-Packard (HP)</b></h4>
                <h5>Software Developer, Intern</h5>
                <header><i>June 2023 - Aug 2023</i></header>
                <p>
                    As a full-stack developer during my internship, I utilized React, Typescript, and Golang to enhance 
                    both the front-end experience and the back-end API of our product. 
                    I surpassed what was expected of me on this project. 
                    Due to an NDA, I'm unable to provide specific details about my work.
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
                    I accumulated two years of experience working in our full-stack development team.
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
                    I designed a webpage for the University of Houston (UH) using Flask and JavaScript. 
                    This website allows users’ to input data. The backend processes this data and returns charts based on our model.
                    The entire web project was designed and deployed by me. The frontend was designed by me, 
                    but it adheres to UH's standard CSS for a polished and professional appearance. The website features a user-friendly navigation menu at the top, and there are a total of four pages to explore.
                </p>
                <p>
                    For more detailed information, 
                    please refer to the accompanying <a target="_blank" href="https://uh.edu/uh-energy/research/white-papers/vehicle-ghg-emissions">White Paper</a> and <a target="_blank" href="https://flask.cs.uh.edu/">Web Pages</a>.
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