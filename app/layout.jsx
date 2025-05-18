"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Script from "next/script";
import "../public/assets/css/vendor.css";
import "../public/assets/sass/style.scss";
import { ParallaxProvider } from "react-scroll-parallax";
import ScrollTop from "@/components/common/ScrollTop";
import localFont from 'next/font/local'
import clarity from "@microsoft/clarity";
import ScrollTopBehaviour from "@/components/common/ScrollTopBehavier";
import "./global.css";
if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.esm").then((module) => {
    // Module is imported, you can access any exported functionality if needed
  });
}

// wow js
// const CLARITY_PROJECT_ID = "q93kym975x";
const CLARITY_PROJECT_ID = "r1cf47fa1v";

// Define the local font
const camber = localFont({
  src: [
    {
      path: '../public/fonts/CamberTRIAL-Lt.otf',
      weight: '200',
      style: 'normal',
    },
  ],
  variable: '--body-font',
});

export default function RootLayout({ children }) {
  const path = usePathname();
  const pathname = usePathname();

  useEffect(() => {
      // Dynamically add Clarity script to the page
      const script = document.createElement("script");
      script.src = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
      script.async = true;
      script.onload = () => {
          window.clarity("trackPageview");  // Track page view after script load
      };
      document.head.appendChild(script);

      return () => {
          document.head.removeChild(script); // Clean up the script on component unmount
      };
  }, [pathname]);

  let wow = null;
  useEffect(() => {
    const { WOW } = require("wowjs");
    wow = new WOW({
      live: false,
      mobile: false,
    });
    wow.init();
  }, [path]);

  return (
    <html lang="en">
      <body className={`body ${camber.variable}`}>
        <head>
          {/* <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-TM7KY7962Z`}></Script>
          <Script>
            {
              `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TM7KY7962Z');`
            }
          </Script> */}

{/* google analytics */}
<Script async src={`https://www.googletagmanager.com/gtag/js?id=G-20VSFM6VQN`}></Script>
<Script>
{
  `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-20VSFM6VQN');`
}
</Script>
          {/* <Script type="text/javascript">
            {
              ` (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "q93kym975x");`
            }
          </Script> */}

          {/* microsoft clarity */}

          <Script type="text/javascript">
    {
      `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "r1cf47fa1v");`
    }
</Script>
        </head>
        <ParallaxProvider>{children}</ParallaxProvider>
        <ScrollTop />
        <ScrollTopBehaviour />
      </body>
    </html>
  );
}
