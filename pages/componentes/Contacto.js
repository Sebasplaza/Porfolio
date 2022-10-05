import Layout from "./Layout";
import styles from "../../styles/contacto.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";

const Contacto = () => {
  return (
    <>
      <Container fluid>
        <Row className={`${styles.contenedor} d-flex  align-items-center `}>
          <Col lg={6} sm={12} className="g-5 p-5 ">
            <img src="https://media.tenor.com/zL4m0thJK1gAAAAi/metal-slug-rebel-soldier.gif" alt="seba" className={`${styles.imagen3} d-sm-none d-md-block`} />
          </Col>
          <Col lg={6} md={12} sm={12}>
            <div className="nes-container is-dark with-title">
              <p className="title">Contacto</p>
              <p>Puedes llenas este formulario para </p>
              <p>contactarme</p>
              <div class="nes-field ">
                <form action="/send-data-here" method="post">
                  <label for="first" className="p-2">
                    First name:
                  </label>
                  <input type="text" id="dark_field" className="nes-input is-dark" placeholder="Sebastian Plaza"></input>
                  <label for="first" className="p-2">
                    Mail:
                  </label>
                  <input type="text" id="dark_field" className="nes-input is-dark" placeholder="sebastianmultimedial@gmail.com"></input>
                  <label for="textarea_field" className="p-2">
                    Mensaje
                  </label>
                  <textarea id="textarea_field" class="nes-textarea is-dark"></textarea>
                </form>
              </div>
              <Row>
                <Col lg={12} md={6} sm={6} className="d-flex justify-content-center p-3">
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
                    <h3 className={styles.boton_titulo}>Enviar!</h3>
                  </motion.button>
                </Col>
              </Row>
            </div>
            <Row>
              <Col lg={12} md={12} sm={12} className="d-flex justify-content-center ">
                <div class="nes-balloon from-left d-flex alig-item-center d-xxxl-block d-md-none">
                  <p>Tank You</p>
                </div>
              </Col>
              <Col lg={12} md={6} sm={9} className="d-flex justify-content-center ">
                <img src="https://media.tenor.com/XoRuOPGr1lwAAAAi/metal-slug-pants.gif" alt="seba" className={` d-xxxl-block d-md-none`} />
              </Col>
            </Row>
            {/* <Row className="p-5">
              <Col lg={2} md={2} sm={2} xs={2}>
                <i className="nes-icon github is-large"></i>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <i className="nes-icon linkedin is-large"></i>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2}>
                <i className="nes-icon gmail is-large"></i>
              </Col>
              <Col lg={2} md={2} sm={2} xs={2} p={5}>
                <i className="snes-jp-logo mt-2"></i>
              </Col>
            </Row> */}
          </Col>

          <div className={styles.fotter_diagonal}></div>
        </Row>
      </Container>
    </>
  );
};
export default Contacto;
