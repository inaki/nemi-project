import Layout from "pages/components/layout";
import { bgs } from "lib/bg.config";

export default function Vision() {
  return (
    <Layout bgImage={bgs.vision}>
      <div className="flex flex-col items-center justify-between p-24">
        <h1 className="text-white">Get in touch!</h1>
        <form className="flex flex-col w-[350px] bg-white text-gray-500 bg-opacity-50 rounded-lg p-5">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            className="input input-bordered w-full max-w-xs mb-4"
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            placeholder="Enter your email"
            className="input input-bordered w-full max-w-xs mb-4"
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="textarea textarea-bordered mb-4"
            placeholder="Share your thoughts"
          ></textarea>
        </form>
      </div>
    </Layout>
  );
}
