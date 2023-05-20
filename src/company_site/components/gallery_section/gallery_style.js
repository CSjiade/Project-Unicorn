import { makeStyles } from '@material-ui/core/styles';
import { minHeight } from '@mui/system';

const GalleryStyles = makeStyles((theme) => ({
  galleryContainer: {
    background: '#0c0c0c',
    width: '100%',
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    paddingTop:'30px',
    paddingBottom:'100px'
  },
  cardContainer: {
    padding: '20px',
  },
  sectionHeader: {
    paddingBottom:'30px',
    color:"#FFD700",

  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    padding: '24px',
    borderWidth: '1px',
    borderRadius: '10px',
    borderStyle: 'solid',
    borderColor: 'rgba(17, 17, 17, 0.12)'
  }
  // galleryButton: {},
  // heading: {
  //   marginBottom: '24px',
  //   fontWeight: '600',
  // },
  // subtitle: {
  //   marginBottom: '35px',
  //   fontSize: '18px',
  // },
}));

export default GalleryStyles;
