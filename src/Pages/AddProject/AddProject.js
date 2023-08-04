import React from "react";
import "./AddProject.css";

export function AddProject() {
//   const [project, setProject] = useState([]);

  return (
    <div id="AddCard">
      <form className="AddForm" onSubmit={{}}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Netlify link" />
        <input type="text" placeholder="Github link" />
        <select>
          <option selected disabled>
            Created
          </option>
          <option value="my self">With my self</option>
          <option value="our team">With our team</option>
        </select>
        <div>
          <label>
            <div>+</div>
          </label>
        </div>
        <textarea placeholder="About project"></textarea>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}
