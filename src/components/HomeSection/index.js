// Write your code here
import './index.css'
import {Component} from 'react'

class HomeSection extends Component {
  render() {
    return (
      <div className="home-section">
        <h1 className="heading">Sophie Millers</h1>
        <p className="profile-role">Full Stack Developer</p>
        <p className="profile-skills">
          Experienced in MongoDB, Express, ReactJS and Node.js, Bootstrap, HTML,
          CSS, SQL and Python.
        </p>
        <button className="button" type="button">
          View Resume
        </button>
      </div>
    )
  }
}

export default HomeSection
