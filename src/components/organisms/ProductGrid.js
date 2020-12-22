import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Heading from "components/atoms/Heading";
import Button from "components/atoms/Button";
import Grid from "components/atoms/Grid";
import Card, { CardMedia, CardBody } from "components/atoms/Card";

const Toolbar = styled.div`
    margin-top: 40px;
    text-align: center;
`;

const ProductGrid = ({ products }) => {
    const [showAll, setShowAll] = useState(false);
    const filteredProducts = showAll ? products : products.slice(0, 3);

    return (
        <Grid>
            <Grid md={3}>
                {filteredProducts.map((product) => (
                    <Card key={product.id}>
                        <CardMedia image={product.image} />
                        <CardBody>
                            <Heading>
                                <h6>{product.title}</h6>
                            </Heading>
                            <p>{product.summary}</p>
                            <div>
                                <Button color="primary" variant="link">
                                    Saiba mais
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                ))}
            </Grid>
            {!showAll && (
                <Toolbar>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setShowAll(true);
                        }}
                    >
                        lista completa de serviços
                    </Button>
                </Toolbar>
            )}
        </Grid>
    );
};

ProductGrid.defaultProps = {
    products: [],
};

ProductGrid.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            image: PropTypes.string,
            title: PropTypes.string,
            summary: PropTypes.string,
        })
    ),
};

export default ProductGrid;
