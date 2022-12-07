import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function CreateCard(contact){
return(
  <Card
key={contact.id}
name={contact.name}
img={contact.imgURL}
tel={contact.phone}
email={contact.email}
/>
);
}
function App() {
  return (
    <div>
      <h1 className ="heading">My Contacts</h1>
      <Avatar img="https://imgs.search.brave.com/PJdUUHZfMBXLe989mjZtkFli54PbGdWCi5mVwOrd6RM/rs:fit:371:371:1/g:ce/aHR0cHM6Ly9uYXNl/ZW0wMTAuZ2l0aHVi/LmlvL0NWL2ltYWdl/L2ZhaGVlbS5wbmc" />
      {contacts.map(CreateCard)}
      {/* <Card 
        name={contacts[0].name}
        img= {contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
         name={contacts[1].name}
        img= {contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
        <Card 
         name={contacts[2].name}
        img= {contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
        /> */}
    </div>
  );
}
export default App;