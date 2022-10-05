import Layout from "./Layout";
import styles from "../../styles/botonContacto.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button, Col, Container } from "react-bootstrap";
const Inicio = () => {
  return (
    <>
      <Container fluid>
        <div className={`${styles.contenedor} row d-flex bg-dark align-items-center `}>
          <Col lg={6} sm={12} p={5}>
            <div className="d-flex justify-content-center p-5">
              <motion.button
                type="button"
                className={styles.boton}
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
            </div>
          </Col>
        </div>
      </Container>
    </>
  );
};
export default Inicio;
