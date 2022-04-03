import creartipohabilidad from '../pageObjet/tiposervicio'
import * as infotiposervicio from "../../src/data/informaciontiposervicio.json"
import * as urls from "../../src/utils/hostURL.json"


describe('Test para agregar una nueva habilidad', async ()=>{

    before('Cargando pagina de agregar nueva habilidad', async () => {
        await browser.url(urls.BASE_TIP_SERVICIO_URL)
    })
    
    it ('agregar habilidad', async () => {
        await creartipohabilidad.creartipohabilidad(infotiposervicio)
        await browser.pause(50000)
    })
})