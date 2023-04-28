import './app.css';
import Header from '../header/header';
import Main from '../main/main'
import Footer from '../footer/footer';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <Header /> 
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
