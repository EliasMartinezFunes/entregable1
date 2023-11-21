import "./styles/QuoteBox.css";

const QuoteBox = ({ quote, handleChangeQuote }) => {
    const {phrase, author} = quote;
    
  return (
    <article className="quotebox">
        <h1 className="quotebox__title">GALLETAS DE LA FORTUNA</h1>
        <button className="quotebox__btn" onClick={handleChangeQuote}>Probar mi suerte</button>
        <dir className="quote__box">
            <p>{phrase}</p>
        </dir>
        <span className="quotebox__author">{author}</span>

    </article>
  )
}

export default QuoteBox