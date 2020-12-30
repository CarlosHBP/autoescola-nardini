import React from "react";
//import PropTypes from "prop-types";
import styled from "styled-components";

import { useScrollToTop } from "hooks/scroll";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Grid from "components/atoms/Grid";
import Card, { CardMedia, CardMediaDescription } from "components/atoms/Card";
import BreadCrumb from "components/atoms/BreadCrumb";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import AboutImage from "draws/About";
import InstImage1 from "assets/instructors/inst1.jpg";
import InstImage2 from "assets/instructors/inst2.jpg";
import InstImage3 from "assets/instructors/inst3.jpg";
import InstImage4 from "assets/instructors/inst4.jpg";
import InstImage5 from "assets/instructors/inst5.jpg";
import InstImage6 from "assets/instructors/inst6.jpg";

const ImageContainer = styled.div`
    svg {
        width: 100%;
        height: auto;
        max-width: 380px;
        color: ${(props) => props.theme.colors.primary.main};
    }
`;

const instructors = [
    { id: 1, name: "Thor", avatar: InstImage1 },
    { id: 2, name: "Mel", avatar: InstImage2 },
    { id: 3, name: "Bolinha", avatar: InstImage3 },
    { id: 4, name: "Mike", avatar: InstImage4 },
    { id: 5, name: "Emmy", avatar: InstImage5 },
    { id: 6, name: "Bob", avatar: InstImage6 },
];

const About = () => {
    useScrollToTop();

    return (
        <>
            <Hero image={HeroImage}>
                <Heading>
                    <h1>Auto Escola Nardini</h1>
                </Heading>
                <BreadCrumb
                    items={[{ label: "Início", link: "/" }, { label: "Sobre" }]}
                />
            </Hero>
            <Section>
                <Grid md={2}>
                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eos ut, natus aut repellat tempora quia
                            placeat in labore. Iure molestiae rerum facilis,
                            possimus quas a vel quod nesciunt architecto
                            voluptate?
                        </p>
                        <p>
                            Deserunt, ex ad architecto corporis beatae deleniti
                            cumque perspiciatis voluptates quia eveniet
                            obcaecati, necessitatibus vel sequi nobis eius
                            labore temporibus aliquid laudantium adipisci libero
                            eos. Veniam nulla impedit blanditiis. Iusto.
                        </p>
                        <p>
                            Distinctio hic deserunt cumque neque facere suscipit
                            officia voluptatibus praesentium, sunt
                            exercitationem quaerat repellat! Repellat voluptates
                            laboriosam quia ratione fugiat veniam reprehenderit
                            amet! Facilis dignissimos adipisci, soluta fugiat
                            nam quidem?
                        </p>
                        <ul>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </li>
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Voluptas dolorem sint ad similique ipsum.
                            Ipsam fuga praesentium commodi? Suscipit officiis,
                            debitis a veritatis qui eveniet recusandae incidunt?
                            Veritatis, consectetur dolores.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Sint excepturi cum itaque ut cupiditate. Est,
                            sunt odio perspiciatis cupiditate officiis facilis,
                            delectus iste esse perferendis, deleniti ratione
                            neque obcaecati ullam.
                        </p>
                    </div>
                    <div>
                        <h4>Visão</h4>
                        <p>
                            Iure enim eaque perspiciatis voluptas minus id
                            quibusdam laborum iste! Eos fuga, velit non aliquam
                            vitae ducimus. Corporis pariatur natus non rerum a
                            eum expedita error eius, architecto eveniet quas!
                        </p>
                    </div>
                </Grid>
            </Section>
            <Section>
                <Heading>
                    <h2>Conheça nossos professores</h2>
                </Heading>
                <Grid sm={2} md={3} lg={4}>
                    {instructors.map((instructor) => (
                        <Card key={instructor.id}>
                            <CardMedia image={instructor.avatar}>
                                <CardMediaDescription>
                                    <h5>{instructor.name}</h5>
                                </CardMediaDescription>
                            </CardMedia>
                        </Card>
                    ))}
                </Grid>
            </Section>
            <Footer />
        </>
    );
};

//About.defaultProps = {};

//About.propTypes = {};

export default About;
