export function OpcoesTipo({onTipo}) {
  return (
    <section>
      <h2>Tipo:</h2>
      <ul>
        <CheckOption  onCheck={() => onTipo('Verdura')} id="1" label="Verdura"/>
        <CheckOption  onCheck={() => onTipo('Carne')} id="2" label="Carne"/>
      </ul>
    </section>
  );
}

function CheckOption({id, label, onCheck}){
  return (
    <li>
      <input 
        type="checkbox" 
        id={"checkbox" + id} 
        name="recheio" 
        value={label.toLowerCase()} 
        onClick={onCheck}
     />
      <label htmlFor={"checkbox"+id}>{label}</label>
    </li>
  )
}
