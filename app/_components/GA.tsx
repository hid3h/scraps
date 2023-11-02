import Script from "next/script";

export const GA = () => {
  if (process.env.NODE_ENV !== "production") return null;
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-4CE1J7FPDH"
      ></Script>
      <Script id="ga">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4CE1J7FPDH');
        `}
      </Script>
    </>
  );
};
