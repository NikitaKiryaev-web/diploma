import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
    login: Yup.string()
            .required('Это поле обязательно').default('')
            .max(9, 'Логин не может превышать 9 символов'),
    password: Yup.string()
             .required('Это поле обязательно').default('')
             .min(6, 'Пароль должен содержать минимум 6 символов')
             .max(20, 'Пароль не может превышать 20 символов'),
});

const formSignInOptions = {resolver: yupResolver(signInSchema)};

export default formSignInOptions;