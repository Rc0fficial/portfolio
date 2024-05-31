import React from 'react';
import Script from 'next/script';

const GoogleAnalytics = ({ measurementId }) => {
  React.useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', measurementId);
  }, [measurementId]);

  return null; // No visible element rendered
};

export default GoogleAnalytics;
