import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/homepage/Home'
import Footer from './components/pages/footer/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={ Home }/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
