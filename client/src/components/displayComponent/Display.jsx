import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";

export default function Display({logedInSignUpUser}) {
    return (
      <>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="sm">
            <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>
              <h1 className="displayUser">Welcome {logedInSignUpUser.firstName} {logedInSignUpUser.lastName}</h1>
            </Typography>
            <Grid container justifyContent="flex-end">
          <Grid item>
            <Link to="/">
              Go back to Login
            </Link>
          </Grid>
        </Grid>
          </Container>
        </React.Fragment>
  
      </>
    );
  

}