import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>𝕟𝕠𝕚𝕤𝕣𝕝</span>,
  docsRepositoryBase: "https://www.icc-cpi.int/contact/",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="𝕟𝕠𝕚𝕤𝕣𝕝" />
      <meta property="og:description" content="𝕟𝕠𝕚𝕤𝕣𝕝" />
      <link
        rel="icon"
        href="https://i.ibb.co/ZMdj0Ks/u-http-www-israelandstuff-com-wp-content-uploads-2015-09-Boycott-Israel.png"
        type="image/x-icon"
      />
    </>
  ),
  footer: {
    text: "𝒻𝓇𝑜𝓂 𝓉𝒽𝑒 𝓇𝒾𝓋𝑒𝓇 𝓉𝑜𝓉 𝒽𝑒 𝓈𝑒𝒶 𝓅𝒶𝓁𝑒𝓈𝓉𝒾𝓃𝑒 𝓌𝒾𝓁𝓁 𝒷𝑒 𝒻𝓇𝑒𝑒",
  },
  navigation: {
    prev: true,
    next: true,
  },
};

export default config;
