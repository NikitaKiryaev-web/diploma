import { useForm } from "react-hook-form";
import formSignUpOptions from "../../utils/validSchemas/signUpSchema";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import './SignUp.scss';
import homeIcon from '../../images/home-icon.svg';

function SignUp (props) {
  const { register, handleSubmit, formState: { errors } } = useForm(formSignUpOptions);
  const navigate = useNavigate();
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  
  function onSubmit (e) {
    console.log('Sign Up success!');
    navigate("/signin");
  }

  return(
    <section className="signup">
      <form className="signup__form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <NavLink className="signin__home-link" to="/"><img src={homeIcon} className="signin__home-img" alt="Home page" /></NavLink>
        <fieldset className="signup__fieldset">
          <label htmlFor="name" className="signup__label"> Имя
          <input
            {...register('name')}
            type="text" 
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            className="signup__input" />
          <span className="signup__input-error">{errors.name?.message }</span>
          </label>
        
          <label htmlFor="email" className="signup__label"> E-mail
          <input
            {...register('email')}
            type="email" 
            name="email"
            id="email"
            placeholder="Введите ваш e-mail" 
            className="signup__input" />
            <span className="signup__input-error">{errors.email?.message }</span>
          </label>

          <label htmlFor="name" className="signup__label"> Пароль
          <input
            {...register('password',)}
            type="password" 
            name="password"
            id="password"
            placeholder="Введите ваш пароль" 
            className="signup__input" />
            <span className={isFirstSubmit ? "signup__input-info" : "signup__input-error"}>{isFirstSubmit ? "Минимум 6 символов" : errors.password?.message }</span>
            </label>
        
          <button className="signup__submit" type="submit" onClick={() => setIsFirstSubmit(false)}>Зарегистрироваться</button>
        </fieldset>
      </form>
      <p className="signup__tip">Уже зарегистрированы? <NavLink className="signup__tip-link" to='/signin'> Войти</NavLink></p>
    </section>
  )
}


export default SignUp;