import { useEffect } from "react";
import { useState } from "react";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState({});
  const [error, setError] = useState(null);
  const apiIdLink = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;

  useEffect(() => {
    async function fetchOneUser() {
      try {
        const response = await fetch(apiIdLink);
        const result = await response.json();
        setContact(result);
        console.log(result);
      } catch {
        setError("Someting is wrong");
      }
    }
    fetchOneUser();
  }, []);
  
  return (
    <>
      <h2>{contact.name}</h2>
      <h2>{contact.email}</h2>
      <h2>{contact.phone}</h2>
    </>
  );
}