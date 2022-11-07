import styles from "../../styles/Proyectos.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import Proyectos_card2 from "./Proyectos_card2";
const Proyectos_card = (props) => {
  return (
    <>
      <Col lg={12} md={12} sm={12} xs={12} className={` d-flex justify-content-center `}>
        <Row className={`d-flex justify-content-center p-5`}>
          <img src={`${props.img}`} alt={`${props.id}`} className={`${styles.card_imagen} img-fluid `} />
        </Row>
        <button className="nes-btn is-warning ">
          <p className={styles.botonTitulo}>Ver Proyecto</p>
        </button>
      </Col>
    </>
  );
};
export default Proyectos_card;
