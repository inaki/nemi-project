import { Inter } from "next/font/google";
import Layout from "pages/components/layout";
import { getSession } from "next-auth/client";
import { bgs } from "lib/bg.config";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

export default function Home({ session }) {
  if (!session)
    return (
      <div
        className="bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url("/images/${bgs.home}")`,
        }}
      ></div>
    );
  return <Layout></Layout>;
}
