import React from 'react';

const SingleStudent = (props) => {

  return (
    <div>
        <ul>
            <li>{props.student.firstName}</li>
            <hr />
        </ul>
    </div>
  )
}

export default SingleStudent
