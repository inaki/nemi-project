import { Inter } from "next/font/google";
import Layout from "pages/components/layout";
import { getSession } from "next-auth/client";

const inter = Inter({ subsets: ["latin"] });

async function getServerSideProps(context) {
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
}

export default function Home({ session }) {
  return <Layout>Home dad</Layout>;
}
