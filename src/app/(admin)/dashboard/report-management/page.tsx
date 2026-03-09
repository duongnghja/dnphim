import Loading from "@/app/loading";
import { NEXT_PUBLIC_SITE_URL } from "@/constants/env.contant";
import { Suspense } from "react";
import ClientWrapper from "@/components/admin/dashboard/report-management/ClientWrapper";
import AnimateWrapper from "@/components/shared/AnimateWrapper";

export const generateMetadata = async () => {
  return {
    title: "Quản lý báo cáo - DNPhim",
    description:
      "Trang quản lý báo cáo sự cố và phân tích dữ liệu trên DNPhim. Xem, lọc và xuất báo cáo chi tiết về lỗi, thống kê lượt xem, tương tác của người dùng.",
    keywords: [
      "báo cáo",
      "quản lý báo cáo",
      "DNPhim",
      "report",
      "thống kê",
      "analytics",
    ],
    robots: "index, follow",
    openGraph: {
      title: "Quản lý báo cáo - DNPhim",
      description:
        "Theo dõi báo cáo sự cố và phân tích dữ liệu người dùng trên DNPhim.",
      url: `${NEXT_PUBLIC_SITE_URL}/dashboard/report-management`,
      siteName: "DNPhim",
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Quản lý báo cáo - DNPhim",
      description: "Trang báo cáo sự cố và thống kê nâng cao trên DNPhim.",
    },
  };
};

const Page = async ({ searchParams }: PageProps) => {
  return (
    <Suspense fallback={<Loading type="bars" height="h-96" />}>
      <AnimateWrapper>
        <ClientWrapper />
      </AnimateWrapper>
    </Suspense>
  );
};

export default Page;
