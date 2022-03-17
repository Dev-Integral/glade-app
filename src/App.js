import './App.css';
import Banner from './components/Banner';
import Donation from './components/Donation';
import WhatWeDo from './components/WhatWeDo';
import Support from './components/Support';
import OurPartners from './components/OurPartners';
import Footer from './components/Footer';
import { useEffect, useRef, useState } from 'react';

function App() {
  // Declarations
  const [goto, setGoto] = useState('');
  const donate = useRef();
  const whatWeDo = useRef();
  const partners = useRef();
  const support = useRef();
  
  // Life Hooks
  useEffect(()=>{
    if (goto === 'donate'){
      donate.current.scrollIntoView();
    }else if(goto === 'support'){
      support.current.scrollIntoView();
    }else if(goto === 'what we do'){
      whatWeDo.current.scrollIntoView();
    }else if(goto === 'partners'){
      partners.current.scrollIntoView();
    }
    setGoto('');
  }, [goto]);
  
  // Functions
  const emmittedEvent = (event) => {
    setGoto(event)
  }
  return (
    <div className="App">
      <div>
        <Banner emitEvent={emmittedEvent} />
      </div>
      <div ref={donate}>
        <Donation />
      </div>
      <div ref={whatWeDo}>
        <WhatWeDo />
      </div>
      <div ref={support}>
        <Support />
      </div>
      <div ref={partners}>
        <OurPartners />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
