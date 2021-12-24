import React from "react";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import faker from "faker";

import Product from "./Product/Product";
import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();
  const [data, setData] = useState({});

  const handleFetch = async () => {
    const response = await fetch(`https://dog.ceo/api/breeds/image/random/48`, {
      method: "GET",
    });

    const data = await response.json();
    setData(data.message);
    console.log(data);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  const products = [
    {
      id: "0",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[0]}`,
    },
    {
      id: "1",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[1]}`,
    },
    {
      id: "2",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[2]}`,
    },
    {
      id: "3",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[3]}`,
    },
    {
      id: "4",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[4]}`,
    },
    {
      id: "5",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[5]}`,
    },
    {
      id: "6",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[6]}`,
    },
    {
      id: "7",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[7]}`,
    },
    {
      id: "8",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[8]}`,
    },
    {
      id: "9",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[9]}`,
    },
    {
      id: "10",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[10]}`,
    },
    {
      id: "11",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[11]}`,
    },
    {
      id: "12",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[12]}`,
    },
    {
      id: "13",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[13]}`,
    },
    {
      id: "14",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[14]}`,
    },
    {
      id: "15",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[15]}`,
    },
    {
      id: "16",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[16]}`,
    },
    {
      id: "17",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[17]}`,
    },
    {
      id: "18",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[18]}`,
    },
    {
      id: "19",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[19]}`,
    },
    {
      id: "20",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[20]}`,
    },
    {
      id: "21",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[21]}`,
    },
    {
      id: "22",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[22]}`,
    },
    {
      id: "23",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[23]}`,
    },
    {
      id: "24",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[24]}`,
    },
    {
      id: "25",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[25]}`,
    },
    {
      id: "26",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[26]}`,
    },
    {
      id: "27",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[27]}`,
    },
    {
      id: "28",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[28]}`,
    },
    {
      id: "29",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[29]}`,
    },
    {
      id: "30",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[30]}`,
    },
    {
      id: "31",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[31]}`,
    },
    {
      id: "32",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[32]}`,
    },
    {
      id: "33",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[33]}`,
    },
    {
      id: "34",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[34]}`,
    },
    {
      id: "35",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[35]}`,
    },
    {
      id: "36",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[36]}`,
    },
    {
      id: "37",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[37]}`,
    },
    {
      id: "38",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[38]}`,
    },
    {
      id: "39",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[39]}`,
    },
    {
      id: "40",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[40]}`,
    },
    {
      id: "41",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[41]}`,
    },
    {
      id: "42",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[42]}`,
    },
    {
      id: "43",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[43]}`,
    },
    {
      id: "44",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[44]}`,
    },
    {
      id: "45",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[45]}`,
    },
    {
      id: "46",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[46]}`,
    },
    {
      id: "47",
      name: `${faker.fake("{{animal.dog}}")}`,
      description: `${faker.fake("{{commerce.productDescription}}")}`,
      price: `${faker.fake("{{commerce.price}}")}`,
      image: `${data[47]}`,
    },
  ];

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
