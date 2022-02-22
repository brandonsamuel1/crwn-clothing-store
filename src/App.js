import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

// components imports
import HomePage from './pages/home-page/homepage.component';
import ShopPage from './pages/shop-page/shoppage.component';
import SigninSignup from './pages/signin-signup/signin-signup.component';

// pages imports
import Header from './components/header/header.component';

// firebase imports
import { auth, createUserProfileDoc } from './firebase/firebase.utils';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({ currentUser: userAuth })
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path={'/'} component={HomePage} />
          <Route path={'/shop'} component={ShopPage} />
          <Route path={'/signin'} component={SigninSignup} />
        </Switch>
      </div>
    );
  }

}

export default App;
