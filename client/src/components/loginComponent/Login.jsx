import React from 'react';
import { Link as RouterLink, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Login({ setLogin, login, logedInUser, setLogedInUser, setLoginErrMsg, loginErrMsg, setLoginVisible, loginVisible }) {
  const classes = useStyles();
  let history = useHistory();

  const LoginUser = () => {
    axios.post("/users/login", login).then(res => {
      console.log(res.data)
      setLogedInUser({ firstName: res.data[0].firstName, lastName: res.data[0].lastName });
      history.push("/welcomepage")

    }).catch(err => {
      setLoginErrMsg(err.response.data.message);
      setLoginVisible(true);


      setTimeout(() => {
        setLoginErrMsg("");
        setLoginVisible(false);
      }, 2000)

    })
  }


  return (
    <Container component="main" maxWidth="xs">
      <AlertDisplay loginErrMsg={loginErrMsg} loginVisible={loginVisible} />
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            onChange={e => setLogin({ ...login, email: e.target.value })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={e => setLogin({ ...login, passWord: e.target.value })}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />


          <Button
            onClick={LoginUser}
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            login
            {/* <RouterLink to="/welcomepage">Login</RouterLink> */}

          </Button>


          <Grid container>
            <Grid item>
              <RouterLink to="/signup">
                {"Don't have an account? Sign Up"}
              </RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}


