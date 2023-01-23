import React from "react";

function MemberList(props) {

  const members = [
    {
      id: 'a',
      name: 'Will'
    },
    {
      id: 'b',
      name: 'Mike'
    },
    {
      id: 'c',
      name: 'Kate'
    }
  ]

  return (
    <ul>
      {members.map((member) => {
        return <li key={member.id}>{member.name}</li>
      })}
    </ul>
  );
}

export default MemberList;