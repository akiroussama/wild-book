import React from 'react'

function Skill({skill, votes}) {
  return (
        <li>
            {skill}
            <span className="votes">{votes}</span>
        </li>
  )
}

export default Skill