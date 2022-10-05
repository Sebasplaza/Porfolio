import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
// Componentes
import Header from "./componentes/Header";
import Layout from "./componentes/Layout";
import Inicio from "./componentes/Inicio";
import Skills from "./componentes/Skills";
import Trabajos from "./componentes/Trabajos";
import Contacto from "./componentes/Contacto";
// Estilos
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Layout>
        <Inicio />
        <Skills />
        <Trabajos />
        <Contacto />
        {/* <Link href="/componentes/Inicio">ir a inicio</Link>
        <br />
        <Link href="/componentes/Skills">Skilss</Link>
        <br />
        <Link href="/componentes/Trabajos">trabajos</Link>
        <br />
        <Link href="/componentes/botonContacto">boton</Link>
        <br />
        <Link href="/componentes/Contacto">CONTACTO</Link> */}
      </Layout>
    </>
  );
}
