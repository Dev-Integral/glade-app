import './App.css';
import Banner from './components/Banner';
import Donation from './components/Donation';
import WhatWeDo from './components/WhatWeDo';
import Support from './components/Support';
import OurPartners from './components/OurPartners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Banner />
      <Donation  />
      <WhatWeDo />
      <Support />
      <OurPartners />
      <Footer />
    </div>
  );
}

export default App;
