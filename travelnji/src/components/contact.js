import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from '@material-ui/icons/Facebook';
import Button from '@material-ui/core/Button'
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// function Copyright() {
//   return (
//     <Typography variant="body2" color="white">
//       {"Copyright © "}
//       <Link color="inherit" href="./">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "80vh",
    
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
    "#f5be6e",
    color:"white",
    height:"260px"
    
  
  },
  web:{
    fontSize:33,
    fontFamily:'Open Sans'

  },
  face:{
    //marginBottom: theme.spacing(30),

  },
  contact:{
    marginLeft:theme.spacing(122),
  
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container
        component="main"
        className={classes.main}
        maxWidth="sm"
      ></Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1" className={classes.web}> Travelnji </Typography>
          <Typography maxWidth="sm" variant="body1" > Contact us:
        </Typography> 
        <Typography maxWidth="sm" ><CallIcon/> +962 79855000 </Typography>
        <Button  href="https://www.facebook.com/Travelinji-111049734091611/" color="inherit">
           Follow us : <FacebookIcon/> 
          </Button>
        </Container>
          </footer>
    </div>
  );
}