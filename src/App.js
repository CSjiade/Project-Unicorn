import React, { Suspense, useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter , Route, Redirect, Switch } from 'react-router-dom';
import useAuth from './company_site/hooks/auth_hook';
import { AuthContext } from './company_site/components/shared/auth_context';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import ScaleLoader from 'react-spinners/ScaleLoader';
import SplashScreen from './splashscreen';


const Home = React.lazy(() => import('./company_site/pages/index'));
const BlogPage = React.lazy(() => import('./company_site/pages/press'));
const ProjectPage = React.lazy(() => import('./company_site/pages/projects'));
const FirmPage = React.lazy(() => import('./company_site/pages/firm'));
const ContactPage =  React.lazy(() => import('./company_site/pages/contact_us'));
const RecordPage =  React.lazy(() => import('./company_site/pages/records'));

const BlogPost1 = React.lazy(() => import('./company_site/components/blog_section/blogs/China-M&A Market-review'));
const BlogPost2 = React.lazy(() => import('./company_site/components/blog_section/blogs/Asia-Pacific-M&A-Q1-2023'));






/**
 * Application's entry point, contains the oruter and routes
 * amongst other things
 * @return {div} The html of the page
 */
function App() {
  const { token, login, logout, loggedInUserId, role } = useAuth();
  let routes;
  if (!token) {
    routes = (
     
      <Switch>
       
        <Route path="/" exact>
          <Home />
        </Route>

        {/* <Route path="/signIn">
          <AuthPage />
        </Route> */}

        <Route path="/blog" exact>
          <BlogPage />
        </Route>

        <Route path="/projects">
          <ProjectPage />
        </Route>

        <Route path="/records">
          <RecordPage />
        </Route>




        <Route path="/firm">
          <FirmPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/blog/China-M&A Market-review">
          <BlogPost1/>
        </Route>

        <Route path="/blog/Asia-Pacific-M&A-Q1-2023">
          <BlogPost2/>
          </Route>

      </Switch>

    );
  } else {
  }

  const [isSplashing, setIsSplashing] = useState(false);
  const onSplashScreenEndHandler = () => {
    setIsSplashing(false);
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      paddingTop: '56px',
      height: '100vh',
      overflow: 'auto',
    },
    backdrop: {
      color: "#000000",
      background: "#000000"
    }
  }));
  const classes = useStyles();
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: !!token,
        userId: loggedInUserId,
        token: token,
        login: login,
        logout: logout,
        isAdmin: role === 'ADMIN',
      }}
    >
        <BrowserRouter>
          {isSplashing 
            ? <SplashScreen onSplashScreenEndHandler={onSplashScreenEndHandler}/>
            : <div className={!!token ? classes.root : undefined}>
            <Suspense
              fallback={
                <Backdrop className={classes.backdrop} open={false}>
                  <ScaleLoader color="#ffffff"/>
                </Backdrop>
              }
            >
              {!!token}
              <main className={!!token ? classes.content : undefined}>
                {routes}
              </main>
            </Suspense>
          </div>
          }
          
        </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
