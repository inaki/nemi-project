import Layout from "pages/components/layout";
import Image from "next/image";
import prices from "public/images/slides/prices.png";
import { bgs } from "lib/bg.config";

export default function Investment() {
  return (
    <Layout bgImage={bgs.investment}>
      <div className="bg-[#dfba87] p-10 w-[600px] mt-[100px] text-white">
        <h1 className="text-xl pb-4">Investment</h1>
        <Image src={prices} alt="Prices" className="fixed w-[600px]" />
      </div>
    </Layout>
  );
}
