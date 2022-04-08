import Header from "../../componants/Header"
import DropDown from "../../componants/Dropdown"
import './about.scss'
import Banner from "../../componants/banner"

const dropdowns = [
  {
    title: 'Fiabilité',
    text: `Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.`
  },

  {
    title: 'Respect',
    text: `La bienveillance fait partie des valeurs fondatrices de Kasa. 
           Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.`
  },

  {
    title: 'Service',
    text: `Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
           N'hésitez pas à nous contacter si vous avez la moindre question.`
  },

  {
    title: 'Responsabilité',
    text: `La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
           chaque logement correspond aux critères de sécurité établis par nos services. 
           En laissant une note aussi bien à l'hôte qu'au locataire, 
           cela permet à nos équipes de vérifier que les standards sont bien respectés. 
           Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`
  }
]


function About() {
    return (
      <div className="wrapper">
        <Header 
          selected= 'about'
        />
        <Banner 
          pageName = 'about'
        />
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