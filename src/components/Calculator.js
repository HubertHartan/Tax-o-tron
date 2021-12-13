import React from 'react';
import {
  Form,
  InputGroup,
  FormControl,
  Button,
  Row,
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Calculator = ({ handleAmount, handleSubmit }) => {
  return (
    <Container id="rightColumn">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Form.Label id="title2"> Calculate your tax</Form.Label>
        </Row>
        <Row>
          <div id="toolTipBox" />
          <Form.Label id="toolTip">
            {String.fromCharCode(9432)} Fields marked with * are mandatory
          </Form.Label>
        </Row>
        <Row>
          <Form.Label id="countryLabel">
            Select your country of residence *{' '}
          </Form.Label>
          <Form.Select id="countrySelect">
            <option>Australia</option>
            <option>...</option>
          </Form.Select>
        </Row>
        <Row>
          <Form.Label id="yearLabel">Select an income year *</Form.Label>
          <Form.Select id="yearSelect">
            <option>2020-2021</option>
            <option>...</option>
          </Form.Select>
        </Row>
        <Row>
          <Form.Label id="incomeLabel">
            Enter your total taxable income for the income year *
          </Form.Label>
          <InputGroup id="incomeInput">
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl
              placeholder="Amount"
              type="text"
              onChange={handleAmount}
            />
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup>
        </Row>
        <Row>
          <Button type="submit" id="calcButton">
            Calculate
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default Calculator;
