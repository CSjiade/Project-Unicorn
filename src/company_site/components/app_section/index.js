import React from 'react';
import { applicationsData } from './application_data';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { AppSectionStyles, AppCardStyles } from './app_section_style';
import { Grid } from '@material-ui/core';

const AppsSection = () => {
  const sectionClasses = AppSectionStyles();
  const cardClasses = AppCardStyles();
  return (
    <div id="apps" className={sectionClasses.root}>
      <Typography className={sectionClasses.header} variant="h4" component="h4">
        Our Services
      </Typography>
      <Grid container className={sectionClasses.appsContainer}>
        {applicationsData.map((app, index) => {
          return (
            <Grid
              className={sectionClasses.appCard}
              key={index}
              item
              xs={12}
              sm={6}
              md={4}
            >
              <Card className={cardClasses.root}>
                <CardHeader
                  avatar={
                    <Avatar variant="square"
                      rounded={2}
                      className={cardClasses.avatar}
                      src={app.imageSrc}
                    />
                  }
                  title={app.title}
                  titleTypographyProps={{ variant: 'h6' }}
                />
                <CardContent>{app.description}</CardContent>
                {/* <CardActions>
                  <Button
                    href={app.url}
                    target="_blank"
                    color="secondary"
                    variant="outlined"
                  >
                    View
                  </Button>
                </CardActions> */}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Typography className={sectionClasses.description} component="h6">
      </Typography>
      <Typography className={sectionClasses.contact} variant='h6' color='secondary' style={{ wordWrap: "break-word" }}>
        *We operate on a success-fee based system. No fees are charged till the transaction is closed
      </Typography>
    </div>
  );
};

export default AppsSection;
