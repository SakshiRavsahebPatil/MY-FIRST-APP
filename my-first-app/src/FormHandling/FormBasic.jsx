
import React , {useState}from 'react'

const FormBasic = () => {

    const [firstName, setFirstName] = useState('')

    const handleFirstNameChange =(e)=>{
        console.log(e.target.value);
        setFirstName(e.target.value)
    }
    

    const [lastName, setLastName] = useState('')

    const handleLastNameChange =(e)=>{
        console.log(e.target.value);
        setLastName(e.target.value)
    }


    const [email, setEmail] = useState('')

    const handleEmailChange =(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value)
    }

    const handleSubmit=(e)=>{
        //save data to DB or sent to same third party API
        console.log(`Inside submit button` );
        alert(`First Name : ${firstName} Last Name : ${lastName}  Email : ${email}`)
        e.preventDefault()
    }

  return (
    <>
      <h1>Form Handling</h1>
      <form onSubmit = {handleSubmit}>
          <div>
            First Name : <input type = 'text' name = '' id = '' value={firstName} onChange={handleFirstNameChange}/>
          </div>

        <br/>
          <div>
            Last Name : <input type = 'text' name = '' id = '' value={lastName} onChange={handleLastNameChange}/>
          </div>

        <br/>
        <div>
           Email : <input type = 'email' name = '' id = '' value={email} onChange={handleEmailChange}/>
          </div>

          <button type ="submit" >SUBMIT</button>
      </form>
    </>
  )
}

export default FormBasic
