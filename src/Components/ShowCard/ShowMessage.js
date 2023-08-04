import React from "react";
import visible from "../../Assets/Icons/Visible.svg";
import { useNavigate } from "react-router-dom";

export function ShowMessage({ data }) {
  const navigate = useNavigate();
  return (
    <div id="tabCard">
      <table className="table">
        <thead className="title">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
            <th>Feedback</th>
            <th>Phone</th>
            <th>See</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((item) => {
            return (
              <tr className="feedcard card">
                <th>{item.id}</th>
                <th>{item.name}</th>
                <th>{item.surname}</th>
                <th>{item.email}</th>
                <th>{item.feedback}</th>
                <th>{item.phone}</th>
                <th>
                  <img
                    src={visible}
                    alt=""
                    onClick={() => navigate(`/view-message/${item.id}`)}
                    style={{ cursor: "pointer" }}
                  />
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
