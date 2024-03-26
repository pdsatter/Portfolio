import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Education() {
    return (<>
        <h2><strong>Education</strong></h2>
        <Row>
            <Col xs={12} className="experience">
                <h4><b>University of Houston</b></h4>
                <h5>B.S. Computer Science | Math Minor</h5>
                <header><i>August 2020 - December 2023</i></header>
                <p>
                    Achieved a 3.7 GPA doing full time school and working part time.  Graduated with a bachelors in Computer Science and a minor in Mathematics.
                    Additionally I was in the honors college, taking honors level courses.
                </p>
            </Col>
            
        </Row>
    </>
        
    );
}

export default Education;