import React, {useState} from 'react';
import Trie from './trie'
import PropTypes from 'prop-types'

const Options = (props)=>{
    const [optionList, setOptionList] = useState([])
    
    const handleFocus = ()=>{
        props.children ? 
        setOptionList(props.children.map(child=>(child.props.children))) : null
    }
    const handleBlur = ()=>{
        setOptionList([])
    }
    const handleMouseDown = (e)=>{
        let value = e.target.innerHTML
        let input = document.getElementById('input')
        input.value = value
        props.handleInput(value)
    }
    const handleChange = (e)=>{
        if(props.children){
        let myTrie = new Trie()
        for(var i = 0; i < props.children.length; i++){
            myTrie.add(props.children[i].props.children)
        }
        let words = myTrie.getWord(e.target.value)
        setOptionList(words)
        } else{
            return null
        }
    }


    return (
        <div>
            <input 
                    id ='input'
                    type="text" 
                    placeholder={props.placeholder} 
                    className={props.inputClassName} 
                    onFocus={handleFocus} 
                    onBlur = {handleBlur} 
                    onChange = {(event)=>(handleChange(event))}
                    />
            {
            optionList ? 
            (
            <div>
                <div  className = 'options'>
                    <ul className={props.listClassName} >
                    {
                       optionList.map((option, index)=>(<li key = {index} className={props.optionsClassName}  onMouseDown={(e)=>(handleMouseDown(e))}>{option}</li>))
                    }
                    </ul>
                </div>
            </div>
            ) : null
            }
        </div>
    )
}

Options.defaultProps = {
    placeholder: 'please search options',
    inputClassName: 'input',
    listClassName: 'list',
    optionsClassName: 'option',
    handleInput: ()=>{
        return null
    }
}

Options.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object),
    handleInput: PropTypes.func
}


export default Options