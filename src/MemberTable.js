import React from 'react';
import './MemberTable.css'; // import your CSS file

function MemberTable() {
  return (
    <div className="member-table-container">
      <h2 className="member-table-title">Team Members</h2>
      <table className="member-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Smith</td>
            <td>Project Manager</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>Developer</td>
          </tr>
          <tr>
            <td>Bob Johnson</td>
            <td>Designer</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MemberTable;
