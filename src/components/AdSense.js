import { useEffect } from "react";
const AdSense = () => {
    useEffect(() => {
      if (typeof window.adsbygoogle !== 'undefined') {
        try {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
          console.error('Adsense error:', e.message);
        }
      }
    }, []);
  
    return (
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-3285463246047568"
        data-ad-slot="1253823916"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  };
  
  export default AdSense;
  