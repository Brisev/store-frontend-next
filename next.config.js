// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**.**.com",
//         // port: "",
//         // pathname: "/account123/**",
//       },
//     ],
//   },
// };

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  //   webpack: (config, { isServer }) => {
  //     // if (!isServer) {
  //     // don't resolve 'fs' module on the client to prevent this error on build --> Error: Can't resolve 'fs'
  //     config.resolve.fallback = {
  //       net: "empty",
  //     };
  //     // }

  //     return config;
  //   },
};

module.exports = nextConfig;
