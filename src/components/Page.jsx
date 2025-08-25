import Navbar from "./Header";
import MainContent from "./Entry";
import Footer from "./Footer";
import data from "../data";

const entryElements = data.map((entry) => {
  return <MainContent key={entry.id} {...entry} />;
});
export default function Page() {
  return (
    <>
      <Navbar />
      {entryElements}
      <Footer />
    </>
  );
}
