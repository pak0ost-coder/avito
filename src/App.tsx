import React, { useEffect } from 'react';

import { Router } from './router';
import { Layout } from './components/Layout';

function setAppHeight() {
  const vh = window.visualViewport ? window.visualViewport.height : window.innerHeight;
  document.documentElement.style.setProperty('--app-height', vh + 'px');
}

export default function App() {
  useEffect(() => {
    setAppHeight();
    window.addEventListener('resize', setAppHeight);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', setAppHeight);
    }
    return () => {
      window.removeEventListener('resize', setAppHeight);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', setAppHeight);
      }
    };
  }, []);

  return (
    <Layout>
      <Router />
    </Layout>
  );
}
