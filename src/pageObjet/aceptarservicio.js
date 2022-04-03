let opocion,opcion2,opcion3

class aceptarservicio{
    get idusuario (){return $("#formGridnombre")}
    get valordelservicio () { return $("#formGridvalordelservicio")}
    get habilidad (){return $("#formGridhabilidad")}
    get btnGuardar() { return $ ("#btnguardar")}
    get opcionhabilidad() { return $(`//option[contains(text(), "${opcion2}")]`)}
    get opcionidusuario() { return $(`//option[contains(text(), "${opcion3}")]`)}


    async crearaceptarservicio ({valordelservicio,habilidad,idusuario}){
        opcion2 = habilidad
        opcion3 = idusuario

        await this.idusuario.click()
        await this.opcionidusuario.click()
        await this.valordelservicio.setValue(valordelservicio)
        await this.habilidad.click()
        await this.opcionhabilidad.click()
        await browser.pause(5000)

        // await this.btnGuardar.click()
    }
}
export default new aceptarservicio()