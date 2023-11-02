import React, {useState} from 'react'
import '../style/App.css';

function Component(props) {
    const [form,setForm] = useState(0);
    const tambah = () => {
        setForm (form + 1)
    }
    const kurang = () => {
        setForm (form - 1)
    }

  return (
    <div>
            <p>{props.judul}</p>
            <button onClick={kurang}>-</button>
            <button>{form}</button>
            <button onClick={tambah}>+</button>
    </div>
  )
}

export default Component