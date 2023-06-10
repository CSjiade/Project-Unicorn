import { makeStyles } from '@material-ui/core/styles';

const AboutSectionStyles = makeStyles((theme) => ({
  aboutContainer: {
    paddingTop: '20px',
    paddingLeft: '10px',
    paddingRight: '10px',
    background: '#000',
    
  },
  cardContainer: {
    paddingBottom: '20px',
    height: 'fit-content',
  },
  imageContainer: {
  
    padding: '4.5em',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    // borderRadius: '24px',
    minHeight: '200px',
    [theme.breakpoints.up('md')]: {
      minHeight: '400px',
    },
  },
  textContainer: {
    height: '100%',
    display: 'grid',
    padding: '1em',
    justifyContent: 'center',
    alignContent: 'center',
  },
  header: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color:'#FFD700' 
  },
  subHeader: {
    fontWeight: 'bold',
  },
  bodyText: {
    textAlign:"left",  
    wordSpacing:"-1px",
  }
}));

export default AboutSectionStyles;
