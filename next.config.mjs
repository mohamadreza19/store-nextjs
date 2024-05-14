/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: "dist",

  images: {
    domains: [
      "https://store19.s3.ir-thr-at1.arvanstorage.ir",
      "encrypted-tbn0.gstatic.com",
      "other-hostname.com",
    ],
  },
};

export default nextConfig;
