import React from 'react';
import { Form, InputGroup, Button, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultField = ({ income, goBack }) => {
  return (
    <Container>
      <Form>
        <Row>
          <Form.Label id="title3">Your tax results</Form.Label>
        </Row>

        <Row>
          <Form.Label id="countryLabel2">
            Select your country of residence *{' '}
          </Form.Label>
          <Form.Select id="countrySelect2">
            <option>Australia</option>
            <option>...</option>
          </Form.Select>
        </Row>
        <Row>
          <Form.Label id="yearLabel2">Select an income year *</Form.Label>
          <Form.Select id="yearSelect2">
            <option>2020-2021</option>
            <option>...</option>
          </Form.Select>
        </Row>
        <Row>
          <Form.Label id="incomeLabel2">
            Enter your total taxable income for the income year *
          </Form.Label>
          <InputGroup id="incomeInput2">
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>{income}</InputGroup.Text>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Row>
        <Row>
          <Button onClick={goBack} id="backButton">
            Go back to previous screen
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default ResultField;
