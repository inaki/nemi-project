import Layout from "pages/components/layout";
import { bgs } from "lib/bg.config";

export default function Community() {
  return (
    <Layout bgImage={bgs.community}>
      <div className="bg-[#dfba87] p-10 w-[600px] mt-[100px] text-white">
        <h1 className="text-xl pb-4">Community</h1>
        <p className="text-white"></p>
      </div>
    </Layout>
  );
}
