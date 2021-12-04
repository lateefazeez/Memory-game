import "./SingleCard.css"

const SingleCard = (props) => {
  const { card, handleChoice } = props
  return ( 
    <div className="card">
      <img src={card.src} alt="card front" className="front" />
      <img 
        src="/img/cover.png" 
        alt="card back" 
        className="back"
        onClick = {() => handleChoice(card)} 
      />
    </div>
   );
}
 
export default SingleCard;