import styleCard from './Card.module.css'

const Card = ({user:{name, language}}) => {

  return (
    <div className={styleCard.container}>
    <h3>Gracias 😄 {name} !</h3>
    <p>Tu lenguaje favorito es: <strong>{language}</strong></p>
    </div>
  )
}

export default Card
