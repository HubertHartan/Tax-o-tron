import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import Calculator from '../components/Calculator';

const CalculatorPage = ({ handleAmount, handleSubmit }) => {
  return (
    <Container>
      <Row>
        <Col>
          <div id="rect" />
          <div id="circle" />
          <div id="moon" />
          <Row id="title">Tax-o-tron</Row>
          <Row id="subTitle">The free and simple online tax calculator.</Row>
        </Col>
        <Col>
          <Calculator handleAmount={handleAmount} handleSubmit={handleSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

export default CalculatorPage;
