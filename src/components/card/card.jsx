import './styles.css';

const Card = ({ name, description }) => {
  return(
    <article className="cardContainer">
      <label>{name}</label>
      <p>{description}</p>
    </article>
  )
}

export default Card;