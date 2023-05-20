import { makeStyles } from '@material-ui/core';

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
