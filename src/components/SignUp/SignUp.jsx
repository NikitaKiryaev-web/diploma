import { useForm } from "react-hook-form";
import formSignUpOptions from "../../utils/validSchemas/signUpSchema";
import './SignUp.scss';

function SignUp (props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm(formSignUpOptions);
  
  function onSubmit (e) {
    e.preventDefault();
    console.log('Sign Up success!');
  }

  return(
    <section className="signup">
      <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="signup__fieldset">
          <input
            {...register('name')}
            type="text" 
            name="name"
            id="name"
            placeholder="Введите ваше имя"
            className="signup__input" />
          <span className="signup__input-error">{errors.name?.message }</span>
        
          <input
            {...register('email')}
            type="email" 
            name="email"
            id="email"
            placeholder="Введите ваш e-mail" 
            className="signup__input" />
            <span className="signup__input-error">{errors.email?.message }</span>

          <input
            {...register('password')}
            type="password" 
            name="password"
            id="password"
            placeholder="Введите ваш пароль" 
            className="signup__input" />
            <span className="signup__input-error">{errors.password?.message }</span>
        
          <button className="signup__submit" type="submit">Зарегистрироваться</button>
        </fieldset>
      </form>
    </section>
  )
}


export default SignUp;