// import React from 'react';
// import "../../App.css"

// function Display() {
//     return (
//         <div>
//             <h2 className="displayUser">Welcome Arpita</h2>
//         </div>
//     )
// }

// export default Display

import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function SimpleContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }}>
            <h1 className="displayUser">Welcome User</h1>
        </Typography>
      </Container>
    </React.Fragment>
  );
}