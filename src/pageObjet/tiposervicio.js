

let  opcion

class tiposervicio{
    get  tipohabilidad (){return $("#formGridtipohabilidad")}
    get btnguardartiposervicio (){return $("#btnguardartiposervicio")}
    get btnvolveralinicio (){return $("#btnvolveralinicio")}

    async creartipohabilidad({tipohabilidad}){

        await  this.tipohabilidad.click()

        await this.btnguardartiposervicio.click()
        await this.btnvolveralinicio.click()


    }

}

export default new tiposervicio()