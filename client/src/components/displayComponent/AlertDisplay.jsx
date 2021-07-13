// import React from 'react'

// function AlertDisplay({loginErrMsg}) {
//     return (
//         <div>
//            { <h1>{loginErrMsg}</h1>}
//         </div>
//     )
// }

// export default AlertDisplay

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SimpleAlerts({loginErrMsg, loginVisible}) {
  const classes = useStyles();

if (loginVisible === true){
    return (
        <div className={classes.root}>
          <Alert variant="filled" severity="error">
           {loginErrMsg}
          </Alert>
        </div>
      );
} else {
    return <div></div>
}

}
