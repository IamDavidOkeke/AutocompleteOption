# AutocompleteOption
React- Auto complete option is a react component library for building better search components

## Usage
```
import React { useState } from 'react';
import Select from 'react-autocomplete-options';

function Selector() {
  const [inputValue, setInputValue] = useState('');


  const handleInput = (input) =>{
    setInputValue(input)
  }



  return (
    <>
      <h1>Search options</h1>

      <Select handleInput = {handleInput}
          <option>United States</option>
          <option>United Kingdom</ option>
          <option>Canada</option>
          <option>France</option>
      </Select>
    </>
  );
}

ReactDOM.render(<Selector />, document.getElementById('root'))

```

## Interface 
The react autocomplete option returns a component similar to the HTML select tag but with superpowers. Similar to the datalist tag. It has an input for searching the options. The options update whenever there is a change in input value rendering only the options that match the input value.

You can get the input value  a user selects by passing a `handleInput` function as a prop to the component. And in this function you decide what to do with your input value.
**Note:** It must be a `handleInput` function.

## Styling 
Adding customized styles is easy. There are three components of the selector: 
- input box
- options container or list
- options

Style each individually by passing classnames as props to the Select component.
```
    <Select 
        handleInput = {handleInput}
        placeholder: 'please search options',
        inputClassName: 'input',
        listClassName: 'list',
        optionsClassName: 'option',
        >
          <option>United States</option>
          <option>United Kingdom</ option>
          <option>Canada</option>
          <option>France</option>
    </Select>
```

You can also pass placeholder for the input box as props to your component