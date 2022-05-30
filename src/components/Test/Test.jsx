import './Test.scss';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import formTestOptions from '../../utils/validSchemas/testSchema.js';
import api from '../../utils/api.js';
import { useEffect, useState } from 'react';

function Test(props) {
    const [questions, setQuestions] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm(formTestOptions);
    function onSubmit() {
        console.log('Success');
    }

    const { id } = useParams();

    useEffect(() => {
        api.getQuestionsAndAnswers(id.slice(1))
            .then(res => {
                setQuestions(res);
                console.log(questions);
            })
    }, [])

    return(
        <div className="test">
            <p className="test__counter">1/3</p>
            <h2 className="test__question">В какой год произошло крещение Руси?</h2>
            <form className="test__form" noValidate onSubmit={handleSubmit(onSubmit)}>
                <label className='test__label'>
                    <input {...register('answer')} name='answer' id='1' type="radio" className="test__radio" />
                    <span className='test__checkmark'></span>
                    988 год
                </label>
                <label className='test__label'>
                    <input {...register('answer')} name='answer' id='2' type="radio" className="test__radio" />
                    <span className='test__checkmark'></span>
                    899 год
                </label>
                <label className='test__label'>
                    <input {...register('answer')} name='answer' id='3' type="radio" className="test__radio" />
                    <span className='test__checkmark'></span>
                    623 год
                </label>
                <label className='test__label'>
                    <input {...register('answer')} name='answer' id='4' type="radio" className="test__radio" />
                    <span className='test__checkmark'></span>
                    1132 год
                </label>
                <button type='submit' className="test__submit">Готово</button>
                <span className='test__error'>{errors.answer?.message}</span>
            </form>
        </div>
    )
}

export default Test;