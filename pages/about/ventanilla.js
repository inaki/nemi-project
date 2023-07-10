import Layout from "pages/components/layout";
import Image from "next/image";
import birds from "public/images/slides/birds.png";
import aligator from "public/images/slides/aligator.png";
import { bgs } from "lib/bg.config";

export default function Ventanilla() {
  return (
    <Layout bgImage={bgs.ventanilla}>
      <Image src={birds} alt="Birds" className="fixed right-0 w-[300px]" />
      <Image
        src={aligator}
        alt="Aligator"
        className="fixed bottom-5 w-[600px]"
      />
    </Layout>
  );
}
