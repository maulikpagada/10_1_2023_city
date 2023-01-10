import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/About/About'
import Departments from './container/Departments/Departments'
import Doctors from './container/Doctor/Doctor'
import Contact from './container/Contact/Contact'
import Login from './container/Login/Login';
import Signin from './container/Signin/Signin'

function App() {
  return (
    <>
      <Header />
      <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/deparments"} component={Departments}/>
      <Route exact path={"/doctor"} component={Doctors}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/Login"} component={Login}/>
      <Route exact path={"/Signin"} component={Signin}/>
      </Switch>
      <Footer />
    </>

  );
}

export default App;
