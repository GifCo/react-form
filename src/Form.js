import React, { useState } from 'react'

const Form = ({onSubmit, ...props} ) => {

    const [ inputs, setInputs ] = useState({})

    const handleInput = (value ) => {
        setInputs({...inputs, ...value})
    }

    const submitForm = (e) => {
        e.preventDefault()
        onSubmit(inputs)
    }   

    return (
        <form onSubmit={submitForm}>
            {React.Children.map( props.children, (child) => {
                //check for submit button so setValue prop doesnt get passed to it
                if(child.type === 'button') return React.cloneElement(child)
                return React.cloneElement(child, { setValue : handleInput})
            })
            }
        </form>    
    )
}
export default Form