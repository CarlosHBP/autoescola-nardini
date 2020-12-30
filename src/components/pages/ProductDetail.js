import React from "react";
import styled from "styled-components";
import { FaIdCard, FaHome, FaScroll } from "react-icons/fa";

import ProductType from "types/ProductType";

import Hero from "components/molecules/Hero";
import Heading from "components/atoms/Heading";
import Section from "components/molecules/Section";
import Callout, {
    CalloutBody,
    CalloutActions,
    CalloutMedia,
} from "components/atoms/Callout";
import Button from "components/atoms/Button";
import BreadCrumb from "components/atoms/BreadCrumb";
import Footer from "components/organisms/Footer";

import HeroImage from "assets/hero.jpg";
import SpeedImage from "draws/Speed";

const PinnedList = styled.ul`
    list-style: none;
    padding-left: 0;
`;

const PinnedItem = styled.li`
    display: inline-block;
    border: 1px solid ${(props) => props.theme.colors.border};
    border-radius: 4px;
    padding: 8px 16px;
    margin: 0 16px 16px 0;

    svg {
        margin-right: 8px;
        vertical-align: middle;
    }
`;

const ProductDetail = ({ product }) => (
    <>
        <Hero image={HeroImage}>
            <Heading>
                <h1>{product.title}</h1>
            </Heading>
            <BreadCrumb
                items={[
                    { label: "Início", link: "/" },
                    { label: "Serviços" },
                    { label: product.title },
                ]}
            />
        </Hero>
        <Section>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Doloribus voluptatibus quas error repudiandae nostrum non
                aliquam maxime exercitationem eum consequatur neque nisi
                laborum, quibusdam incidunt soluta sunt? Tempora, asperiores
                iste.
            </p>
            <p>
                Soluta laboriosam enim cupiditate facilis magni commodi quas.
                Fuga officiis eaque explicabo iure ipsa, enim alias ea aliquid
                aspernatur architecto dolorem eius recusandae voluptatum vero
                facilis voluptas sed labore. Veniam?
            </p>
            <p>
                Rem voluptatem placeat, sed similique ex magnam fugiat, error
                quidem ullam maxime molestiae eos. Dolorem, hic eligendi sunt
                odit, illum culpa doloribus quia iusto cumque eum, omnis officia
                delectus in.
            </p>
            <h5>Documentos necessários:</h5>
            <PinnedList>
                <PinnedItem>
                    <FaIdCard />
                    RG
                </PinnedItem>
                <PinnedItem>
                    <FaIdCard />
                    CPF
                </PinnedItem>
                <PinnedItem>
                    <FaScroll />
                    Certidão de nascimento ou casamento
                </PinnedItem>
                <PinnedItem>
                    <FaHome />
                    Comprovante de residência
                </PinnedItem>
            </PinnedList>
        </Section>
        <Section inverse>
            <Callout>
                <CalloutBody>
                    <h6>Faça sua matrícula agora mesmo</h6>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nobis praesentium officiis soluta explicabo quos
                        reprehenderit nesciunt consectetur ducimus neque
                        perferendis quia nemo suscipit quibusdam, deleniti
                        libero laudantium dolores error commodi!
                    </p>
                    <CalloutActions>
                        <Button color="primary">Matricular</Button>
                    </CalloutActions>
                </CalloutBody>
                <CalloutMedia>
                    <SpeedImage />
                </CalloutMedia>
            </Callout>
        </Section>
        <Footer />
    </>
);

ProductDetail.defaultProps = {
    product: {},
};

ProductDetail.propTypes = {
    product: ProductType,
};

export default ProductDetail;
