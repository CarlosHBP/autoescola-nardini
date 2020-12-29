import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";

const ImageContainer = styled.div`
    svg {
        width: 100%;
        height: auto;
        max-width: 380px;
        color: ${(props) => props.theme.colors.primary.main};
    }
`;

const About = () => (
    <>
        <Hero image={HeroImage}>
            <Heading>
                <h1>Auto Escola Nardini</h1>
            </Heading>
        </Hero>
        <Section>
            <Grid md={2}>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Eos ut, natus aut repellat tempora quia placeat in
                        labore. Iure molestiae rerum facilis, possimus quas a
                        vel quod nesciunt architecto voluptate?
                    </p>
                    <p>
                        Deserunt, ex ad architecto corporis beatae deleniti
                        cumque perspiciatis voluptates quia eveniet obcaecati,
                        necessitatibus vel sequi nobis eius labore temporibus
                        aliquid laudantium adipisci libero eos. Veniam nulla
                        impedit blanditiis. Iusto.
                    </p>
                    <p>
                        Distinctio hic deserunt cumque neque facere suscipit
                        officia voluptatibus praesentium, sunt exercitationem
                        quaerat repellat! Repellat voluptates laboriosam quia
                        ratione fugiat veniam reprehenderit amet! Facilis
                        dignissimos adipisci, soluta fugiat nam quidem?
                    </p>
                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </li>
                    </ul>
                </div>
                <div>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Voluptas dolorem sint ad similique ipsum. Ipsam
                        fuga praesentium commodi? Suscipit officiis, debitis a
                        veritatis qui eveniet recusandae incidunt? Veritatis,
                        consectetur dolores.
                    </p>
                    <center>
                        <ImageContainer>
                            <AboutImage />
                        </ImageContainer>
                    </center>
                </div>
            </Grid>
        </Section>
        <Section inverse>
            <Grid md={2}>
                <div>
                    <h4>Missão</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint excepturi cum itaque ut cupiditate. Est, sunt odio
                        perspiciatis cupiditate officiis facilis, delectus iste
                        esse perferendis, deleniti ratione neque obcaecati
                        ullam.
                    </p>
                </div>
                <div>
                    <h4>Visão</h4>
                    <p>
                        Iure enim eaque perspiciatis voluptas minus id quibusdam
                        laborum iste! Eos fuga, velit non aliquam vitae ducimus.
                        Corporis pariatur natus non rerum a eum expedita error
                        eius, architecto eveniet quas!
                    </p>
                </div>
            </Grid>
        </Section>
        <Section>
            <Heading>
                <h2>Conheça nossos professores</h2>
            </Heading>
        </Section>
        <Footer />
    </>
);

About.defaultProps = {};

About.propTypes = {};

export default About;
