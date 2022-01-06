import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/commerce.png";
import useStyles from "./styles";
import Cart from "../Cart/Cart"
import { StyledEngineProvider } from '@mui/material/styles';

const Navbar = () => {
  const classes = useStyles();

  const badge = (a) => {
    return 5;
  };

  console.log(badge());

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            <img
              src={logo}
              alt="Dogs4Lyf"
              height="80px"
              className={classes.image}
            />
            Dogs4Lyf
          </Typography>
          <div className={classes.grow} />
          <div className={classes.button}>
            <IconButton aria-label="Show cart items" color="inherit">
              <StyledEngineProvider injectFirst>
                <Cart />
              </StyledEngineProvider>
              <Badge badgeContent={1} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
