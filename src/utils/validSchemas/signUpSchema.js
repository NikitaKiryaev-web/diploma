import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const signUpSchema = Yup.object().shape({
    name: Yup.string()
            .required('Это поле обязательно'),
    email: Yup.string()
            .email('Введите правильный e-mail')
            .required('Это поле обязятельно'),
    password: Yup.string()
            .min(6, 'Пароль должен содержать минимум 6 символов')
            .max(20, 'Пароль не может превышать 20 символов')
            .required('Это поле обязательно'),
});

const formSignUpOptions = {resolver: yupResolver(signUpSchema)};

export default formSignUpOptions;