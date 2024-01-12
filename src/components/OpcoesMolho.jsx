export function OpcoesMolho({onMolho}) {
  return (
    <section>
      <h2>Molho:</h2>
      <ul>
        <Opcao onCheck={() => onMolho('vermelho')} id="5" value="vermelho"/>
        <Opcao onCheck={() => onMolho('amarelo')} id="4" value="amarelo"/>
      </ul>
    </section>
  );
}


function Opcao({id, value, onCheck}){
  const url = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-0${id}.png?t=1670932317000`
  
  return (
    <li>
    <input type="radio" id={"radio" + value} name="molho" value={value} onClick={onCheck} />
    <label htmlFor={"radio" + value}>
      <img className="img-icon" src={url} alt={"molho " + value} />
    </label>
  </li>
  )
}