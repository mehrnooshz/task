/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "ipravda.sk", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "media.newyorker.com", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "pcdn.hu", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "static-prod.adweek.com", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "cnnespanol.cnn.com", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "newsmotor.com.br", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "img.chip.com.tr", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "c.biztoc.com", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "uploads.metropoles.cloud", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "www.marketscreener.com", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "resizer.mail.ru", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "image.stern.de", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "habrastorage.org", // if your website has no www, drop it
      },
      {
        protocol: "https",
        hostname: "readwrite.com", // if your website has no www, drop it
      },
    ],
  },
};

export default nextConfig;
