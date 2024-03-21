import { useRef, useState } from 'react';
import Button from '../Button/Button';

export default function AuthForm({
  onClose,
  isLogged,
  isLoginForm,
  changeForm,
}) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [isSuccessSubmit, setIsSuccessSubmit] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  function resetForm() {
    emailRef.current.value = '';
    passwordRef.current.value = '';
    setIsSuccessSubmit(false);
  }

  function handleLoginSubmit(e) {
    e.preventDefault();
    const rawUserData = localStorage.getItem('user');
    const userData = JSON.parse(rawUserData);

    if (!userData) {
      console.log('Usuário não cadastrado');
      return;
    }
    if (!userEmail || !userPassword) {
      console.log('Preencha todos os campos');
      return;
    }
    if (userData.email === userEmail && userData.password === userPassword) {
      console.log('Acesso permitido');
      onClose();
      isLogged();
      resetForm();
      return;
    }
    console.log('Email ou senha invalidos');
  }

  async function handleSignupSubmit(e) {
    e.preventDefault();
    const signupFormData = {
      name: userName,
      email: userEmail,
      password: userPassword,
    };

    localStorage.setItem('user', JSON.stringify(signupFormData));
    setIsSuccessSubmit(true);
  }

  return (
    <form className='frm-auth'>
      <h2 className='frm-auth__title'>
        {isLoginForm ? 'Entrar' : 'Cadastrar'}
      </h2>
      <fieldset className='frm-auth__fieldset'>
        <label htmlFor='email' className='frm-auth__label'>
          Email
        </label>
        <input
          ref={emailRef}
          type='email'
          name='email'
          id='email'
          placeholder='Insira e-mail'
          className='frm-auth__input'
          onChange={(e) => setUserEmail(e.target.value)}
          required
        />
      </fieldset>
      <fieldset className='frm-auth__fieldset'>
        <label htmlFor='password' className='frm-auth__label'>
          Senha
        </label>
        <input
          ref={passwordRef}
          type='password'
          id='password'
          name='password'
          placeholder='Insira a senha'
          className='frm-auth__input'
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />
      </fieldset>
      {!isLoginForm && (
        <fieldset className='frm-auth__fieldset'>
          <label htmlFor='user' className='frm-auth__label'>
            Nome do usuário
          </label>
          <input
            ref={nameRef}
            type='text'
            id='user'
            name='user'
            placeholder='Insira seu nome de usuário'
            className='frm-auth__input'
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </fieldset>
      )}
      <footer className='frm-auth__footer'>
        {isLoginForm ? (
          <>
            <Button
              label='Entrar'
              classMod='blue button__blue_login'
              onClick={handleLoginSubmit}
            />
            <span>
              ou
              <button
                type='button'
                className='frm-auth__button_link'
                onClick={changeForm}
              >
                Inscreva-se
              </button>
            </span>
          </>
        ) : (
          <>
            {!isSuccessSubmit ? (
              <>
                {/* FormAction in the button below overrides element<form> action */}
                <Button
                  onClick={handleSignupSubmit}
                  label='Cadastrar'
                  classMod='blue button__blue_login'
                />
                <span>
                  ou{' '}
                  <button
                    type='button'
                    className='frm-auth__button_link'
                    onClick={changeForm}
                  >
                    Entrar aqui
                  </button>
                </span>
              </>
            ) : (
              <div className='frm-auth__status'>
                <p className='frm-auth__msg'>
                  PARABÉNS! cadastro realizado com sucesso
                </p>
                <p className='frm-auth__msg'>
                  Clique no link abaixo para entrar
                </p>
                <button
                  type='button'
                  className='frm-auth__button_link'
                  onClick={changeForm}
                >
                  Entrar aqui
                </button>
              </div>
            )}
          </>
        )}
      </footer>
    </form>
  );
}
