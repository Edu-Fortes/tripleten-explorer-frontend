import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import hero from '../../images/hero_clean.jpg';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Navbar from '../Navbar/Navbar';
import SavedNews from '../SavedNews/SavedNews';
import SeachForm from '../SearchForm/SearchForm';
// import NewsCardList from '../NewsCardList/NewsCardList';
import Button from '../Button/Button';
import Author from '../Author/Author';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';
import Modal from '../Modal/Modal';
import AuthForm from '../AuthForm/AuthForm';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    // get user from locaStorage if available
    const localData = JSON.parse(localStorage.getItem('user'));
    if (localData) {
      setCurrentUser(localData);
      setIsLogged(true);
    }
  }, [isLogged]);

  function handleOpenModal() {
    setIsModalOpen(!isModalOpen);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsLoginForm(true);
  }

  function handleIsLogged() {
    setIsLogged(!isLogged);
  }

  function handleChangeForm() {
    setIsLoginForm(!isLoginForm);
  }

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem('user');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header>
        <Navbar isLogged={isLogged}>
          {!isLogged ? (
            <Button
              label='Entrar'
              classMod='crystal'
              onClick={handleOpenModal}
            />
          ) : (
            <Button
              label={currentUser.name}
              classMod='crystal'
              onClick={handleLogout}
            />
          )}
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
                    <Button label='Procurar' classMod='blue' />
                  </SeachForm>
                </Hero>
              </main>
              <Preloader />
              <Author />
            </>
          }
        />
        <Route path='saved-news' element={<SavedNews />} />
      </Routes>
      <Footer />
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <AuthForm
          isLogged={handleIsLogged}
          onClose={handleCloseModal}
          isLoginForm={isLoginForm}
          changeForm={handleChangeForm}
        />
      </Modal>
    </CurrentUserContext.Provider>
  );
}
