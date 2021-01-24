import React, { useState } from "react";
import "./App.css";
import {
  Typography,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Grid,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@material-ui/core";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { ArrowUpward, ArrowDownward, Edit } from "@material-ui/icons";
const useStyles = makeStyles(() =>
  createStyles({
    card: {
      padding: 20,
    },
    divider: {
      marginLeft: -20,
      marginRight: -20,
      marginTop: 20,
      marginBottom: 20,
    },
    bottomSection: { width: "50%" },
    flexCenter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    madeBy: {
      margin: 10,
    },
    darkMode: {
      marginLeft: 10,
      marginTop: 10,
    },
    planksNote: { textAlign: "center" },
  })
);

function InputDialog({
  repeaterCount,
  setRepeaterCount,
  isOpen,
  setIsOpen,
}: {
  repeaterCount: number;
  setRepeaterCount: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const handleClose = () => setIsOpen(false);

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Enter number</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="number"
          name="repeater number"
          label="Repeater Number"
          placeholder="5"
          value={repeaterCount}
          type="number"
          onChange={(e) => setRepeaterCount(parseInt(e.target.value))}
        ></TextField>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}

function App() {
  const [repeaterCount, setRepeaterCount] = useState(1);
  const [dialogOpen, setDialogOpen] = useState(false);
  const classes = useStyles();

  return (
    <Container>
      <div className="App">
        <Card className={classes.card}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12} className={classes.flexCenter}>
              <Typography variant="body1">
                <Typography variant="h5">The Repeater Calculator</Typography>
              </Typography>
            </Grid>
            <Grid item sm={3} xs={6} className={classes.flexCenter}>
              <Typography variant="body1">
                {repeaterCount * 1} repeater{repeaterCount > 1 ? "s" : ""}
              </Typography>
            </Grid>
            <Grid item sm={3} xs={6} className={classes.flexCenter}>
              <ButtonGroup variant="contained">
                <Button onClick={() => addCount(1)}>
                  <ArrowUpward />
                </Button>
                <Button onClick={() => addCount(-1)}>
                  <ArrowDownward />
                </Button>
                <Button onClick={() => setDialogOpen(true)}>
                  <Edit />
                </Button>
              </ButtonGroup>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Grid container spacing={2}>
            <Grid item className={classes.bottomSection}>
              <Typography variant="body1">Final ingredients</Typography>
              <Typography variant="body1">
                {prettyStacks(repeaterCount * 3)} stone
              </Typography>
              <Typography variant="body1">
                {prettyStacks(repeaterCount * 2)} redstone torches
              </Typography>
              <Typography variant="body1">
                {prettyStacks(repeaterCount * 1)} redstone dust
              </Typography>
            </Grid>
            <Grid item className={classes.bottomSection}>
              <Typography variant="body1">Raw ingredients</Typography>
              <Typography variant="body1">
                {prettyStacks(repeaterCount * 3)} stone
              </Typography>
              <Typography variant="body1">
                {prettyStacks(Math.ceil(repeaterCount / 2) * 2)} wooden planks*
              </Typography>
              <Typography variant="body1">
                {prettyStacks(repeaterCount * 3)} redstone dust
              </Typography>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          <Typography variant="body1" className={classes.planksNote}>
            *wooden planks are rounded up
          </Typography>
        </Card>
        <Typography variant="body1" className={classes.madeBy}>
          Made by Honbra <br /> Special thanks to Tokfrans03 for the item
          displays and StayWithMeSenpai for the rounding.
        </Typography>
        <InputDialog
          repeaterCount={repeaterCount}
          setRepeaterCount={setRepeaterCount}
          isOpen={dialogOpen}
          setIsOpen={setDialogOpen}
        />
      </div>
    </Container>
  );

  function addCount(i: number) {
    if (repeaterCount + i > 0) setRepeaterCount(repeaterCount + i);
  }

  function prettyStacks(i: number) {
    // thanks Tokfrans03
    return `${Math.floor(i / 64)} x64 + ${i % 64}`;
  }
}

export default App;
