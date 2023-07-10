import Layout from "pages/components/layout";
import Image from "next/image";
import values from "public/images/slides/values.png";
import { bgs } from "lib/bg.config";

export default function Values() {
  return (
    <Layout bgImage={bgs.values}>
      <div className="bg-[#dfba87] p-10 w-[600px] mt-[100px] text-white">
        <h1 className="text-xl pb-4">Values</h1>
        <Image
          src={values}
          alt="Values"
          className="fixed bottom-5 right-0 w-[600px]"
        />
      </div>
    </Layout>
  );
}
