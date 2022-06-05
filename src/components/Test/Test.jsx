import './Test.scss';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import formTestOptions from '../../utils/validSchemas/testSchema.js';
import api from '../../utils/api.js';
import { useEffect, useState, useCallback } from 'react';
import TestCompleted from '../TestCompleted/TestCompleted.jsx';

function Test(props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);
    const [currentAnswer, setCurrentAnswer] = useState({});
    const [isCompleted, setIsCompleted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm(formTestOptions);
    function onSubmit() {
        if(currentQuestion + 1 < questions.length) {
            setAnswers([...answers, {code: currentAnswer}])
            setCurrentQuestion(prevState => prevState + 1);
        }
        else {
            console.log('Done');
            setAnswers([...answers, {code: currentAnswer}])
            setIsCompleted(true);
        }
    }

    const memoizedHandleChange = useCallback((e) =>  {
        setCurrentAnswer(e.target.value);
    }, [])

    const { id } = useParams();

    useEffect(() => {
        async function fetchData() {
        const result = await api.getQuestionsAndAnswers(id.slice(1))
        setQuestions([...result])
        }
        fetchData();
    }, [])

    return(
        <div className="test">
            { !isCompleted ?  
            questions.length ?
            <>
            <p className="test__counter">{currentQuestion + 1}/{questions.length}</p>
            <h2 className="test__question">{questions[currentQuestion].QuestionText}</h2>
            <form className="test__form" noValidate onSubmit={handleSubmit(onSubmit)}>
                {
                    questions[currentQuestion].Answer.map(answer => {
                        return(
                            <label className='test__label' key={answer.AnswerCode}>
                                <input {...register('answer')} name='answer' onChange={memoizedHandleChange} id={answer.AnswerCode} value={answer.AnswerCode} type="radio" className="test__radio" />
                                <span className='test__checkmark'></span>
                            {answer.AnswerText}
                            </label>
                        )
                    })
                }
                <button type='submit' className="test__submit">Готово</button>
                <span className='test__error'>{errors.answer?.message}</span>
            </form>
            </>
            :
            <p>Что-то пошло не так</p>
            :
            <TestCompleted testID={id.slice(1)} answers={answers}  />
}
        </div>
    )
}

export default Test;