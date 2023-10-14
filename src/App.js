import './App.css';
import NavBar from './components/Home/NavBar';
import Category from './components/Home/Category';
import Banner from './components/Home/Banner';
import Title from './components/FlashSale/Title';
import JustForYou from './components/JustForYou';
import Gift from './components/Home/Gift';



function App() {
  return (
    <>

      <NavBar />
      <Banner />
      <Category />
      <Gift />
      <Title />
      <JustForYou />
      <div className="kayas"></div>

    </>
  );
}

export default App;
