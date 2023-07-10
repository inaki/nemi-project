import Layout from "../components/Layout";
import Image from "next/image";
import values from "../../public/images/slides/values.png";

export default function Values() {
  return (
    <Layout>
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
