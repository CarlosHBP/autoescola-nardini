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
        slang: "primeira-habilitacao-carro-e-moto",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 2,
        image: ServImage02,
        title: "1ª Habilitação Carro",
        slang: "primeira-habilitacao-carro",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 3,
        image: ServImage03,
        title: "1ª Habilitação Moto",
        slang: "primeira-habilitacao-moto",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 4,
        image: ServImage04,
        title: "Mudança de Categoria Caminhão",
        slang: "mudanca-de-categoria-caminhao",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id: 5,
        image: ServImage05,
        title: "Aulas Avulsas",
        slang: "aulas-avulsas",
        summary: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

export const useProducts = () => {
    return products;
};

export const useProduct = ({ slang }) => {
    return products.find((p) => p.slang === slang);
};
