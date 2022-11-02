import styles from "../../styles/Proyectos.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { proyectos } from "./json_de_skills";
const Proyectos = () => {
  return (
    <>
      <Container fluid>
        <Row className={`${styles.fondo} d-flex `}>
          <Col className={`${styles.contenedor}  `}>
            <span className={`${styles.titulo}  justify-content-center`}>Proyectos</span>
          </Col>
        </Row>
        {proyectos.map(({ img, id, info }, i) => (
          <Row className={`${styles.fondo} `}>
            <Col lg={6} md={12} sm={12} xs={12} className={` d-flex justify-content-center p-5`}>
              <img src={`${img}`} alt={`${id}`} className={`${styles.card_imagen} img-fluid `} />
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <Row>
                <Col lg={6} md={12} sm={12} xs={12} className={` d-flex justify-content-center p-5`}>
                  <span className="text-white">{`${info}`}</span>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={12} sm={12} xs={12} className={` d-flex justify-content-center p-5`}>
                  <button className="nes-btn is-warning">
                    <p className={styles.botonTitulo}>Ver Proyecto</p>
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};
export default Proyectos;
