import crearservivio from '../pageObjet/servicio'
import * as infoservicio from "../../src/data/informacionservicio.json"
import * as urls from "../../src/utils/hostURL.json"

describe('Tests para crear un servicio de tipo X', async () => {

    before('Cargando pagina principal' , async() => {
        await browser.url(urls.BASE_SERVICIO_URL)
    })

    it('Crear servicio', async () => {
    
        await crearservivio.crearservicio(infoservicio)
 
    })
})