import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>🔻 𝕟𝕠𝕚𝕤𝕣𝕝</span>,
  docsRepositoryBase: "https://www.icc-cpi.int/contact/",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="𝕟𝕠𝕚𝕤𝕣𝕝" />
      <meta property="og:description" content="𝕟𝕠𝕚𝕤𝕣𝕝" />
      <meta property="og:url" content="https://noisrl.vercel.app/"></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:title" content="𝕟𝕠𝕚𝕤𝕣𝕝"></meta>
      <meta property="og:description" content="𝕟𝕠𝕚𝕤𝕣𝕝"></meta>
      <meta
        property="og:image"
        content="https://i.ibb.co/3BQWK09/c2.jpg"
      ></meta>

      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="twitter:domain" content="noisrl.vercel.app"></meta>
      <meta property="twitter:url" content="https://noisrl.vercel.app/"></meta>
      <meta name="twitter:title" content="𝕟𝕠𝕚𝕤𝕣𝕝"></meta>
      <meta name="twitter:description" content="𝕟𝕠𝕚𝕤𝕣𝕝"></meta>
      <meta
        name="twitter:image"
        content="https://i.ibb.co/3BQWK09/c2.jpg"
      ></meta>

      <link
        rel="icon"
        href="https://i.ibb.co/ZMdj0Ks/u-http-www-israelandstuff-com-wp-content-uploads-2015-09-Boycott-Israel.png"
        type="image/x-icon"
      />
    </>
  ),
  footer: {
    text: "🇵🇸 𝒻𝓇𝑜𝓂 𝓉𝒽𝑒 𝓇𝒾𝓋𝑒𝓇 𝓉𝑜 𝓉𝒽𝑒 𝓈𝑒𝒶 𝓅𝒶𝓁𝑒𝓈𝓉𝒾𝓃𝑒 𝓌𝒾𝓁𝓁 𝒷𝑒 𝒻𝓇𝑒𝑒 💗",
  },
  navigation: {
    prev: true,
    next: true,
  },
  feedback: {
    content: null,
  },
  editLink: {
    text: null,
  },
  primaryHue: { dark: 137, light: 225 },
  banner: {
    key: "Tech4Palestine",
    dismissible: false,
    text: (
      <a href="https://techforpalestine.org/" target="_blank">
        🇵🇸 #SaveGaza: Call For A Ceasefire Now! 🇵🇸 ➡️
      </a>
    ),
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - 💗🇵🇸",
    };
  },
};

export default config;
