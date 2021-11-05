import React from "react";
import { Link } from "react-router-dom";

function TaskList() {
    return (<div>
      <Link to='/create'>Task Create</Link>
      <Link to='/edit/0'>Task Update</Link>
      Task List
    </div>)
}
 
export default TaskList;