import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <span>Copyright &copy; Shimiyon</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
