// importar libreria
import React, { StrictMode } from 'react';

// crear ruta donde se cargará todos los componentes
import { createRoot } from 'react-dom/client';

import App from './App';

// siempre
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
