import { NEXT_PUBLIC_SITE_URL } from "@/constants/env.contant";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export async function generateMetadata() {
  const title = "DNPhim - Không có quyền truy cập";
  const description =
    "Bạn không có quyền truy cập vào tài nguyên này. Vui lòng kiểm tra lại quyền truy cập hoặc quay về trang chủ.";

  return {
    title,
    description,
    keywords: [
      "không có quyền truy cập",
      "403 Forbidden",
      "truy cập bị từ chối",
      "DNPhim lỗi quyền truy cập",
      "tài nguyên bị hạn chế",
    ],
    robots: "noindex, nofollow",
    openGraph: {
      title,
      description,
      url: `${NEXT_PUBLIC_SITE_URL}/forbidden`,
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
    <section className="bg-transparent text-gray-50 min-h-screen flex items-center justify-center">
      <div className="py-8 px-4 mx-auto max-w-lg">
        <div className="text-center">
          <h1 className="mb-4 text-xl tracking-tight font-bold text-white md:text-3xl">
            🚫 Không có quyền truy cập
          </h1>
          <p className="mb-4 text-md font-light text-gray-200">
            Bạn không có quyền truy cập vào tài nguyên này. Vui lòng kiểm tra
            lại quyền truy cập hoặc quay về trang chủ.
          </p>
          <Link href="/">
            <Button
              size="xl"
              className="rounded-full bg-primary linear-gradient mt-6 text-gray-900 shadow-primary"
            >
              Về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
