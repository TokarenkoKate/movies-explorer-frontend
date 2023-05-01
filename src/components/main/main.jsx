import './main.css';
import Promo from '../promo/promo';
import AboutProject from '../about-project/about-project';
import Techs from '../techs/techs';
import AboutMe from '../about-me/about-me';

function Main() {

  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs  />
      <AboutMe />
    </main>
  )
}

export default Main;