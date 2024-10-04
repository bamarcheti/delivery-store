import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { MainLayout } from './components/MainLayout.tsx';
import './styles/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </StrictMode>
);
