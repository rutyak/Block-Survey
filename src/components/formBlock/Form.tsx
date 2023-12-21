import React,{useState}  from 'react'
import add from '../../Asset/addition.png'
import addQue from '../../Asset/plus.png'
import './Form.css'

const Form = () => {

    const [addBtn, setAddBtn] = useState<boolean>(false);
    
    function handleAdd(e:any){
          setAddBtn(!addBtn);
    }
    return (
        <div className='form-container'>
            <h2>Survey Form Creation</h2>
            <div className='form'>
                <form>
                    <label>Title: <input className='input title' placeholder='Add title' /></label><br></br>
                    <label>Description: <input className='input desc' placeholder='Add description' /></label>
                    <p>Add at least 5 questions</p>
                </form>
                <div>
                    <img className='add-que' onClick={handleAdd} src={add} alt='add icon'/>
                </div>
            </div>
            { addBtn && <div className='questions-btn'>
                <button><p>Add question</p><img src={addQue} alt='addQue icon'/></button>
                <button><p>Add single choice</p><img src={addQue} alt='addQue icon'/></button>
                <button><p>Add multi choice</p><img src={addQue} alt='addQue icon'/></button>
            </div>}
        </div>
    )
}

export default Form
