import Layout from "./Layout";
import styles from "../../styles/Skilss.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import SkillsCards from "./SkillsCard";
const Skills = () => {
  useEffect;
  return (
    <>
      {/* <Layout> */}
      <Container fluid className={`${styles.fondo}  `}>
        <Col lg={12} md={12} sm={12} xs={12}>
          <span className={`${styles.titulo}  justify-content-center`}>Skills</span>
        </Col>
        <SkillsCards />
      </Container>

      <div className={styles.fotter_diagonal}></div>
      {/* </Layout> */}
    </>
  );
};
export default Skills;
