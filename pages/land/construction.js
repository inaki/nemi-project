import Layout from "pages/components/layout";
import Image from "next/image";
import constructionImage from "public/images/slides/construction.png";
import { bgs } from "lib/bg.config";

export default function Construction() {
  return (
    <Layout bgImage={bgs.construction}>
      <div className="bg-[#dfba87] p-10 w-[600px] mt-[100px] text-white">
        <h1 className="text-xl pb-4">Construction</h1>
        <Image
          src={constructionImage}
          alt="Construction"
          className="fixed bottom-5 right-0 w-[600px]"
        />
      </div>
    </Layout>
  );
}
