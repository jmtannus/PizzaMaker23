import { Header } from "./components/Header";
import { ImgClient } from "./components/ImgClient";
import { OpcoesMassa } from "./components/OpcoesMassa";
import { OpcoesMolho } from "./components/OpcoesMolho";
import { OpcoesTipo } from "./components/OpcoesTipo";

export function MakerScreen({submit, onChange}) {
    const changeBorda = (value) => {
        //const massa = 'tradicional';
        onChange((atual) => ({...atual, borda: massa}));
    };

    const changeMolho = (value) => {
        onChange((atual) => ({...atual, molho: value}));
    };

    const changeTipo = (value) => {
        onChange((atual) => ({...atual, tipo : value}));
    };
    
    return <div id="screenMaker">
        <Header/>
        <div className="row">
            {/* `onChange(
                (s) => ({...s, massa: 'vermelha'})
                )`
                quando a Massa for escolhida */}
            <OpcoesMassa onMassa={changeBorda} />
            {/* `onChange()` quando o Molho for escolhido */}
            <OpcoesMolho onMolho={changeMolho} />
        </div>
        <div className="row">
            {/* `onChange()` quando o Tipo for escolhido */}
            <OpcoesTipo onTipo={changeTipo}/>
            <ImgClient />
        </div>
        <footer>
            <button onClick={submit}>➡️</button>
        </footer>
    </div>;
}