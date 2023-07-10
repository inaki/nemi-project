import Layout from "pages/components/layout";
import { bgs } from "lib/bg.config";

export default function Build() {
  return (
    <Layout bgImage={bgs.build}>
      <div className="bg-[#dfba87] p-10 w-[600px] mt-[100px] text-white">
        <h1 className="text-xl pb-4">Build</h1>
      </div>
    </Layout>
  );
}
