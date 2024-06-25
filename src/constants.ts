export const SITE = {
  name: "Codeology",
  base: "/",
  site: "https://example.com",
  trailingSlash: true,
};

export const I18N = {
  language: "en-US",
  textDirection: "ltr",
};

export const METADATA = {
  title: {
    default: "Codeology",
    template: "%s | Codeology",
    separator: " | ",
    suffix: SITE.name,
  },
  description:
    "Codeology is a non-profit dedicated to creating the future coders of the next generations",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    site_name: "Codeology",
    images: [
      {
        url: "/images/default.png",
        width: 1200,
        height: 628,
      },
    ],
    type: "website",
  },
  twitter: {
    cardType: "summary_large_image",
  },
};
