import React, { useState } from "react";
import DB from "../core/firebase";
import { collection, query, getDocs, where } from "firebase/firestore";

function Header({ title }) {
  return <h1>{title ? title : "Default title"}</h1>;
} // this is a starter component from NextJS, ignore it.

export default function HomePage() {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false)

  const renderList = cases.map((item, idx) => <div key={idx}>{item.topic}</div>);

  async function handleClick() {
    setLoading(true) // show loading text

    const q = query(
      collection(DB, "Cases"),
      where("email", "==", "john_doe@gmail.com")
    ); // create query using where as your example

    const querySnapshot = await getDocs(q); // getting docs passing the query we created

    const records = []; // here we will push our docs
    querySnapshot.forEach((doc) => {
      records.push(doc.data());
    });

    setCases(records); // set our records in our state variables (cases)

    setLoading(false) // hide loading text
  }

  return (
    <ul>
      <Header title="Fetching firestore data 🚀" />
      <button style={{marginBottom: 10}} onClick={handleClick}>Fetch</button>
      {loading && <div>Loading...</div>}
      {cases && renderList}
    </ul>
  );
}
