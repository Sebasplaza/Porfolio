import Layout from "./Layout";
import styles from "../../styles/Trabajos.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { galeria } from "./json_de_skills";
import Galeria from "./galeria";

const Trabajos = () => {
  return (
    <>
      <Container fluid>
        <Row className={`${styles.fondo} d-flex `}>
          <Col lg={6} sm={12} className={`${styles.contenedor}  `}>
            <span className={`${styles.titulo}  justify-content-center`}>Galeria</span>
          </Col>
        </Row>

        <Row className={` ${styles.fondo} d-flex justify-content-center `}>
          {galeria.map(({ img }, i) => (
            <Col lg={6} md={12} sm={12} xs={12} className={`d-flex justify-content-center g-0 p-0`}>
              <div className={`${styles.card_imagen} g-0 p-0`}>
                <img src={`${img}`} className={`${styles.imagen} img-fluid `} />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};
export default Trabajos;
