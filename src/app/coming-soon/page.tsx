import { NEXT_PUBLIC_SITE_URL } from "@/constants/env.contant";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

export async function generateMetadata() {
  const title = "DNPhim - Tính năng sắp ra mắt";
  const description =
    "Tính năng bạn đang tìm kiếm hiện đang được phát triển và sẽ sớm ra mắt. Cảm ơn bạn đã quan tâm đến DNPhim.";

  return {
    title,
    description,
    keywords: [
      "tính năng mới",
      "sắp ra mắt",
      "đang phát triển",
      "coming soon",
      "DNPhim",
    ],
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: `${NEXT_PUBLIC_SITE_URL}/coming-soon`,
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
            🚧 Tính năng sắp ra mắt
          </h1>
          <p className="mb-4 text-md font-light text-gray-200">
            Tính năng này đang trong quá trình hoàn thiện và sẽ sớm ra mắt trong
            thời gian tới. Vui lòng quay lại sau hoặc khám phá những nội dung
            khác của DNPhim.
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
