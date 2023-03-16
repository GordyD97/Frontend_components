import React from 'react'

const Resistration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

     const handleSubmit = (e) => {
    e.preventDefault();
    // here is the way to handle the sumbmission form 
     };
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <div className="mb-4">
        <label
          htmlFor="firstName"
          className="block text-gray-700 font-bold mb-2"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="border rounded-lg px-3 py-2 w-full"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-700 font-bold mb-2"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="border rounded-lg px-3 py-2 w-full"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
    </form>
  );
};

export default Resistration;