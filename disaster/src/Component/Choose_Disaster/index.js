import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Modal from "@material-ui/core/Modal";
import Disaster from "src/Component/Notification";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./Style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "white",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();
  const [modalContent, setModalContent] = React.useState(<div></div>);
  const [modalState, setModalState] = React.useState(false);

  const openModal = (disaster) => {
    console.log(disaster);
    switch (disaster) {
      case "HandWashing":
        setModalContent(<Disaster />);
        break;
      case "Earthquake":
        setModalContent(<div>hejri</div>);
        break;
      case "Landslide":
        setModalContent(<div>hejri</div>);
        break;
      default:
        alert("Not found..");
        return;
    }
    setModalState(true);
  };

  return (
    <React.Fragment>
      <Grid container direction="row" justify="center">
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("HandWashing")}
            >
              <Typography variant="subtitle2">HAND WASHING</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Earthquake")}
            >
              <Typography variant="subtitle2">EARTHQUAKE</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <Button
              className="chooseDisasterBtPrinc"
              variant="contained"
              color="secondary"
              onClick={() => openModal("Landslide")}
            >
              <Typography variant="subtitle2">LANDSLIDE</Typography>
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">FLOOD</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">FIRE</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">THUNDERSTORM</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">WINDSTORM</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">SNAKEBITE</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">EPIDEMIC</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">DROUGHT</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">AVALANCHE</Typography>
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="chooseDisasterBtPrinc"
            variant="contained"
            color="secondary"
            // onClick={() => setModalIsOpen(true)}
          >
            <Typography variant="subtitle2">HAILSTROM</Typography>
          </Button>
        </Grid>
      </Grid>
      <Modal open={modalState} onClose={() => setModalState(false)}>
        <Container component="main" maxWidth="md">
          <CssBaseline />
          <div className={classes.paper}>{modalContent}</div>
        </Container>
      </Modal>
    </React.Fragment>
  );
}
