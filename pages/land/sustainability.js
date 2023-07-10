import Layout from "../components/Layout";
import Image from "next/image";
import sustainability from "../../public/images/slides/sustainability.png";

export default function Map() {
  return (
    <Layout>
      <Image
        src={sustainability}
        alt="sustainability"
        className="fixed bottom-5 right-0 w-[600px]"
      />
    </Layout>
  );
}
