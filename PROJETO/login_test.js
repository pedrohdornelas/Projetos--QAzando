Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','pedrohdornelas@gmail.com')
    I.fillField('#password','123456789')
    I.click('#btnLogin')
    I.waitForText('Login realizado',5)

}).tag('@sucesso')

Scenario('Tentando Logar escrever apenas o e-mail',  ({ I }) => {
    
    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','pedrohdornelas@gmail.com')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.waitForText('Senha inválida.',5)

})

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','')
    I.fillField('#password','')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',10)
  

})

Scenario('Tentando Logar escrever apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.fillField('#user','')
    I.fillField('#password','123456789')
    I.click('#btnLogin')
    I.waitForText('E-mail inválido.',10)

})