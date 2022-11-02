import Layout from "./Layout";
import styles from "../../styles/inicio.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
const Inicio = () => {
  return (
    <>
      <Container fluid className={`${styles.contenedor}  `}>
        <Row className={` d-flex  align-items-center `}>
          <Col lg={6} sm={12}>
            <motion.p
              className={`${styles.titulo} text-center`}
              initial={{ scale: 0, x: -500 }}
              animate={{ scale: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              Hola soy Sebastián Plaza
            </motion.p>

            <p className={` text-white p-2`}>
              Apasionado con las nuevas tecnologías, soy diseñador multimedial con foco en maquetación web utilizando las tecnologías como
              <span style={{ color: "#61DAFB" }}> ReactJs</span>,<span style={{ color: "#2277FF" }}> NextJS</span>,
              <span style={{ color: "#F7E018" }}> JavaScript</span>,<span style={{ color: "#E54C21" }}> Html</span>,
              <span style={{ color: "#4891C2" }}> Css</span>,<span style={{ color: "#FF61F6" }}> AdobeXD</span> y
              <span style={{ color: "#01CF80" }}> Figma</span>. Busco expandir mis conocimientos en el dia a dia para generar una mayor creatividad en mis
              proyectos tanto laborales como personales.
            </p>

            <Row>
              <Col lg={12} sm={12} className="d-flex justify-content-center">
                <motion.button
                  type="button"
                  className="nes-btn is-warning"
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                  }}
                >
                  <h3 className={styles.boton_titulo}>Contactame!</h3>
                </motion.button>
              </Col>
            </Row>
            <Row className="p-5 d-flex justify-content-center">
              <Col lg={2} md={2} sm={2} xs={2}>
                <a href="https://github.com/Sebasplaza" class="absolute" target="_blank">
                  <i className="nes-icon github is-large"></i>
                </a>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <div>
                  <a href="https://www.linkedin.com/in/plazasebastian/" class="absolute" target="_blank">
                    <i className="nes-icon linkedin is-large "></i>
                  </a>
                </div>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <i className="nes-icon gmail is-large" href="www.linkedin.com/in/plazasebastian" target="_blanck"></i>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2} p={5}>
                <a href="https://www.behance.net/sebastianplaza" class="absolute" target="_blank">
                  <i className="snes-jp-logo mt-2"></i>
                </a>
              </Col>
            </Row>
          </Col>

          <Col lg={6} sm={12}>
            <img src="https://i.imgur.com/RePAEuF.gif" alt="seba" className={styles.imagen3} />
          </Col>
        </Row>
      </Container>
      <div className={styles.fotter_diagonal}></div>
    </>
  );
};
export default Inicio;
