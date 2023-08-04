import React from "react";
import "./Project.css";
import { ShowProject } from "../../Components/ShowCard/ShowProject";
import img from "../../Assets/Images/honey-admin.png";
import { useNavigate } from "react-router-dom";

const project = [
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: false,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: false,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: false,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: false,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: true,
  },
  {
    id: 1,
    name: "Safari",
    img: img,
    about:
      "vel modi! Sapiente doloribus esse molestiae officiis ea quod aspernatur harum dolor! Soluta, doloribus?",
    like: 2,
    disLike: 0,
    visible: false,
  },
];

export function Project() {
  const navigate = useNavigate();
  return (
    <div id="Project">
      <div className="hedTitle">
        <h1>My Projects</h1>
        <button onClick={() => navigate("/addproject")}>Add New Project</button>
      </div>
      <ShowProject data={project} />
    </div>
  );
}
