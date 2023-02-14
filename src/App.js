import { Route, Switch } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './container/Home/Home';
import About from './container/About/About'
import Departments from './container/Departments/Departments'
// import Doctor from './container/Doctor/Doctor'
import Contact from './container/Contact/Contact'
import Auth from './container/Auth/Auth';
import Medinice from './container/Medinice/Medinice';
import Layout from './Admin/Component/Layout/Layout';
import Medicines from './Admin/Container/Mendinice/Mendinice';
import { configureState } from './redux/store';
import Doctor from './Admin/Container/Doctor/Doctor';
import Counter from './container/Counter/Counter';
import { Provider } from 'react-redux';

function App() {

  const store = configureState();
  
  return (
    <>
      {/* <Header />
      <Switch>
      <Route exact path={"/"} component={Home}/>
      <Route exact path={"/about"} component={About}/>
      <Route exact path={"/deparments"} component={Departments}/>
      <Route exact path={"/doctor"} component={Doctor}/>
      <Route exact path={"/contact"} component={Contact}/>
      <Route exact path={"/auth"} component={Auth }/>
      <Route exact path={"/medinice"} component={Medinice}/>
      </Switch>
      <Footer /> */}

      <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path={"/Medicines"} component={Medicines} />
          <Route exact path={"/Doctor"} component={Doctor} />
          <Route exact path={"/Counter"} component={Counter} />
        </Switch>
      </Layout>
      </Provider>  
    </>

  );
}

export default App;
