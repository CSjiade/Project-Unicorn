import { makeStyles } from '@material-ui/core';
import image from "./bg2.jpg"

const psStyle = makeStyles((theme) => ({
  productRoot: {
    padding: '10px',
    // minHeight: '100vh',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
    background: '#131313',
    maxWidth: '100%',
    paddingBottom: '100px',
    // background: theme.palette.primary.light,
    // flexGrow: 1,
    // background-size: cover;
    // background-color: grey;
    // background-blend-mode: multiply;
    // backgroundImage:`url(${image})`, backgroundSize:"contain"
    backgroundSize: 'cover',
    backgroundColor: 'grey',
    backgroundBlendMode: 'multiply',
    backgroundPosition:"centre",
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    // width: '100vw',
    // height: '100vh'
  },
  sectionHeader: {
    padding: '10px',
    color:"#FFD700"
  },
  sectionFooter: {
    color:"#FFFFFF",
    padding: '10px',
  }

}));

export default psStyle;
