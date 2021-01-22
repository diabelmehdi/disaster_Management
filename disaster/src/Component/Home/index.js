import React, { useState } from "react";
import "./Style.css";
import Card2 from "src/Component/UI/Card2";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import FlightLandIcon from "@material-ui/icons/FlightLand";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import Modal from "react-modal";
import Login from "src/Component/LoginVictim/Login";
import SOS from "src/Containers/SOS";
Modal.setAppElement("#root");
function Home() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <Card2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Box pr={5} pl={5} flexDirection="row">
            <Typography align="right">Login As:</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pr={2} pl={2} display="flex" flexDirection="row-reverse">
            <Button
              className="bt"
              variant="contained"
              color="primary"
              startIcon={<FlightTakeoffIcon />}
              onClick={() => setModalIsOpen(true)}
            >
              Victim
            </Button>

            <Button
              className="bt"
              variant="contained"
              color="primary"
              //onClick={() => setModalIsOpen(true)}
              startIcon={<FlightLandIcon />}
            >
              Rescue Helper
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <Button
              className="bt3"
              variant="contained"
              color="secondary"
              href="/SOS"
              // onClick={() => setModalIsOpen(true)}
            >
              <Typography variant="h1">SOS</Typography>
            </Button>
          </Box>
        </Grid>
        <Modal
          isOpen={modalIsOpen}
          shouldCloseOnOverlayClick={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <Login />
        </Modal>

        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" m={1} p={1}>
            <FormControlLabel
              control={
                <Checkbox
                  defaultChecked
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              }
              label="Allow sharing IPaddress and your Location"
            />
          </Box>
        </Grid>
      </Grid>
    </Card2>
  );
}

export default Home;
