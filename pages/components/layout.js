import Header from "pages/components/header";

export default function Layout({ children, bgImage = "photo3.jpg" }) {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{
        backgroundImage: `url("/images/${bgImage}")`,
      }}
    >
      <Header />
      {children}
    </div>
  );
}
