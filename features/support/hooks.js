import { BeforeAll, AfterAll } from '@cucumber/cucumber'
import { chromium } from 'playwright'
 
// Linha de Tempo
// BeforeAll - Before - BeforeStep - Seu Teste - AfterStep - After - AfterAll
 
let browser, context, page  // variaveis do Playwright
 
BeforeAll(async () => {
    browser = await chromium.launch({headless: false})
    context = await browser.newContext()
    page = await context.newPage()
    global.page = page
})
 
AfterAll(async () => {
    await browser.close()
// Solução 1 - trocar browser.close() por process.exit(0)
    // process.exit(0) // aborta o processo e sinaliza sucesso
})
 
// Solução 2 - Cleyson - usar global no objeto browser
// import { After } from '@cucumber/cucumber'
 
// After(async function () {
//     await global.browser.close()
// })