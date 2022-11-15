import JatekModel from "../Model/JatekModel.js"
import JatekokView from "../View/JatekokView.js";
import JatekView from "../View/JatekView.js";

class JatekController{
    constructor(){
       const jatekModel = new JatekModel();
       jatekModel.adatBe("../jatek.json",this.jatekAdatok)
       $(window).on("csokk",(event)=>{
        jatekModel.mennyisegCsokk(event.detail, this.jatekAdatok);
       })
    }
    jatekAdatok(tomb){
        let szuloElem =$("main");
        new JatekokView(tomb, szuloElem)
    }
}
export default JatekController