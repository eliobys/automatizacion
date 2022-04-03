
let opcion, opcion1

class Usuario {

    get nombre() { return $("#formGridnombre")}
    get apellido() { return $("#formGridapellido")}
    get tipoDeDocumento() {return $("#formGridtipodedocumento")}
    get cedula () { return $("#formGridcedula")}
    get correoelectronico() {return $("#formGridcorreoelectronico")}
    get direccion() {return $("#formGriddireccion")}
    get contraseña () {return $("#formGridcontrasena")}
    get numerodetelefono() {return $("#formGridnumerodetelefono")}
    get ciudadderesidencia () { return $("#formGridciudadderesidencia")}
    get btnGuardar() { return $("#btnGuardar")}
    // get btnpedirservicio () { return $("#formGridbtnpedirservicio")}
    // get btnaceptarservicio() {return $("#btnaceptarservicio")}
    // get btnagregarhabilidad () { return $("#btnagregarhabilidad")}
    get opcionRol() { return $(`//select[@id="formGridRol"]//option[@value="${opcion}"]`)}
     get opcionhabilidad() { return $(`//select[@id="formGridHabilidad"]//option[@value="${opcion1}"]`)}

    async crearUsuario  ({nombre,apellido ,opcionRol,tipoDeDocumento,cedula,correoelectronico,direccion,
        contraseña,ciudadderesidencia,opcionhabilidad,numerodetelefono}) {
         opcion = opcionRol
         opcion1 = opcionhabilidad
         await this.nombre.setValue(nombre)
         await this.apellido.setValue(apellido)
         await this.tipoDeDocumento.setValue(tipoDeDocumento)
         await this.cedula.setValue(cedula)
         await this.correoelectronico.setValue(correoelectronico)
         await this.direccion.setValue(direccion)
         await this.contraseña.setValue(contraseña)
         await this.ciudadderesidencia.setValue(ciudadderesidencia)
         await this.numerodetelefono.setValue(numerodetelefono)

         await this.opcionRol.click()
          await this.opcionhabilidad.click()
         await this.btnGuardar.click()
        //  await this.btnaceptarservicio.click()
        //  await this.btnagregarhabilidad.click()
        //  await this.btnaceptarservicio.click ()
        //  await this.btnpedirservicio.click()
     }
}

export default new Usuario()