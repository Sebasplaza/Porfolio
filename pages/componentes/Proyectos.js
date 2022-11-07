import styles from "../../styles/Proyectos.module.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { proyectos2 } from "./json_de_skills";
import Proyectos_card from "./Proyectos_card";
import Proyectos_card2 from "./Proyectos_card2";
import { useState } from "react";
const Proyectos = () => {
  const [proyectos, setProyectos] = useState([
    { id: "html", img: "https://cdn-icons-png.flaticon.com/512/174/174854.png", info: "Target Media" },
    {
      id: "js",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
      info: "lorem",
    },
    { id: "bootstrap", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png", info: "lorem" },
    { ids: "css", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png", info: "" },
    { ids: "react", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png", info: "lorem" },
    { ids: "Figma", img: "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png", info: "lorem" },
  ]);

  return (
    <>
      <Container fluid>
        <Row className={`${styles.fondo} d-flex `}>
          <Col className={`${styles.contenedor}  `}>
            <span className={`${styles.titulo}  justify-content-center`}>Proyectos</span>
          </Col>
        </Row>
        <Row className={`${styles.fondo} d-flex justify-content-center `}>
          {proyectos.map(({ img, id, info, diagonal }, i) => (
            <>
              <Col lg={4} md={12} sm={12} xs={12} className={` d-flex justify-content-center `}>
                <Row className={`d-flex justify-content-center p-5`}>
                  <img src={`${img}`} alt={`${id}`} className={`${styles.card_imagen} img-fluid `} />
                  <button className="nes-btn is-warning ">
                    <p className={styles.botonTitulo}>Ver Proyecto</p>
                  </button>
                </Row>
              </Col>
            </>
          ))}
        </Row>
      </Container>

      <Container fluid>
        <Row className={`${styles.fondo} d-flex `}>
          <Col className={`${styles.contenedor}  `}>
            <span className={`${styles.titulo}  justify-content-center`}>Proyectos</span>
          </Col>
        </Row>
        <Row className={`${styles.fondo} d-flex justify-content-center `}>
          {proyectos.map((i) => (
            <>
              <Proyectos_card key={i.id} img={i.img} info={i.info}></Proyectos_card>
            </>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Proyectos;
