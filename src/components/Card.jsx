import styleCard from './Card.module.css'

const Card = ({msj}) => {
 
  return (
    <div className={styleCard.container}>
     {msj}
    </div>
  )
}

export default Card
