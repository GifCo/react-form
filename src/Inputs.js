import React, { useState } from 'react'
// import Input from '../../StyleComps/Input'
// import ValidationMsg from '../../StyleComps/ValidationMsg'
import styled, {css} from 'styled-components'

const Input = styled.input`
    width: 100%;
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    font-family: Arial;

    &:focus{
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }

    ${ (props) => props.error && css `border-color: red`}
`

const InputSelect = styled.select`
    width: 100%;
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;

    &:focus{
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
`

const InputTexarea = styled.textarea`
    width: 100%;
    display: block;
    padding: .375rem .75rem;
    font-size: 1rem;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    resize: vertical;
    font-family: Arial;

    &:focus{
        color: #495057;
        background-color: #fff;
        border-color: #80bdff;
        outline: 0;
        box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
`
const ValidationMsg = styled.span`
    display: block;
    color: red;
    /* color: #721c24; */
    /* background: #f8d7da; */
    /* width: 100%; */
    /* height: 40px; */
    /* padding: 0 2rem; */
    /* line-height: 40px; */
    margin-top: .25rem;
    opacity: 0;
    transition: all .5s linear;

    ${ (props) => props.show && css `opacity: 1`}
`


export const FormInput = ({type="text", style, name, id, validate, placeholder, setValue}) => {
    
    const [ input, setInput ] = useState('')
    const [ error, setError ] = useState({error: false, msg: ''})

    const inputChange = (e) => {
        const value = e.target.value
        setInput(value)
        //null check becuase setValue has to be type optional as prop is not passed directly but by React.cloneElement
        if(setValue) setValue({[name] : value})
    }

    const checkValidation = () => {
        if(validate && input !== ''){
            setError(validate(input))
        }
    }
    
    return (
        <>
            <Input 
                id={id} 
                name={name} 
                value={input} 
                type={type}
                placeholder={placeholder}
                onChange={inputChange}
                onBlur={checkValidation}
                error={error.error}
                style={style} 
            />
            <ValidationMsg show={error.error ? true : false}>{error.msg}</ValidationMsg>
        </>
    )
}

export const FormSelect = ({ style, name, id, setValue, ...props}) => {
    
    const [ input, setInput ] = useState('')

    const inputChange = (e) => {
        const value = e.target.value
        setInput(value)
        if(setValue) setValue({[name] : value})
    }
    
    return (
        <>
            <InputSelect 
                id={id}
                value={input}
                name={name}
                style={style}
                onChange={inputChange}
            >
                {props.children}
            </InputSelect>
        </>
    )
}

export const FormTextarea = ({ style, name, id, rows, validate, setValue}) => {
    
    const [ input, setInput ] = useState('')
    const [ error, setError ] = useState({error: false, msg: ''})

    const inputChange = (e)  => {
        const value = e.target.value
        setInput(value)
        //null check as setValue must be typed as optional because it is not passed directly
        if(setValue) setValue({[name] : value})
    }

    const checkValidation = () => {
        if(validate && input !== ''){
            setError(validate(input))
        }
    }
    
    return (
        <>
            <InputTexarea 
                id={id}
                name={name}
                style={style}
                onChange={inputChange}
                onBlur={checkValidation}
                rows={rows}
            />
            <ValidationMsg show={error.error ? true : false}>{error.msg}</ValidationMsg> 
        </>
    )
}