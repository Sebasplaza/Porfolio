import styles from "../../styles/Galeria.module.css";

import { Button, Col, Container, Row } from "react-bootstrap";
import { galeria } from "./json_de_skills";
const Galeria = () => {
  return (
    <>
      <Row className={`d-flex justify-content-center p-5`}>
        {galeria.map(({ img }, i) => (
          <Col lg={6} md={12} sm={12} xs={12} className={` d-flex justify-content-center `}>
            <img src={`${img}`} className={`${styles.card_imagen} img-fluid `} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Galeria;
