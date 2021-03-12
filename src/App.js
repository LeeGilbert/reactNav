import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar2 from './components/Sidebar2';
import { ListGroup } from 'react-bootstrap';
import { ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MoreStuff } from './MoreStuff';

function App() {

  const toggleMenu = () => {

  }

  const data = [
    { path: '/',
      title: 'Home',
      desc: 'Home Page'
    },
    { path: '/about',
    title: 'About',
    desc: 'Basic Stuff'
    },
    { path: '/more',
      title: 'More',
      desc: 'More Stuff'
     }];
  
  const sideMenu = () => (
    <ListGroup>
      {data.map((route, index) => (
        <LinkContainer to={route.path} key={index}  >
          <ListGroupItem  onClick={() => toggleMenu()} header={route.title}>{route.desc}</ListGroupItem>
        </LinkContainer>
      ))}
    </ListGroup>
  )
 

  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

        <Sidebar2 width={300} height={"100vh"}>
        {sideMenu()}
        </Sidebar2>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/more" component={MoreStuff} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
