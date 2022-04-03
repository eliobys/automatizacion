import crearaceptarservicio from '../pageObjet/aceptarservicio'
import * as infoaceptarservicio from "../../src/data/aceptarservicio.json"
import * as urls from "../../src/utils/hostURL.json"

describe('Tests para crear un servicio de tipo X', async () => {

    before('Cargando pagina principal' , async() => {
        await browser.url(urls.BASE_ACEPTARSERVICIO_URL)
    })

    it('Crear aceptar servicio', async () => {
    
        await crearaceptarservicio.crearaceptarservicio(infoaceptarservicio)
 
    })
})