import Layout from "pages/components/layout";
import Image from "next/image";
import times from "public/images/slides/times.png";
import { bgs } from "lib/bg.config";

export default function Map() {
  return (
    <Layout bgImage={bgs.map}>
      <Image src={times} alt="Times" className="absolute bottom-10 left-5" />
    </Layout>
  );
}
