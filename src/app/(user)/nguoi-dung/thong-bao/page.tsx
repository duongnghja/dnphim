import { Suspense } from "react";
import Loading from "@/app/loading";
import ClientWrapper from "@/components/user/notification/ClientWrapper";
import { NEXT_PUBLIC_SITE_URL } from "@/constants/env.contant";

export async function generateMetadata() {
  const title = "DNPhim - Thông báo mới nhất";
  const description =
    "Xem các thông báo cập nhật mới nhất từ DNPhim về phim, sự kiện và tin tức nóng hổi. Đừng bỏ lỡ những thông tin quan trọng!";

  return {
    title,
    description,
    keywords: [
      "thông báo DNPhim",
      "cập nhật phim",
      "tin tức phim",
      "DNPhim",
      "thông báo mới",
    ],
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: `${NEXT_PUBLIC_SITE_URL}/nguoi-dung/thong-bao`,
      siteName: "DNPhim",
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

const Page = () => {
  return (
    <Suspense fallback={<Loading height="h-1/2" type="bars" />}>
      <ClientWrapper />
    </Suspense>
  );
};

export default Page;
