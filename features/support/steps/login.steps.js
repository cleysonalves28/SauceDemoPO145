import { Given, When, Then } from'@cucumber/cucumber'
//import { chromium } from 'playwright'
import LoginPage from '../pages/LoginPage.js'
import InventoryPage from '../pages/inventoryPage.js'

//let browser, context, page    // variaveis para o Playwright
let loginPage, inventoryPage // variaveis para os mapeamentos de páginas

// // // OUTRA OPÇÃO
// Given('que estou na pagina de login', async () => {
//     global.browser = await chromium.launch({ headless: false })
//     context = await global.browser.newContext()
//     page = await context.newPage()
//     loginPage = new LoginPage(page)
//     inventoryPage = new InventoryPage(page)
//     await page.goto('https://www.saucedemo.com')
// })


Given('que estou na pagina de login', async () => {
    // essa parte estava redundante ja estava no hooks.js
    // browser = await chromium.launch( {headless: false})
    // context = await browser.newContext()
    // page = await context.newPage()
    loginPage = new LoginPage(page) // instanciar o objeto loginPage a partir
                                    // da classe LoginPage --> Sopro da vida
    inventoryPage = new InventoryPage(page)
    await page.goto('https://www.saucedemo.com')
})

When('preencho o {string} e a {string}', async (usuario, senha) => {
    await loginPage.login(usuario, senha)
});

When('clico em Login', async () => {
    await loginPage.clicar_no_botao_login()
})


Then('vou para a pagina {string} e vejo {string}', async (url, titulo_Secao) => {
    await inventoryPage.verificarPaginaInventario(url, titulo_Secao)
    await page.waitForTimeout(2000) // espera bruta de 2s // alfinite
    // await page.close()
    // solução 3 
    //await browser.close()

    // solução 4
    // Alterar a linha "test:bdd" no package.json
    // "scripts": {
//     "test:bdd": "cucumber-js --require features/support/**/*.js --exit"
//   },

});