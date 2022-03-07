import { useForm } from "react-hook-form";
import formSignInOptions from "../../utils/validSchemas/signInSchema.js";
import { NavLink, useNavigate } from "react-router-dom";
import './SignIn.scss';

function SignIn (props) {
  const { register, handleSubmit, formState: { errors } } = useForm(formSignInOptions);
  const navigate = useNavigate();
  
  function onSubmit (e) {
    console.log('Sign Up success!');
    navigate("/");
  }

  return(
    <section className="signin">
      <form className="signin__form" noValidate onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="signin__fieldset">
        
          <label htmlFor="email" className="signin__label"> E-mail
          <input
            {...register('email')}
            type="email" 
            name="email"
            id="email"
            placeholder="Введите ваш e-mail" 
            className="signin__input" />
            <span className="signin__input-error">{errors.email?.message }</span>
          </label>

          <label htmlFor="name" className="signin__label"> Пароль
          <input
            {...register('password',)}
            type="password" 
            name="password"
            id="password"
            placeholder="Введите ваш пароль" 
            className="signin__input" />
            <span className="signin__input-error">{errors.password?.message }</span>
            </label>
        
          <button className="signin__submit" type="submit">Войти</button>
        </fieldset>
      </form>
      <p className="signin__tip">Ещё не зарегистрированы? <NavLink className="signin__tip-link" to='/signup'> Зарегистрироваться</NavLink></p>
    </section>
  )
}


export default SignIn;