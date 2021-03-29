import React from 'react';
//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter,  Route } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import Sidebar2 from './components/Sidebar2';
import { ListGroup,ListGroupItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MoreStuff } from './MoreStuff';
import { Xtra } from './Xtra';
import Backdrop from './components/Backdrop';

class App extends React.Component {
  state = {
    sideBarOpen: false
  };

  toggleSideBar = () => {
    this.setState(
      (prevState) => {
        return {sideBarOpen: !prevState.sideBarOpen};
      }
    );
  };

  backdropClickHandler = () => {
    this.setState({sideBarOpen: false});
  }

  data = [
    { path: '/about',
    title: 'About',
    desc: 'About Stuff'
    },
    { path: '/more',
      title: 'More',
      desc: 'More Stuff'
     },
     { path: '/xtra',
     title: 'Xtra',
     desc: 'Xtra Page'
   }];
  

  render() {
    let sidebar;
    let backdrop;
    if (this.state.sideBarOpen) {
      sidebar =  <Sidebar2 width={300} height={"100%"}> {this.sideMenu()} </Sidebar2>;
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
   return (
    <React.Fragment>
      <NavigationBar btnClickHandler={this.toggleSideBar}/>
      <HashRouter>
          <Route path="/" component={Home}>
          <Route id="1" path="/about" component={About} />
          <Route id="2" path="/more" component={MoreStuff} />
          <Route id="3" path="/xtra" component={Xtra} />
         
        </Route>
       {backdrop}
       {sidebar}
      </HashRouter>

    </React.Fragment>
  );
  }

  sideMenu = () => (
    <ListGroup>
      {this.data.map((route, index) => (
        <LinkContainer to={route.path} key={index}  >        
          <ListGroupItem  onClick={() => this.toggleSideBar()} header={route.title}>{route.desc}</ListGroupItem>
        </LinkContainer>
      ))}
    </ListGroup>
  );

}
export default App;
