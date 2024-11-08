import React from 'react'

const EditTodo = ({ mode, setEditEmail, editEmail, setEditGender, setEditName, editName, saveChanges, count, editGender, setMode, error, handleEdiutsubmit, setError }) => {
    return (
        <div>
            <form className={`w-50 mx-auto p-3 rounded shadow ${mode ? 'bg-white text-dark' : 'bg-dark text-white'}`} onSubmit={handleEdiutsubmit} >
                <h1>Edit Todo</h1>
                <h1>{count}</h1>
                <label>Name
                    <input value={editName} type='text' onChange={(e) => setEditName(e.target.value)} placeholder='Your name here'></input>
                </label><br></br>
                <label>email
                    <input value={editEmail} type='email' onChange={(e) => setEditEmail(e.target.value)} placeholder='Your email here'></input>
                </label><br></br>
                <label>
                    gender
                    <select onChange={(e) => setEditGender(e.target.value)} value={editGender}>
                        <option value="">Select</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    {error && <p style={{ color: 'red' }}>please fill in all feilds.</p>}
                </label><br></br>
                <button type='button' onClick={saveChanges}>Save Changes</button><br>
                </br>

                <button type='button' onClick={() => setMode(!mode)}>Anotherbutton</button>

            </form>
        </div>
    )
}

export default EditTodo