import { NEXT_PUBLIC_SITE_URL } from "@/constants/env.contant";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export async function generateMetadata() {
  const title = "DNPhim - Trang đang bảo trì";
  const description =
    "Trang bạn đang truy cập hiện đang được bảo trì để nâng cấp và cải thiện trải nghiệm. Vui lòng quay lại sau.";

  return {
    title,
    description,
    keywords: [
      "bảo trì",
      "bảo trì hệ thống",
      "DNPhim bảo trì",
      "trang tạm thời không truy cập được",
      "DNPhim bảo dưỡng",
    ],
    robots: "noindex, nofollow",
    openGraph: {
      title,
      description,
      url: `${NEXT_PUBLIC_SITE_URL}/maintenance`,
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
            🔧 Trang đang bảo trì
          </h1>
          <p className="mb-4 text-md font-light text-gray-200">
            Chúng tôi đang thực hiện nâng cấp hệ thống để phục vụ bạn tốt hơn.
            Vui lòng quay lại sau ít phút.
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
