import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ContactMe: React.FC = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
          const response = await fetch(
            'https://docs.google.com/forms/d/1rSI2h-h9CAE_aGdG7esOUKbS_D3DXcZRCBVBbs1sCfY/formResponse?' + params.toString(),
            {
              method: 'POST',
              mode: 'no-cors', // Adjust this based on your CORS requirements
            }
          );
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          // Handle success response here
        } catch (error) {
          console.error('There was a problem with the form submission:', error);
          // Handle error here
        }
      };

  return (
    <form name="gform" id="gform" encType="text/plain" action="https://docs.google.com/forms/d/e/1FAIpQLSdBZNwf2oWJIJJMTPSaUNRxdmRAjQhEsDsxCvAZOUUqIofC2A/formResponse?" target="hidden_iframe" onSubmit={handleSubmit}>
      <Row>
        <Col xs={3}>
            <label htmlFor="entry.2094476171">Name:</label><br />
            <input type="text" name="entry.2094476171" id="entry.2094476171" /><br />
        </Col>
        <Col xs={3}>
            <label htmlFor="entry.9088148">Email / Phone Number:</label><br />
            <input type="text" name="entry.9088148" id="entry.9088148" /><br />
        </Col>
        <Col xs={3}>
            <label htmlFor="entry.354407219">Additional Info:</label><br />
            <input type="text" name="entry.354407219" id="entry.354407219" /><br />
        </Col>
        <Col xs={3}>
            <input type="submit" value="Submit" />
        </Col>
      </Row>
    </form>
  );
};

export default ContactMe;