function SignUp (props) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  function onSubmit () {

  }

  return(
    <section className="signup">
      <form className="signup__form" onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="signup__fieldset">
          <label htmlFor="email" className="signup__label">
            <input 
              type="email" 
              name="email"
              id="email"
              required
              placeholder="Введите ваш e-mail" 
              className="signup__input" />
          </label>
        </fieldset>
      </form>
    </section>
  )
}


export default SignUp;