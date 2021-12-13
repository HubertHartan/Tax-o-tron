import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Results = ({ tax, income }) => {
  let bracketTwo = 0;
  let bracketThree = 0;
  let bracketFour = 0;
  let bracketFive = 0;

  if (income < 18201) {
  } else if (income < 45001) {
    bracketTwo = tax;
  } else if (income < 120001) {
    bracketTwo = 5092;
    bracketThree = tax - bracketTwo;
  } else if (income < 180001) {
    bracketTwo = 5092;
    bracketThree = 24375;
    bracketFour = tax - (bracketTwo + bracketThree);
  } else {
    bracketTwo = 5092;
    bracketThree = 24375;
    bracketFour = 22200;
    bracketFive = tax - (bracketTwo + bracketThree + bracketFour);
  }
  return (
    <Container>
      <div id="rect2" />
      <div id="circle2" />
      <div id="resultTitle">Your estimated taxable income is:</div>
      <div id="incomeBox" />
      <Container id="tax">${Math.floor(tax * 100) / 100}</Container>
      <div id="breakdown">Breakdown</div>

      <div id="whiteBox1" />
      <div id="whiteBox2" />
      <div id="whiteBox3" />
      <div id="whiteBox4" />
      <div id="whiteBox5" />

      <Col>
        <Row id="bracTitle1">Tax Bracket $0-$18200</Row>
        <Row id="bracResult1">$0</Row>
      </Col>

      <Col>
        <Row id="bracTitle2">Tax Bracket $18201-$45000</Row>
        <Row id="bracResult2">${Math.floor(bracketTwo * 100) / 100}</Row>
      </Col>

      <Col>
        <Row id="bracTitle3">Tax Bracket $45001-$120000</Row>
        <Row id="bracResult3">${Math.floor(bracketThree * 100) / 100}</Row>
      </Col>

      <Col>
        <Row id="bracTitle4">Tax Bracket $120001-$180000</Row>
        <Row id="bracResult4">${Math.floor(bracketFour * 100) / 100}</Row>
      </Col>

      <Col>
        <Row id="bracTitle5">Tax Bracket $180000+</Row>
        <Row id="bracResult5">${Math.floor(bracketFive * 100) / 100}</Row>
      </Col>
    </Container>
  );
};

export default Results;
