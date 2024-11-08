import React from 'react'

const Form = ({ mode, setEmail, setGender, setName, addtodolist, count, gender, setMode, error, handlesubmit, setError }) => {
    return (
        <form className={`w-50 mx-auto p-3 rounded shadow ${mode ? 'bg-white text-dark' : 'bg-dark text-white'}`} onSubmit={handlesubmit} >
            <h1>Add Todo</h1>
            <h1>{count}</h1>
            <label>Name
                <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Your name here'></input>
            </label><br></br>
            <label>email
                <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Your email here'></input>
            </label><br></br>
            <label>
                gender
                <select onChange={(e) => setGender(e.target.value)} value={gender}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                {error && <p style={{ color: 'red' }}>please fill in all feilds.</p>}
            </label><br></br>
            <button type='button' onClick={addtodolist}>Submit</button><br>
            </br>

            <button type='button' onClick={() => setMode(!mode)}>Anotherbutton</button>

        </form>

    )
}

export default Form