class JatekModel{
    #jatekokTomb = []
    constructor(){

    }
    adatBe(vegpont, myCallBack){
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.#jatekokTomb = data.jatek;
                myCallBack(this.#jatekokTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    mennyisegCsokk(adat, megjelenitoFuggveny){
        this.#jatekokTomb[adat.id-1].db=this.#jatekokTomb[adat.id-1].db-1
        megjelenitoFuggveny(this.#jatekokTomb)
    }
}
export default JatekModel