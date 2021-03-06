import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, useHistory } from "react-router-dom";
import axios from "axios";
import AlertDisplay from '../displayComponent/AlertDisplay';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp({ setSignup, signup, setlogedInSignUpUser, setErrMsgs , errMsgs, loginVisible, setLoginVisible}) {
  
  let history = useHistory();

  const createUser = () => {
    axios.post("/users/signup", signup).then(res => {
      console.log(res.data);
      setlogedInSignUpUser({firstName : res.data.firstName, lastName: res.data.lastName})
      history.push("/welcomepage")
    }).catch(err => {
      console.log(err.response.data);
      setErrMsgs(err.response.data);
      setLoginVisible(true);

      setTimeout(()=>{
        setErrMsgs([]);
        setLoginVisible(false);
      },2000)
    });

  }

  const classes = useStyles();

  return (
        <Container component="main" maxWidth="xs">
          <AlertDisplay errMsgs={errMsgs} loginVisible={loginVisible}/>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <VpnKeyIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => setSignup({ ...signup, firstName: e.target.value })}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={e => setSignup({ ...signup, lastName: e.target.value })}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setSignup({ ...signup, email: e.target.value })}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={e => setSignup({ ...signup, passWord: e.target.value })}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            onClick={createUser}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            signup
            {/* <RouterLink to=""> Sign Up </RouterLink> */}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <RouterLink to="/">
                Already have an account? Login
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}