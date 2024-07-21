import React, { useState } from "react";

const Controlled = () => {
  // Define the state variables for the form inputs
  const [name, setName] = useState(""); // Store the user's name
  const [message, setMessage] = useState(""); // Store the user's message
  const [acceptTerms, setAcceptTerms] = useState(false); // Store whether the user accepts the terms and conditions

  // Define the handleSubmit function to handle form submission
  const handleSubmit = (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Log the form data to the console
    console.log("Form data:", {
      name, //  user's name
      message, //  user's message
      acceptTerms, //  whether the user accepts the terms and conditions
    });

    // Optionally, you can reset the form fields after submission
    setName("");
    setMessage("");
    setAcceptTerms(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Text input for the name */}
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <br />

      {/* Text area for the message */}
      <label>
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Enter your message"
        />
      </label>
      <br />

      {/* Checkbox for accepting terms and conditions */}
      <label>
        <input
          type="checkbox"
          checked={acceptTerms}
          onChange={(event) => setAcceptTerms(event.target.checked)}
        />
        Accept terms and conditions
      </label>
      <br />

      {/* Submit button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Controlled;
