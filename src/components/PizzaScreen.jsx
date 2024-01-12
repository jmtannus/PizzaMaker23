
/**
 * @typedef {Object} Props
 * @property {string} Props.molho - pode ser `vermelho` ou `amarelo`
 * @property {string} Props.borda - pode ser `borda`, `tradicional` ou `fina`
 * @property {Array<string>} Props.tipos - pode ser `carne` ou `verdura` 
 * 
 * @param {Props} props 
 * @returns 
 */
export function PizzaScreen({ molho, tipos, borda }) {
  let bordaTipo = '';

  switch (borda) {
    case 'borda':
      bordaTipo = 'Pizzaa-01';
      break;
    case 'tradicional':
      bordaTipo = 'Pizzaa-02';
      break;
    case 'fina':
      bordaTipo = 'Pizzaa-03';
      break;
  }

  const bordaUrl = `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/${bordaTipo}.png?t=1670932317000`
  
  const molhoUrl = 
    molho === 'amarelo' ? 
    `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-04.png?t=1670932317000`
    : `https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Pizzaa-05.png?t=1670932317000`
  
  let tipoUrl;

  if (tipos.length === 2) {
    tipoUrl = 'https://studio.code.org/v3/assets/ai36I_gY5JPKznE1ttg-CqVl0NhRRSPu1b34n7Ctx6c/Non-veg.png?t=1671892191000'
  } else {
    if (tipos[0] === 'carne'){
      tipoUrl = 'https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/veg-nonveg.png?t=1670932317000'
    }
    if (tipos[0] === 'verdura'){
      tipoUrl = 'https://studio.code.org/v3/assets/1M0wVT7H--jMKxjDJMc3ZQZGs7pYH3KRZNxtxFT3m3U/Veg.png?t=1670932317000'
    }
  } 




  return (
    <section id="screenPizza">
      <div id="imagens">
        <img
          id="imageBase"
          src={bordaUrl}
          alt="massa"
        />

        <img
          src={molhoUrl}
          alt="molho"
        />

        {tipoUrl && 
        
          <img
            src={tipoUrl}
            alt="recheio"
          />
        }
        
      </div>

    </section>
  );
}
