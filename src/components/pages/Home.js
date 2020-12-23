import React from "react";
//import PropTypes from "prop-types";
import { FaCar, FaKey, FaMapMarkerAlt, FaAccessibleIcon } from "react-icons/fa";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Feature from "components/atoms/Feature";
import Section from "components/molecules/Section";
import ProductGrid from "components/organisms/ProductGrid";
import Footer from "components/organisms/Footer";
import Accordion, { AccordionGroup } from "components/atoms/Accordion";

import HeroImage from "assets/hero.jpg";
import AboutVideo from "assets/about.mp4";
import ServImage01 from "assets/serv-01.jpg";
import ServImage02 from "assets/serv-02.jpg";
import ServImage03 from "assets/serv-03.jpg";
import ServImage04 from "assets/serv-04.jpg";
import ServImage05 from "assets/serv-05.jpg";

const products = [
    {
        id: 1,
        image: ServImage01,
        title: "1ª Habilitação Carro e Moto",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        image: ServImage02,
        title: "1ª Habilitação Carro",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        image: ServImage03,
        title: "1ª Habilitação Moto",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        image: ServImage04,
        title: "Mudança de Categoria Caminhão",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 5,
        image: ServImage05,
        title: "Aulas Avulsas",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const Home = () => (
    <>
        <Hero image={HeroImage}>
            <Heading>
                <h1>
                    Ganhe sua <strong>liberdade</strong>
                    <br /> para ir e vir
                </h1>
            </Heading>
            <ul>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
                <li>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </li>
            </ul>
            <Button color="primary" variant="outlined">
                Matricule-se agora
            </Button>
        </Hero>
        <Section>
            <Grid sm={2} md={4}>
                <Feature icon={<FaCar />} title="Maior e melhor frota">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </Feature>
                <Feature icon={<FaKey />} title="Habilitação mais rápida">
                    <p>Lorem ipsum.</p>
                </Feature>
                <Feature
                    icon={<FaMapMarkerAlt />}
                    title="Excelente localização"
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </Feature>
                <Feature icon={<FaAccessibleIcon />} title="Acessibilidade">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </Feature>
            </Grid>
        </Section>
        <Section inverse>
            <Heading>
                <h2>Conheça nossos serviços</h2>
            </Heading>
            <ProductGrid products={products} />
        </Section>
        <Section>
            <Grid md={2}>
                <div>
                    <Heading>
                        <h2>Nardini Auto Escola</h2>
                    </Heading>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Beatae voluptate omnis voluptatem nulla vel earum
                        molestiae obcaecati reprehenderit in doloremque. At
                        veniam earum reprehenderit iusto nisi optio a labore
                        cupiditate.
                    </p>
                    <Button color="primary">Saiba mais</Button>
                </div>
                <div>
                    <video src={AboutVideo} width="100%" autoPlay loop muted />
                </div>
            </Grid>
        </Section>
        <Section inverse>
            <Heading>
                <h2>Dúvidas Recorrentes</h2>
            </Heading>
            <AccordionGroup>
                <Accordion title="Como eu renovo minha CNH?">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odio nostrum, tenetur illum sapiente porro qui alias aliquid
                    nisi deleniti repudiandae ab similique consectetur eveniet,
                    saepe aut debitis. Veritatis, magnam deleniti!
                </Accordion>
                <Accordion title="Como faço a mudança de categoria?">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odio nostrum, tenetur illum sapiente porro qui alias aliquid
                    nisi deleniti repudiandae ab similique consectetur eveniet,
                    saepe aut debitis. Veritatis, magnam deleniti!
                </Accordion>
                <Accordion title="Fui multado, e agora?">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Odio nostrum, tenetur illum sapiente porro qui alias aliquid
                    nisi deleniti repudiandae ab similique consectetur eveniet,
                    saepe aut debitis. Veritatis, magnam deleniti!
                </Accordion>
            </AccordionGroup>
        </Section>
        <Footer />
    </>
);

//Home.defaultProps = {};

//Home.propTypes = {};

export default Home;
