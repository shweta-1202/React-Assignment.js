import React from "react";

// Define the Greeting functional component
const Greeting = ({ name }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
    </div>
  );
};

// Define the UserCard functional component
const UserCard = ({ username, email, age }) => {
  return (
    <div style={styles.card}>
      <h2>User Card</h2>
      <p>
        <strong>Username:</strong> {username}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
    </div>
  );
};

// Define the Profile functional component
const Profile = ({ user }) => {
  // Destructure nested objects from the user prop
  const {
    name,
    email,
    address: { street, city, country },
  } = user;

  return (
    <div style={styles.profile}>
      <h2>User Profile</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <div>
        <h3>Address</h3>
        <p>
          <strong>Street:</strong> {street}
        </p>
        <p>
          <strong>City:</strong> {city}
        </p>
        <p>
          <strong>Country:</strong> {country}
        </p>
      </div>
    </div>
  );
};

// Define the Button functional component
const Button = ({ label = "Click Me" }) => {
  return <button style={styles1.button}>{label}</button>;
};

const App = () => {
  // Sample user object
  const user = {
    name: "Vaishali",
    email: "vaishali@example.com",
    address: {
      street: "Ashok nagar, Kandivali",
      city: "Mumbai",
      country: "India",
    },
  };

  return (
    <div>
      {/* Greeting component with different names */}
      <Greeting name="Shweta" />
      <Greeting name="Dev" />
      <Greeting name="Manjiri" />
      {/* UserCard components with different user details */}
      <UserCard username="Shweta" email="shweta@example.com" age={20} />
      <UserCard username="Dev" email="dev@example.com" age={15} />
      <UserCard username="Manjiri" email="manjiri@example.com" age={12} />
      {/* Profile component with user object */}
      <Profile user={user} />
      {/* Button components default and custom labels */}
      <Button /> {/* Will display a button with default label "Click Me" */}
      <Button label="Submit" />{" "}
      {/* Will display a button with label "Submit" */}
    </div>
  );
};

// Define styles for the card component
const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "16px",
    margin: "16px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

// Define styles for the button
const styles1 = {
  button: {
    fontSize: "1.2em",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff", // Blue background color
    color: "white",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default App;
