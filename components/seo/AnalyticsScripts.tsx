"use client";

import Script from "next/script";
import { useConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

/**
 * Loads GA4 / Google Ads / Meta Pixel only after the visitor has granted
 * the relevant consent category, and only if the corresponding env var is
 * configured. Nothing fires before consent when consent is required, and
 * nothing fires at all for a channel whose ID isn't set — no placeholder
 * or fake IDs are ever hardcoded here.
 *
 * GA4 and Google Ads conversion tracking share one gtag.js loader (loaded
 * once, keyed off whichever ID is available) so a site running both isn't
 * loading the library twice.
 */
export function AnalyticsScripts() {
  const consent = useConsent();

  const analyticsAllowed = Boolean(consent?.analytics && GA_ID);
  const adsAllowed = Boolean(consent?.marketing && GOOGLE_ADS_ID);
  const marketingAllowed = Boolean(consent?.marketing && META_PIXEL_ID);
  const gtagAllowed = analyticsAllowed || adsAllowed;
  const gtagLoaderId = GA_ID || GOOGLE_ADS_ID;

  return (
    <>
      {gtagAllowed && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtagLoaderId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${analyticsAllowed ? `gtag('config', '${GA_ID}', { anonymize_ip: true });` : ""}
              ${adsAllowed ? `gtag('config', '${GOOGLE_ADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}
      {marketingAllowed && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
