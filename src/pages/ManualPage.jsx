import React, { useEffect } from 'react';
import manualPdf from '../downloads/SuperFootMIDI_Manual.pdf';

const ManualPage = () => {
  useEffect(() => {
    window.location.replace(manualPdf);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--bg-dark)', color: 'var(--text-main)' }}>
      <p>Redirigiendo al manual...</p>
    </div>
  );
};

export default ManualPage;
