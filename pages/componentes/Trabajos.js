import Layout from "./Layout";
import styles from "../../styles/Trabajos.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
const Trabajos = () => {
  return (
    <>
      {/* <Layout> */}
      <Container fluid>
        <Row className={`${styles.fondo} d-flex `}>
          <Col lg={12} sm={12} className={`${styles.contenedor}  `}>
            <span className={`${styles.titulo}  justify-content-center`}>Proyectos</span>
            <Row className="d-flex align-items-center ">
              <Col lg={12} md={12} sm={12} xs={12} className={`bg-light  p-5`}>
                <p>UX/UI</p>
              </Col>
            </Row>
            <Row className="d-flex align-items-center ">
              <Col lg={6} md={12} sm={12} xs={12} className={`bg-warning  p-5`}>
                <p>WEB</p>
              </Col>
              <Col lg={6} md={12} sm={12} xs={12} className={`bg-danger  p-5`}>
                <p>DESING</p>
              </Col>
            </Row>

            <Row className="d-flex align-items-center ">
              <Col lg={4} md={12} sm={12} xs={12} className={`bg-warning   p-5`}>
                <p>DESING</p>
              </Col>

              <Col lg={4} md={12} sm={12} xs={12} className={`bg-light  p-5`}>
                <p>DESING</p>
              </Col>
              <Col lg={4} md={12} sm={12} xs={12} className={`bg-warning   p-5`}>
                <p>DESING</p>
              </Col>
            </Row>
          </Col>
          <div className={styles.fotter_diagonal}></div>
        </Row>
      </Container>
      {/* </Layout> */}
    </>
  );
};
export default Trabajos;
