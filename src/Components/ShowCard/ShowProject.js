import React from "react";
import "./Style.css";

import deleteIcon from "../../Assets/Icons/Delete.svg";
import like from "../../Assets/Icons/Like.svg";
import dislike from "../../Assets/Icons/Dislike.svg";
import visible from "../../Assets/Icons/Visible.svg";
import hidden from "../../Assets/Icons/Hidden.svg";

export function ShowProject({ data }) {
  return (
    <div id="tabCard">
      <table className="table">
        <thead className="title">
          <tr>
            <th>ID</th>
            <th>Img</th>
            <th>Name</th>
            <th>About</th>
            <th>Operation</th>
            <th>Visible</th>
            <th>
              <img src={like} alt="" />
            </th>
            <th>
              <img src={dislike} alt="" />
            </th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.map((item) => {
            return (
              <tr className="card">
                <th>{item.id}</th>
                <th className="figure">
                  <img src={item.img} alt="" />
                </th>
                <th>{item.name}</th>
                <th className="aboutTr">{item.about}</th>
                <th>
                  <img style={{ cursor: "pointer" }} src={deleteIcon} alt="" />
                </th>
                <th>
                  <img
                    style={{ cursor: "pointer" }}
                    src={item.visible ? visible : hidden}
                    alt=""
                  />
                </th>
                <th>{item.like}</th>
                <th>{item.disLike}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
