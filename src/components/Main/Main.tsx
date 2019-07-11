import React from 'react'
import './Main.scss'

const Main: React.FC = () => {
  return (
    <div className="welcome">
      <div>
        <h1>Welcome to Centauri Project</h1>
        <p>Project is under development</p>
        <p>Check out our <a href="https://github.com/project-centauri">Github</a> for future updates</p>
      </div>
    </div>
  )
}

export default Main