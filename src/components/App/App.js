import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';

import hero from '../../images/hero_clean.jpg';
import SavedNews from '../SavedNews/SavedNews';
import SeachForm from '../SearchForm/SearchForm';
import Button from '../Button/Button';
import Author from '../Author/Author';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <>
      <Header>
        <Navbar>
          <Button label='Entrar' kind='crystal' />
        </Navbar>
      </Header>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <main>
                <img src={hero} alt='Hero image' className='bg-image' />
                <Hero>
                  <SeachForm>
                    <Button label='Procurar' kind='blue' />
                  </SeachForm>
                </Hero>
              </main>
              <Author />
            </>
          }
        />
        <Route path='saved-news' element={<SavedNews />} />
      </Routes>
      <Footer />
    </>
  );
}
// CRIAR O COMPONENTE DE LOGIN BUTTON
