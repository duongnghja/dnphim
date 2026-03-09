import Loading from "@/app/loading";
import { NEXT_PUBLIC_SITE_URL } from "@/constants/env.contant";
import { Suspense } from "react";
import ClientWrapper from "@/components/admin/dashboard/user-management/ClientWrapper";
import AnimateWrapper from "@/components/shared/AnimateWrapper";

export const generateMetadata = async () => {
  return {
    title: "Quản lý người dùng - DNPhim",
    description:
      "Trang quản lý người dùng trong hệ thống DNPhim. Xem danh sách, phân quyền, khóa/mở khóa tài khoản và cập nhật thông tin người dùng.",
    keywords: [
      "người dùng",
      "quản lý người dùng",
      "DNPhim",
      "user management",
      "tài khoản",
      "admin",
    ],
    robots: "index, follow",
    openGraph: {
      title: "Quản lý người dùng - DNPhim",
      description:
        "Theo dõi và quản lý tài khoản người dùng với giao diện Admin trên DNPhim.",
      url: `${NEXT_PUBLIC_SITE_URL}/dashboard/user-management`,
      siteName: "DNPhim",
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Quản lý người dùng - DNPhim",
      description:
        "Trang quản lý tài khoản người dùng và phân quyền trên DNPhim.",
    },
  };
};

const Page = ({ searchParams }: PageProps) => {
  return (
    <Suspense fallback={<Loading type="bars" height="h-96" />}>
      <AnimateWrapper>
        <ClientWrapper />
      </AnimateWrapper>
    </Suspense>
  );
};

export default Page;
