import React from "react";
import "./FeedBack.css";
import { ShowMessage } from "../../Components/ShowCard/ShowMessage";

export function FeedBack() {
  const feedback = [
    {
      id: 1,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 2,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 3,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 4,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
    {
      id: 5,
      name: "Hojiakbar",
      surname: "Nasriddinov",
      email: "@hojiakbarnasriddino2006gmail.com",
      feedback:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia ipsam consectetur eos cum ratione iure illo corporis rem eius quasi.",
      phone: "992322323",
    },
  ];

  return (
    <div id="feedBack">
      <h1>Feedbacks</h1>
      <ShowMessage data={feedback} />
    </div>
  );
}
