export default class InventoryPage {
    constructor(page) {
        this.page = page;
        this.title = '.title'
    }
async verificarPaginaInventario(url, titulo_secao){

    
    // await expect(page).toHaveURL(/invertoru\.html/) // verifica URL
    // // const url_esperada = `/${url}\.htm/`
    // await this.page.waitForURL(url_esperada)
    // const url_atual = this.page.url()

        await this.page.waitForSelector(this.title)
        const tituloSecao = await this.page.textContent(this.title)
        //await expect(page).toHaveUrl(/invertory\.html/)  // verificar URL

        
        if (!tituloSecao.includes(titulo_secao)) { //|| url_atual.includes(url_esperada)){
            throw new Error('Login falhou: não é a pagina de inventário.')
        }    
    }
}