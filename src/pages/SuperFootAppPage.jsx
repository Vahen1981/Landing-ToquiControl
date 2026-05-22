import React, { useEffect } from 'react';

const SuperFootAppPage = () => {
  useEffect(() => {
    window.location.replace(`${import.meta.env.BASE_URL}superfoot-app/index.html`);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: 'var(--bg-dark)', color: 'var(--text-main)' }}>
      <p>Redirigiendo a la aplicación...</p>
    </div>
  );
};

export default SuperFootAppPage;
