// Write your code here
import './index.css'
import {Component} from 'react'
import AboutSection from '../AboutSection/index'
import ContactSection from '../ContactSection/index'
import HomeSection from '../HomeSection/index'
import NavBar from '../NavBar/index'
import ProjectSection from '../ProjectsSection'
import SocialMediaSection from '../SocialMediaSection/index'

class Portfolio extends Component {
  state = {
    selectedSection: 'HOME',
  }

  renderSelectedSection = () => {
    const {selectedSection} = this.state

    switch (selectedSection) {
      case 'ABOUT':
        return <AboutSection />
      case 'CONTACT':
        return <ContactSection />
      case 'PROJECTS':
        return <ProjectSection />
      default:
        return <HomeSection />
    }
  }

  onClickChangeSection = newSelectedSection => {
    this.setState({selectedSection: newSelectedSection})
  }

  render() {
    const {selectedSection} = this.state
    console.log(selectedSection)
    return (
      <div className="portfolio-container">
        <div>
          <NavBar
            selectedSection={selectedSection}
            onClickChangeSection={this.onClickChangeSection}
          />
        </div>
        <div className="portfolio-body-container">
          <div className="selected-section">{this.renderSelectedSection()}</div>
          <SocialMediaSection />
        </div>
      </div>
    )
  }
}

export default Portfolio
