# React-Form

A small simple Form plus Input components for React using hooks.

## Getting Started

Simply install from npm or yarn

```
npm install --save @gifco/react-form

or

yarn install --save @gifco/react-form
```

### Prerequisites

Requires React.js 16.8 or greater.


### Usage

First import the Form and any inputs you need

```
import { Form, FormInput, FormTextarea, FormSelect } from '@gifco/react-form'

```

Setup the form the way you would like. If you want submit button inside the form include a button element within Form

```
<Form onSubmit={handleSubmit}>
    <FormInput type="text" name="username"/>
    <FormInput name="password"/>                     //FormInput type defulats to text
    <FormTextarea name="comments"/>
    <button type="submit">Submit</button>
</Form>

```

Form values are passed to onSubmit handler as an object with key as input name and value as input value.

```
const handleSubmit = (values) => {
    //do stuff with form values
    //values === { username: 'somename', password: 'thepassword', comments: 'these are the commnets'}
}

```

Form validation is handled by passing a validation function to the specific inputs and is checked on input blur event. It should return an object { error: <true | false>, msg: 'The error msg'}

```
const validateName = (string) => {
    if(string.length < 8){
        return { error: true, msg: 'Please enter a name longer than 8 characters'}
    }else{
        return { error: false, msg: ''}
    }
}

<Form onSubmit={handleSubmit}>
    <FormInput type="text" name="username" validation={validateName}/>
    <FormInput name="password"/>
    <button type="submit">Submit</button>
</Form>


```

To use FormSelect just pass regular <option> elements as its children

```
<Form onSubmit={handleSubmit}>
    <FormSelect name="mySelect">
        <option value="option1>Option 1</option>
        <option value="option2>Option 2</option>
        <option value="option3>Option 3</option>
    </FormSelect>
    <button type="submit">Submit</button>
</Form>

```



## Built With

* [React.js](https://reactjs.org/docs/getting-started.html) - The web framework used
* [Webpack](https://webpack.js.org/concepts) - Dependency Management


## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Giff Boake** 

## License

This project is licensed under the MIT License
