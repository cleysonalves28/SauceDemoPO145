// Deve ser utilizado quando for relizar a lista de exercicios

export default class HeaderPage {
    constructor(page) {
        this.page = page;
        this.menuButao = '#react-burger-menu-btn'
        this.tituloPage = '.app_logo'
        this.carinho = '[data-test="shopping-cart-link"]'       

    }

    async abrirMenu() {
        await this.page.click(this.menuButao)
    }

    async clicarCarrinho (){
        await this.page.click(this.carinho)
    }
}