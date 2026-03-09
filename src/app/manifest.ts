import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "DNPhim",
    short_name: "DNPhim",
    description: "Website xem phim online - Được xây dựng bởi DNPhim",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "/icons/logo.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icons/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/logo512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
