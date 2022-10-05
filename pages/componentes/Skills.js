import Layout from "./Layout";
import styles from "../../styles/Skilss.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
const Skills = () => {
  return (
    <>
      {/* <Layout> */}
      <Container fluid className={`${styles.fondo}  `}>
        {/* CONTENEDOR DE TODO*/}
        <Row className="d-flex align-items-center  justify-content-center ">
          <Col lg={12} md={12} sm={12} xs={12}>
            <span className={`${styles.titulo}  justify-content-center`}>Skills</span>
          </Col>
          {/* CONTENEDOR DE CARDS */}
          <Row className="d-flex align-items-center  justify-content-center ">
            {/* CARDS 1 */}
            <Col lg={4} md={12} sm={12} xs={12} className="d-flex align-items-center justify-content-center ">
              {/* CONTENEDOR DE DE FILAS */}
              <Row className=" nes-container is-rounded is-dark g-1">
                <p className={`text-white text-center`}>DESING</p>
                {/* FILA DE IMAGENES */}
                <Row>
                  {/* FILA 1 */}
                  <Col lg={4} md={12} sm={4} xs={12} className=" bg-white ">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                  {/* FILA 2 */}
                  <Col lg={4} md={12} sm={4} xs={12} className=" bg-warning ">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                  {/* FILA 3 */}
                  <Col lg={4} md={12} sm={4} xs={12} className=" bg-danger ">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                </Row>
              </Row>
            </Col>
            {/* FIN DE LACARDS */}

            {/* CARDS 1 */}
            <Col lg={4} md={12} sm={12} xs={12} className="d-flex align-items-center justify-content-center ">
              {/* CONTENEDOR DE DE FILAS */}
              <Row className=" nes-container is-rounded is-dark g-1">
                <p className={` text-white text-center`}>UX/UI</p>
                {/* FILA DE IMAGENES */}
                <Row>
                  {/* FILA 1 */}
                  <Col lg={4} md={4} sm={4} xs={12} className=" bg-white d-flex  justify-content-center ">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                  {/* FILA 2 */}
                  <Col lg={4} md={4} sm={4} xs={12} className=" bg-warning d-flex  justify-content-center ">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                  {/* FILA 3 */}
                  <Col lg={4} md={4} sm={4} xs={12} className=" bg-danger  d-flex  justify-content-center">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                </Row>
              </Row>
            </Col>
            {/* FIN DE LACARDS */}
            {/* CARDS 1 */}
            <Col lg={4} md={12} sm={12} xs={12} className="d-flex align-items-center justify-content-center ">
              {/* CONTENEDOR DE DE FILAS */}
              <Row className=" nes-container is-rounded is-dark g-1">
                <p className={` text-white text-center`}>WEB</p>
                {/* FILA DE IMAGENES */}
                <Row>
                  {/* FILA 1 */}
                  <Col lg={4} md={4} sm={4} xs={12} className=" bg-white d-flex  justify-content-center">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                  {/* FILA 2 */}
                  <Col lg={4} md={4} sm={4} xs={12} className=" bg-warning ">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                  {/* FILA 3 */}
                  <Col lg={4} md={4} sm={4} xs={12} className=" bg-danger d-flex  justify-content-center ">
                    <img
                      src="https://www.manga-news.com/public/images/series/chainsaw-man-1-kaze.jpg"
                      alt="chainsaw"
                      className={`${styles.card_imagen} img-fluid`}
                    />
                  </Col>
                </Row>
              </Row>
            </Col>
            {/* FIN DE LACARDS */}
          </Row>
          {/* FIN DECONTENEDOR DE CARDS */}
        </Row>
      </Container>
      <div className={styles.fotter_diagonal}></div>
      {/* </Layout> */}
    </>
  );
};
export default Skills;
