import React from "react";
import { Link } from "react-router-dom";

function TaskUpdate() {
    return (<div>
      <Link to='/'>Task List</Link>
      <Link to='/edit/0'>Task Create</Link>
      Task Update
    </div>)
}
 
export default TaskUpdate;