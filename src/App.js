import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Ringcarousel from './components/Ringcarousel';
import Menuitems from './components/Menuitems';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import LogIn from './components/LogIn';
import SignUpForm from './components/SignUpForm';
import Footer from './components/Footer';

function App() {
  const [showCategorySelection, setShowCategorySelection] = useState(false);

  const handleOrderNowClick = () => {
    setShowCategorySelection(true);
  };

  return (
    <Router>
      <div className="App">
        <Navbar handleOrderNowClick={handleOrderNowClick} />
        <Switch>
          <Route path="/" exact component={Ringcarousel} />
          <Route path="/menu" component={Menuitems} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUpForm} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;





