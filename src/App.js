import './App.css';
import Banner from './components/Banner/Banner';
import Donation from './components/Donation/Donation';
import WhatWeDo from './components/What we do/WhatWeDo';
import Support from './components/Support/Support';
import OurPartners from './components/Our Partners/OurPartners';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import ToastrMessage from './components/Modal/ToastrMessage';

import { useEffect, useRef, useState } from 'react';

function App() {
  // Declarations
  const [goto, setGoto] = useState('');
  const [showToastr, setShowToastr] = useState(false);
  const [toastrMsg, setToastrMsg] = useState('');
  const [status, setStatus] = useState(true);
  const donate = useRef();
  const whatWeDo = useRef();
  const partners = useRef();
  const support = useRef();

  // Life Hooks
  useEffect(() => {
    if (goto === 'donate') {
      donate.current.scrollIntoView();
    } else if (goto === 'support') {
      support.current.scrollIntoView();
    } else if (goto === 'what we do') {
      whatWeDo.current.scrollIntoView();
    } else if (goto === 'partners') {
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
        <Donation setShowToastr={setShowToastr} setStatus={setStatus} setToastrMsg={setToastrMsg} />
      </div>
      <div ref={whatWeDo}>
        <WhatWeDo />
      </div>
      <div ref={support}>
        <Support setShowToastr={setShowToastr} setStatus={setStatus} setToastrMsg={setToastrMsg} />
      </div>
      <div ref={partners}>
        <OurPartners />
      </div>
      <div>
        <Footer />
      </div>
      <Modal open={showToastr} onClose={() => setShowToastr(false)}>
        <ToastrMessage onClose={() => {
          setShowToastr(false);
        }}
          toastrMsg={toastrMsg}
          status={status} />
      </Modal>
    </div>
  );
}

export default App;
