// ComponentD.tsx (or wherever your ComponentD component is defined)
import React from "react";

interface ComponentDProps {
  postId: number; // Make sure ComponentD accepts the postId prop
  title: string;
  body: string;
}

const ComponentD: React.FC<ComponentDProps> = ({ postId, title, body }) => {
  return (
    <div>
      {/* <h1>Component D</h1> */}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        <tbody>
          <tr>
           <td>{postId}</td>
           <td>{title}</td>
           <td>{body}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComponentD;
