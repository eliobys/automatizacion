import crearUsuraio from '../pageObjet/usuario'
import * as infoUsuario from "../../src/data/informacionUsuarios.json"
import * as urls from "../../src/utils/hostURL.json"

describe('Tests para crear un usuario de tipo X', async () => {

    before('Cargando pagina principal' , async() => {
        await browser.url(urls.BASE_URL)
    })

    it('Crear usuario', async () => {
    
        await crearUsuraio.crearUsuario(infoUsuario)
 
    })
})