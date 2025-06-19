import React, { useEffect, useState } from "react";

const isMobile = () => window.innerWidth <= 768;

const MobilePopups = () => {
  const [showPromo, setShowPromo] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  useEffect(() => {
    // Only show on mobile and if not dismissed before
    if (isMobile() && !localStorage.getItem("promoDismissed")) {
      setShowPromo(true);
    }
    if (!localStorage.getItem("cookiesAccepted")) {
      setShowCookies(true);
    }
  }, []);

  const handlePromoClose = () => {
    setShowPromo(false);
    localStorage.setItem("promoDismissed", "true");
  };

  const handleCookiesAccept = () => {
    setShowCookies(false);
    localStorage.setItem("cookiesAccepted", "true");
  };

  return (
    <>
      {/* Promo Popup */}
      {showPromo && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60">
          <div className="bg-white rounded-xl !p-6 w-[90vw] max-w-xs text-center flex flex-col gap-4">
            <h2 className="text-xl font-bold text-black">
              Get 15% Off Your First Order!
            </h2>
            <p className="text-black">Order now and enjoy exclusive savings.</p>
            <button
              className="bg-black text-white rounded-full !px-6 !py-2 !mt-2"
              onClick={handlePromoClose}
            >
              Order Now
            </button>
            <button
              className="text-gray-500 text-sm !mt-2 underline"
              onClick={handlePromoClose}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Cookies Popup */}
      {showCookies && (
        <div className="fixed bottom-0 left-0 w-full z-[150] flex items-center justify-center bg-black/80 !py-4">
          <div className="bg-white rounded-lg !px-4 !py-3 flex flex-col items-center gap-2 w-[95vw] max-w-md">
            <span className="text-black text-sm">
              We use cookies to improve your experience. By using our site, you
              accept cookies.
            </span>
            <button
              className="bg-black text-white rounded-full !px-5 !py-1"
              onClick={handleCookiesAccept}
            >
              Allow Cookies
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MobilePopups;
