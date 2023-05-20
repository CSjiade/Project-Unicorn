import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';


export const ServicesSectionStyles = makeStyles((theme) => ({
  root: {
    padding: '1px',
    display: 'grid',
    justifyItems: 'center',
    alignContent: 'center',
    background: '#FF0000',
  },
  header: {
    justifyItems: 'center',
    alignContent: 'center',
  },
  appsContainer: {
    borderWidth: '10px',
    borderRadius: '10px',
    borderStyle: 'solid',
    borderColor: 'rgba(200, 200, 200, 0.12)',
    
  },
  appCard: {
    borderWidth: '10px',
    padding: '15px',
  },
  description: {
    textAlign: 'center'
  },
  contact: {
    textAlign: 'center',
    paddingBottom: '30px',
    color:'#C0C0C0'
  }
}));

export const SectionCardStyles = makeStyles((theme) => ({
  root: {
    padding: '20px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', //16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#fff',
    height: '70px',
    width: '70px',
    padding: '15px',
    objectFit: 'contain',
  },
}));