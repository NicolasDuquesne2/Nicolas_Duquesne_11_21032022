import Header from "../../componants/Header"
import DropDown from "../../componants/Dropdown"
import heroImage from "../../assets/mountains.png"
import './about.scss'

const dropdowns = [
  {
    title: 'Fiabilité',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
  },

  {
    title: 'Respect',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
  },

  {
    title: 'Service',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
  },

  {
    title: 'Responsabilité',
    text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua'
  }
]


function About() {
    return (
      <div className="wrapper">
        <Header 
          selected= 'about'
        />
        <div className="about-hero-wrapper">
          <img className="home-hero-image" src= {heroImage} alt='mountains'/>
        </div>
        <div className="about-background">
          <div className="about-background__wrapper">
            {dropdowns.map((dropdown, index) => (
              <DropDown
                key={`${dropdown.title}-${index}`}
                title={dropdown.title}
                text={dropdown.text}
                page='about'
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  export default About