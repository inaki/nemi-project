import Layout from "pages/components/layout";
import Image from "next/image";
import sustainability from "public/images/slides/sustainability.png";
import { bgs } from "lib/bg.config";

export default function Map() {
  return (
    <Layout bgImage={bgs.sustainability}>
      <Image
        src={sustainability}
        alt="sustainability"
        className="fixed bottom-5 right-0 w-[600px]"
      />
    </Layout>
  );
}
