import React from 'react'

const Resistration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     const handleSubmit = (e) => {
    e.preventDefault();
    // here is the way to handle the sumbmission form 

  return (
    <div>Resistration</div>
  )
}

export default Resistration