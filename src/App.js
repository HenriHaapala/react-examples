import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './routes/main';
import React, { Component } from 'react';
import MainPage from './routes/main';
import Lists from "./routes/lists";
import ContactsPage from "./routes/contactsPage";
import CheckoutPage from './routes/checkoutPage';
import TodoDetailsPage from "./routes/todoDetailsPage";
import Footer from './components/footer';
import HeaderComponent from './components/header';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom"; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBackgroundGrey: false
    }
  }
  //States example
  changeColor = isBackgroundGrey => {
    this.setState(state => ({
      isBackgroundGrey: !state.isBackgroundGrey
    }));
  }

  render() {
    return (
      //Routing example
      <BrowserRouter>

      <div className={"cover-container d-flex w-100 h-100 p-3 mx-auto flex-column "+(this.state.isBackgroundGrey ? 'background-red' : 'background-black')}>
        <HeaderComponent isBackgroundGrey={this.state.isBackgroundGrey} onColorChange={this.changeColor}></HeaderComponent>
              <Switch>
                <Route exact path="/todos/:id">
                  <TodoDetailsPage></TodoDetailsPage>
                </Route>
                <Route path="/lists">
                  <Lists></Lists>
                </Route>
                <Route path="/contacts">
                  <ContactsPage></ContactsPage>
                </Route>
                <Route path="/checkout">
                  <CheckoutPage></CheckoutPage>
                </Route>
                <Route exact path="/">
                  <MainPage></MainPage>
                </Route>
              </Switch>
        <Footer></Footer>
      </div>

      </BrowserRouter>
    );
  }
}

export default App;
