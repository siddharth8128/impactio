import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Ngoactivitydetail from "./ngoactivitydetail";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import Tooltip from '@mui/material/Tooltip';

function createData(name, contributors, funds, location, description) {
  return { name, contributors, funds, location, description };
}
//for funds
function createfunds(name, funds) {
  return { name, funds };
}
//for volunteer

function createvol(name, email, mobile) {
  return { name, email, mobile };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const rowsf = [
  createfunds("Frozen yoghurt", 159),
  createfunds("Ice cream sandwich", 237),
  createfunds("Eclair", 262),
  createfunds("Cupcake", 305),
  createfunds("Gingerbread", 35),
  createfunds("Total"),
];

const rowsv = [
  createvol("Frozen yoghurt", 159,3),
  createvol("Ice cream sandwich", 237,4),
  createvol("Eclair", 262,3),
  createvol("Cupcake", 305,3),
  createvol("Gingerbread", 35,2),
  
];
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Ngoactivities() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [opendailogdel, setOpendailogdel] = React.useState(false);

  const handleClickOpendailog = () => {
    setOpendailogdel(true);
  };

  const handleClosedailog = () => {
    setOpendailogdel(false);
  };

  const [opendailogpg, setOpendailogpg] = React.useState(false);

  const handleopenpg = () => {
    setOpendailogpg(true);
  };

  const handleclosepg = () => {
    setOpendailogpg(false);
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={5}>
          <Button
            variant="outlined"
            onClick={handleClickOpen}
            sx={{ marginBottom: "", marginLeft: "30px" }}
          >
            Add Activity
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1 style={{ fontFamily: "cursive", marginRight: "40%" }}>
            NGO Activities
          </h1>
        </Grid>
      </Grid>

      <React.Fragment>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar sx={{ position: "relative" }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                New Activity
              </Typography>
              <Button autoFocus color="inherit" onClick={handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Ngoactivitydetail />
        </Dialog>
      </React.Fragment>
      <div style={{display:"flex",justifyContent:"center"}}>

      
      <TableContainer component={Paper}sx={{ width:"80%" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Contributors</TableCell>
              <TableCell align="right">Funds</TableCell>
              <TableCell align="right">Location</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.contributors}</TableCell>
                <TableCell align="right">{row.funds}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">
                  <React.Fragment>
                    <Button
                      onClick={() => {
                        handleopenpg();
                      }}
                    >
                      <Tooltip title="Activity progress">
                      <DonutLargeIcon />
                      </Tooltip>
                    </Button>
                    <Dialog
                      fullScreen
                      open={opendailogpg}
                      onClose={handleclosepg}
                      TransitionComponent={Transition}
                    >
                      <AppBar sx={{ position: "relative" }}>
                        <Toolbar>
                          <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleclosepg}
                            aria-label="close"
                          >
                            <CloseIcon />
                          </IconButton>
                          <Typography
                            sx={{ ml: 2, flex: 1 }}
                            variant="h6"
                            component="div"
                          >
                            Activity Progress
                          </Typography>
                          <Button
                            autoFocus
                            color="inherit"
                            onClick={handleclosepg}
                          >
                            save
                          </Button>
                        </Toolbar>
                      </AppBar>

                      <Box sx={{ width: "100%", typography: "body1" }}>
                        <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                            <TabList
                              onChange={handleChange}
                              aria-label="lab API tabs example"
                            >
                              <Tab label="Volunteers" value="1" />
                              <Tab label="Funds" value="2" />
                            </TabList>
                          </Box>
                          <TabPanel value="1">
                          <TableContainer
                              component={Paper}
                              sx={{ width: "50%" }}
                            >
                              <Table aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell sx={{ padding: "16px 24px" }}>
                                      Name
                                    </TableCell>

                                    <TableCell sx={{ padding: "16px 24px" }}>
                                      Mobile
                                    </TableCell>
                                    <TableCell sx={{ padding: "16px 24px" }}>
                                      Email
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rowsv.map((row) => (
                                    <TableRow
                                      key={row.name}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell
                                        sx={{ padding: "16px 24px" }}
                                        component="th"
                                        scope="row"
                                      >
                                        {row.name}
                                      </TableCell>
                                      <TableCell sx={{ padding: "16px 24px" }}>
                                        {row.mobile}
                                      </TableCell>
                                      <TableCell sx={{ padding: "16px 24px" }}>
                                        {row.email}
                                      </TableCell>
                                      <Button variant="outlined">View Details</Button>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>{" "}
                          </TabPanel>
                          <TabPanel value="2">
                            <TableContainer
                              component={Paper}
                              sx={{ width: "50%" }}
                            >
                              <Table aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell sx={{ padding: "16px 24px" }}>
                                      Name
                                    </TableCell>

                                    <TableCell sx={{ padding: "16px 24px" }}>
                                      Funds
                                    </TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {rowsf.map((row) => (
                                    <TableRow
                                      key={row.name}
                                      sx={{
                                        "&:last-child td, &:last-child th": {
                                          border: 0,
                                        },
                                      }}
                                    >
                                      <TableCell
                                        sx={{ padding: "16px 24px" }}
                                        component="th"
                                        scope="row"
                                      >
                                        {row.name}
                                      </TableCell>
                                      <TableCell sx={{ padding: "16px 24px" }}>
                                        {row.funds}
                                      </TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>{" "}
                          </TabPanel>
                        </TabContext>
                      </Box>
                    </Dialog>
                  </React.Fragment>

                  <Button
                    onClick={() => {
                      handleClickOpen();
                    }}
                  >
                    <Tooltip title="Edit">
                    <ModeEditIcon  />
                    </Tooltip>
                  </Button>
                  <Button
                    onClick={() => {
                      handleClickOpendailog();
                    }}
                    
                  >
                    <Tooltip title="Delete">
                    <DeleteIcon />
                    </Tooltip>
                  </Button>

                  <React.Fragment>
                    <Dialog
                      open={opendailogdel}
                      onClose={handleClosedailog}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      BackdropProps={{
                        style: {
                          backgroundColor: "transparent",
                          backdropFilter: "blur(1px)",
                        },
                      }}
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"Confirm Delete?"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Confirm Delete
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClosedailog}>Disagree</Button>
                        <Button onClick={handleClosedailog} autoFocus>
                          Agree
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </React.Fragment>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  );
}

export default Ngoactivities;
