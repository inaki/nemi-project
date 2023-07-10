import Layout from "../components/Layout";
import Image from "next/image";
import times from "../../public/images/slides/times.png";

export default function Map() {
  return (
    <Layout>
      <Image src={times} alt="Times" className="absolute bottom-10 left-5" />
    </Layout>
  );
}
