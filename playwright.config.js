import { defineConfig } from "playwright/test";

export default defineConfig({
    testDir: './features', // diretório / pasta onde estão os arquivos .feature
    timeout: 30000,
    retries: 1,  // rediscagem  / tentar de novo
    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: false,
        screenshot: 'only-on-failure',  // tirar foto somente se falhar
        video: 'retain-on-failure',  // somente se falhar
    }
})