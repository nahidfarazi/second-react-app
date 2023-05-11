import React, { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
const Help = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setName('Nahid');
      console.log("name change");
    }, 3000);
  }, []);
  const data = [
    {
      name: "Rafiq",
      email: "rafiq@gmail.com",
    },
    {
      name: "Nahid",
      email: "nahid@gmail.com",
    },
    {
      name: "jewel",
      email: "jewel@gmail.com",
    },
  ];
  return (
    <>
      <Layout>
        {/* this is an  */}
        <h1>hello {name || "Guest"}, I am help page</h1>

        {/* this a ternary operator */}
        {data.length > 0 ? (
          <ul>
            {data.map((person) => (
              <li>
                {person.name}-({person.email})
              </li>
            ))}
          </ul>
        ) : (
          <p>There is no data</p>
        )}
      </Layout>
    </>
  );
};

export default Help;
