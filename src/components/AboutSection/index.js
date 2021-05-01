import './index.css'

import {Component} from 'react'

const skillsData = [
  {
    id: 0,
    name: 'HTML',
  },
  {
    id: 1,
    name: 'Java Script',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'Java',
  },
  {
    id: 4,
    name: 'Python',
  },
  {
    id: 5,
    name: 'React',
  },
  {
    id: 6,
    name: 'Node',
  },

  {
    id: 7,
    name: 'Bootstrap',
  },
]

const educationData = [
  {
    id: 0,
    qualification: 'Graduation',
    qualificationSource: 'B.Tech(Computer Science)',
  },
  {
    id: 1,
    qualification: 'Intermediate',
    qualificationSource: 'St.Ann’s Jr College',
  },
  {
    id: 2,
    qualification: 'High School',
    qualificationSource: 'Kimberley EM School',
  },
]

// Write your code here

class AboutSection extends Component {
  renderEducationItems = () =>
    educationData.map(eachItem => (
      <li key={eachItem.id}>
        <div className="list-item-education">
          <h1 className="qualification">{eachItem.qualification}</h1>
          <p className="qualificationSource">{eachItem.qualificationSource}</p>
        </div>
      </li>
    ))

  renderSkillItems = () =>
    skillsData.map(eachItem => (
      <li key={eachItem.id} className="skill-item">
        <p className="skill">{eachItem.name}</p>
      </li>
    ))

  render() {
    return (
      <div className="about-section">
        <h1 className="about-heading">About</h1>
        <p className="about-description">
          I started my journey in the world of computers from a young age, now
          I’m 21 years old, pursuing my Computer Science majors at Santa Clara
          University, USA. Web development is my center of interest.
        </p>
        <div className="education-skills-container">
          <div className="education-container">
            <h1 className="education-heading">Education</h1>
            <ul className="education-details-items-list">
              {this.renderEducationItems()}
            </ul>
          </div>
          <div className="skills-container">
            <h1 className="skills-heading">Skills</h1>
            <ul className="skill-items-list">{this.renderSkillItems()}</ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutSection
