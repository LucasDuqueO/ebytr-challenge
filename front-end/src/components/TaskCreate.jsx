import React from "react";
import { Link } from "react-router-dom";

function TaskCreate() {
    return (<div>
      <Link to='/'>Task List</Link>
      <Link to='/edit/0'>Task Update</Link>
      Task Create
    </div>)
}
 
export default TaskCreate;