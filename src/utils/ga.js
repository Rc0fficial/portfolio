// utils/ga.js
import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-QR91QYZE5D'); // Your Tracking ID
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
