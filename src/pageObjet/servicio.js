let opcion1,opcion2,opcion3

class servicio{
    get valordelservicio () { return $("#formGridvalordelservicio")}
     get estadodelservicio(){ return $("#formGridestadodelservicio")}
    get idusuario (){return $("#formGrididusuario")}
    get habilidad (){return $("#formGridhabilidad")}
    get btnGuardar() { return $ ("#btnguardar")}
    get opcionestadodelservicio() { return $(`//select[@id="formGridestadodelservicio"]//option[@value="${opcion1}"]`)}
    get opcionhabilidad() { return $(`//option[contains(text(), "${opcion2}")]`)}
    get opcionidusuario() { return $(`//option[contains(text(), "${opcion3}")]`)}




    async crearservicio({valordelservicio,estadodelservicio,habilidad,idusuario}){
        opcion1 = estadodelservicio
        opcion2 = habilidad
        opcion3 = idusuario
        await this.valordelservicio.setValue(valordelservicio)
        await this.estadodelservicio.click()
        await this.idusuario.click()
        await this.opcionidusuario.click()
        await this.habilidad.click()
      


         await this.btnGuardar.click()
    }
}

export default new servicio()