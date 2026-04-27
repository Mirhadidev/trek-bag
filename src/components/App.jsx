import BackgroundHeading from "./BackgroundHeading.jsx";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import ItemList from "./ItemList.jsx";
import Sidebar from "./Sidebar.jsx";

function App() {
  return (
    <>
      <BackgroundHeading />
      <main>
   
        <Header />
        <ItemList />
        <Sidebar />

      </main>

      <Footer />
    </>
  );
}

export default App;
