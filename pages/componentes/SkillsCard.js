import Layout from "./Layout";
import styles from "../../styles/Skilss.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import { desing, ux, front } from "./json_de_skills";
const SkillsCards = () => {
  useEffect;
  return (
    <>
      <Row className="d-flex align-items-center justify-content-center ">
        <Col lg={6} md={12} sm={12} xs={12}>
          <Row className=" nes-container is-rounded is-dark  ">
            <p className={`${styles.subTitulo} text-white text-center`}>DESING</p>
            {desing.map(({ img, id }, i) => (
              <Col lg={4} md={3} sm={6} xs={6} className={`d-flex align-items-center justify-content-center mt-5 `}>
                <img src={`${img}`} alt={`${id}`} className={`${styles.card_imagen} img-fluid `} />
              </Col>
            ))}
          </Row>
        </Col>

        <Col lg={6} md={12} sm={12} xs={12} className="d-flex align-items-center justify-content-center ">
          <Row className=" nes-container is-rounded is-dark ">
            <p className={`${styles.subTitulo} text-white text-center`}>front</p>
            {front.map(({ img, id }, i) => (
              <Col lg={4} md={3} sm={6} xs={6} className={`d-flex align-items-center justify-content-center mt-5 `}>
                <img src={`${img}`} alt={`${id}`} className={`${styles.card_imagen} img-fluid `} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default SkillsCards;
