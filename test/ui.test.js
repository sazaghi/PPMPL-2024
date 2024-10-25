import { Builder, By, Key, until } from 'selenium-webdriver';
import { expect } from 'chai';

describe('UI Testing Using Selenium', function() {
    this.timeout(30000);

    let driver;

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });
    
    after(async function() {
        await driver.quit();
    });
    
    it('Should load the login page', async function() {
        await driver.get('file:///C:/Users/akusu/OneDrive/Desktop/PPMPL/praktikum4/view/login.html');
        
        const title = await driver.getTitle();
        expect(title).to.equal('Login Page');
    });

    it('Should input username and password', async function() {
        await driver.findElement(By.css('#username')).sendKeys('testuser');
        await driver.findElement(By.xpath('//*[@id="password"]')).sendKeys('password123');
        
        const usernameValue = await driver.findElement(By.id('username')).getAttribute('value');
        const passwordValue = await driver.findElement(By.id('password')).getAttribute('value');
        
        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
    });

    it('Should click the login button', async function() {
        await driver.findElement(By.id('loginButton')).click();
    });

    it('Should display an error message on failed login', async function() {
        await driver.findElement(By.id('username')).sendKeys('wronguser');
        await driver.findElement(By.id('password')).sendKeys('wrongpassword');
        await driver.findElement(By.id('loginButton')).click();
    
        const errorMessage = await driver.findElement(By.id('errorMessage')).getText();
        expect(errorMessage).to.equal('Invalid username or password.');
    });
    
    it('Should verify that the login button is visible', async function() {
        const isDisplayed = await driver.findElement(By.id('loginButton')).isDisplayed();
        expect(isDisplayed).to.be.true;
    });
    
});
