import * as React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid, Paper } from "@mui/material";

function Adminlogin() {
  // const navigate = useNavigate();
  const [data, setdata] = React.useState({
    username: "",
    password: "",
  });

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  let loginstyle = {
    padding: "7px",
    width:"100%"
  };

  return (
    <center>
      <Paper sx = {{padding:10, background:"",borderRadius:10,width:"50%" , height:"100%", boxShadow:'10px 10px 20px'}}>

      <h1 style={{ fontFamily: "cursive" }}>Admin Login</h1>
      <br />

      <Grid container justifyContent="center">
        <div>
          <Grid item xs={12} sm={12} md={12} key={0} >
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              type="text"
              name="username"
              onChange={handlechange}
              style={loginstyle}
              
              />
          </Grid>

          <br />
          <br />
          <Grid item xs={12} sm={12} md={12} key={1} style={loginstyle}>
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="text"
              name="password"
              onChange={handlechange}
              
              
              />
          </Grid>
          <br />
          <br />
          <Button
            variant="outlined"
            onClick={() => {
              console.log({ data });
            }}
            >
            Submit
          </Button>
        </div>
      </Grid>
      <br/>
      {/* <p>
            Don't have account to register{" "}
            <a
              onClick={() => navigate("/ngo/register")}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Click here!
            </a>
          </p> */}
            </Paper>
    </center>
  );
}
export default Adminlogin;