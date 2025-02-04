//função para login
async function login (page) {
    
    const email_correct = 'lucascnteste@gmail.com'
    const password_correct = 'lucas1998@testando'

    await page.fill('#email', email_correct )
    await page.fill('#password', password_correct )
    await page.click('#submit')
    await page.locator('text', 'Dashboard', 'Orders', 'Tickets', 'Services')
}

module.exports = { login };