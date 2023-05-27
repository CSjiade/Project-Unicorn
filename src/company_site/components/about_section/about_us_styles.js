import { makeStyles } from '@material-ui/core/styles';

const AboutSectionStyles = makeStyles((theme) => ({
  aboutContainer: {
    padding: '24px',
    background: '#000',
  },
  cardContainer: {
    padding: '24px',
    height: 'fit-content',
  },
  imageContainer: {
    padding: '4.5em',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    borderRadius: '24px',
    minHeight: '300px',
    [theme.breakpoints.up('md')]: {
      minHeight: '400px',
    },
  },
  textContainer: {
    height: '100%',
    display: 'grid',
    padding: '1.5em',
    justifyContent: 'centre',
    alignContent: 'centre',
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
    textAlign:"justify"
  }
}));

export default AboutSectionStyles;
