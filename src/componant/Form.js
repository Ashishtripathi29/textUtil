import { useState } from 'react'

import './Form.css'
function Form(props) {
    const [text, setText] = useState("Eneter the text")

    function toUper() {
        let t = text.toUpperCase()
        setText(t)
       props.showData("text turn into upperCase mode",'success')
    
    }
    function removeSpace() {
        let t = text.replace(/\s+/g, ' ').trim();
        setText(t)
        props.showData("removeSpace from text",'success')
    }

    function tolower() {
      let   t = text.toLowerCase()
        setText(t)
        props.showData("text turn into lowerCase mode ",'success')
    }
    function cpatlize() {
      let   t = text.toLowerCase().split(" ").map(e1=>e1.charAt(0).toUpperCase()+e1.slice(1))
        setText(t.join(" "))
        props.showData("text turn into cpatlize mode",'success')
    }
    function clearText() {
        setText('')
        props.showData("text clear",'success')
    }

    let changer = (e) => {
        setText(e.target.value)
    }
    function henddleCopy() {
      navigator.clipboard.writeText(text)
      props.showData("text copyed",'success')
        
    }
    console.log(props.mode)
    let cls={
        backgroundColor:props.mode==='dark'?'black':'white',
        color:props.mode==='light'?'black':'white'
    }
    return <div className='container'>
        <div className="mb-3 ">
            <h1> Enter the text to </h1>
            <textarea className="form-control form" id="myBox" rows="6" value={text} onChange={changer} style={cls}></textarea>
            <button className='btn btn-primary tn-lg' onClick={toUper}>UPPER CASE</button>
            <button className='btn btn-primary tn-lg' onClick={tolower}>Lower CASE</button>
            <button className='btn btn-primary tn-lg' onClick={removeSpace}>Remove Space</button>
            <button className='btn btn-primary tn-lg' onClick={cpatlize}>cpatlize Text</button>
            <button className='btn btn-primary tn-lg' onClick={clearText}>Clear Text</button>
            <button className='btn btn-primary tn-lg' onClick={henddleCopy}>Copy Text</button>
        </div>
        <h2>Text summary </h2>
        <p>letter ={'>'} {text.length}</p>
        <p>word ={'>'} {text.length===0?0:text.split(" ").filter((e1)=>e1!=="").length}</p>
        <p> Time to read notes =={'>'} {(1 / 125) * text.split(" ").length} minutes</p>
        <h3> Preview </h3>
        <p> {text}</p>
    </div>
}
export default Form
