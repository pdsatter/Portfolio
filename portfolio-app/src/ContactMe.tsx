import React, { useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

const ContactMe: React.FC = () => {
  const [display, setDisplay] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      setMessage('Submitting')
      setDisplay(true);

      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const params = new URLSearchParams();
    
      // Iterate over form data and append each key-value pair to URLSearchParams
      const entries = formData.entries();
      for (let pair = entries.next(); !pair.done; pair = entries.next()) {
        const [key, value] = pair.value;
        params.append(key, value as string);
      }
    
      try {
        await fetch(
          'https://docs.google.com/forms/d/1rSI2h-h9CAE_aGdG7esOUKbS_D3DXcZRCBVBbs1sCfY/formResponse?' + params.toString(),
          {
            method: 'POST',
            mode: 'no-cors', // Adjust this based on your CORS requirements
          }
        );
        setMessage('Your submission has been recieved.')
       
      } catch (error) {
        setMessage(`There was a problem with the form submission: \n${error}`)
        console.error('There was a problem with the form submission:', error);
      }
      finally {
        setTimeout(() => {
            setDisplay(false);
          }, 3000);
      }
  };

  const contactForm = () => {
    return (
      <Form  name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSdBZNwf2oWJIJJMTPSaUNRxdmRAjQhEsDsxCvAZOUUqIofC2A/formResponse?" target="hidden_iframe" onSubmit={handleSubmit}>
        <Row>

          <Col xs={12}>
              <label htmlFor="entry.2094476171">Name:</label><br />
              <input type="text" name="entry.2094476171" id="entry.2094476171" /><br />
          </Col>

          <Col xs={12}>
              <label htmlFor="entry.9088148">Email / Phone Number:</label><br />
              <input type="text" name="entry.9088148" id="entry.9088148" /><br />
          </Col>

          <Col xs={12}>
            <label htmlFor="entry.354407219">Additional Info:</label><br />
            <textarea name="entry.354407219" id="entry.354407219" rows={10}></textarea><br />
          </Col>

          <Col xs={12}>
              <Button variant="primary" type="submit">Submit</Button>
              <a href='/'>
                <Button variant="secondary" style={{ marginLeft: '1rem' }}>Home</Button>
              </a>
          </Col>

          <Col xs={12}>
            {ContactSubmission()}
          </Col>

        </Row>
      </Form>
    )
      
  };

  const ContactSubmission = () => {
    if (!display){
      return(<></>)
    }
      
    return (
      <div>
        <p>{message}</p>
      </div>
    );
  };

  return (
    <>
      <h1>Contact Form</h1>
      {contactForm()}
    </>
  );
};

export default ContactMe;