Feature('upload file');

Scenario('upload images',  ({ I }) => {

    I.amOnPage('http://www.automationpractice.pl/index.php')
    I.click('Contact us')
    
    I.selectOption('id_contact','1')
    I.fillField('#email','hugo@gmail.com')
    I.fillField('#id_order','123456')
    I.fillField('#message','Minha mensagem')
    pause()
    I.attachFile('#fileUpload','images/img.jpg')
    I.waitForText('Send',5)
    

});
