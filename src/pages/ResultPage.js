import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultField from '../components/ResultField';
import Results from '../components/Results';
const ResultPage = ({ income, goBack, tax }) => {
  return (
    <Container>
      <Row>
        <Col>
          <ResultField income={income} goBack={goBack} />
        </Col>
        <Col>
          <Results tax={tax} income={income} />
        </Col>
      </Row>
    </Container>
  );
};

export default ResultPage;
