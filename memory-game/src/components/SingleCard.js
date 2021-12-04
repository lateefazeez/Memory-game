import "./SingleCard.css"

const SingleCard = (props) => {
  const { card, handleChoice, flipped, disabled } = props

  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    }
  }
  return ( 
    <div className="card">
      <div className={ flipped? "flipped" : ""}>
        <img src={card.src} alt="card front" className="front" />
        <img 
          src="/img/cover.png" 
          alt="card back" 
          className="back"
          onClick={handleClick} 
        />
      </div>
     
    </div>
   );
}
 
export default SingleCard;