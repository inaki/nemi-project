import Layout from "../components/Layout";
import Image from "next/image";
import constructionImage from "../../public/images/slides/construction.png";

export default function Construction() {
  return (
    <Layout>
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
