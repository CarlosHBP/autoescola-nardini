import React from "react";

import Card, { CardBody, CardMedia } from "./Card";
import Section from "components/molecules/Section";
import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import PlaceholderImage from "stories/assets/card-placeholder.jpg";

const story = {
    title: "Components/Atoms/Card",
    component: Card,
    subcomponents: { CardBody, CardMedia },
};

export default story;

export const usage = () => (
    <Section inverse>
        <Card>
            <CardBody>
                <Heading>
                    <h6>Título</h6>
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <Button color="primary" variant="link">
                        Saiba mais
                    </Button>
                </div>
            </CardBody>
        </Card>
    </Section>
);

export const withMedia = () => (
    <Section inverse>
        <CardMedia image={PlaceholderImage}></CardMedia>
        <Card>
            <CardBody>
                <Heading>
                    <h6>Título</h6>
                </Heading>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div>
                    <Button color="primary" variant="link">
                        Saiba mais
                    </Button>
                </div>
            </CardBody>
        </Card>
    </Section>
);
