// const cypress = require("cypress")

/*describe('Open-Url', () => {
    it('Test1',() => {
     /!*cy.visit("https://qa-portal.mortarai.com/")
     cy.title().should('eq','Mortar - Web Portal')*!/
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        // cy.get('#user-name').type('performance_glitch_user')
    })

  })
describe('Enter Username Test', () => {
    it('Username',() => {
        /!*cy.visit("https://qa-portal.mortarai.com/")
        cy.title().should('eq','Mortar - Web Portal')*!/
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')

    })

   /!* it('enter-username', () => {
        cy.get('#user-name').type('performance_glitch_user')
        // cy.visit("https://www.saucedemo.com/")
        // cy.title().should('equal', 'Swag Labs')
    })*!/

})
describe('Enter Password Test', () =>{
    it('Enter Username and Password', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')

    });
})
describe('Login with valid credential', () =>{
    it('Enter Username and Password', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
    });
})
describe('Login with invalid credential', () =>{
    it('Enter invalid Username and Password', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
    });
})*/


/*describe('Check Price', {timeout: 9000}, () => {
    it('Check Sauce Labs Fleece Jacket price', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
        cy.get('#item_5_title_link').contains('Sauce Labs Fleece Jacket').click()
        cy.get('#back-to-products').contains('Back to products')
        cy.get('.inventory_details_price').should('include.text', '49.99')
        document.write('price works!!')
        // cy.get('.inventory_details_name large_size').contains('Sauce Labs Fleece Jacket')
    });
})
describe('add to cart', () => {
    it('Add to cart two items', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bike-light').contains('Remove')
    });
})*/
/*describe('Click cart icon', () => {
    it('Go to cart', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bike-light').contains('Remove')
        cy.get('.shopping_cart_link').click()
        cy.get('.title').contains('Your Cart')
    });
})*/
/*describe('Checkout Button click', () => {
    it('Check out', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bike-light').contains('Remove')
        cy.get('.shopping_cart_link').click()
        cy.get('.title').contains('Your Cart')
        cy.get('#checkout').click()
        cy.get('.title').contains('Checkout: Your Information')
    });
})*/
/*describe('Fill details', () => {
    it('Fill', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bike-light').contains('Remove')
        cy.get('.shopping_cart_link').click()
        cy.get('.title').contains('Your Cart')
        cy.get('#checkout').click()
        cy.get('.title').contains('Checkout: Your Information')
        function makeid(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }
        function makezip(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }


        var randomFName = makeid(5)
        var randomLName = makeid(5)
        var zipCode = makezip(5)
        cy.get('#first-name').type(randomFName)
        cy.get('#last-name').type(randomLName)
        cy.get('#postal-code').type(zipCode)
        /!*console.log(randomName)
        document.write(randomName)*!/
        // cy.get('#first-name').contains(randomName)
    });
})*/
describe('Finish the Order', () => {
    it('Complete the order', function () {
        cy.visit("https://www.saucedemo.com")
        cy.title().should('eq', 'Swag Labs')
        cy.get('#user-name').type('performance_glitch_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.title').contains('Products')
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#remove-sauce-labs-backpack').contains('Remove')
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('#remove-sauce-labs-bike-light').contains('Remove')
        cy.get('.shopping_cart_link').click()
        cy.get('.title').contains('Your Cart')
        cy.get('#checkout').click()
        cy.get('.title').contains('Checkout: Your Information')
        function makeid(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }
        function makeZip(length) {
            let result = '';
            const characters = '0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < length) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
                counter += 1;
            }
            return result;
        }


        var randomFName = makeid(5)
        var randomLName = makeid(5)
        var zipCode = makeZip(5)
        cy.get('#first-name').type(randomFName)
        cy.get('#last-name').type(randomLName)
        cy.get('#postal-code').type(zipCode)
        /*console.log(randomName)
        document.write(randomName)*/
        // cy.get('#first-name').contains(randomName)
        cy.get('#continue').click()
        cy.get('#finish').click()
    });
})





/*describe('My First Negative', () => {
  it('Test1', () => {
   cy.visit("https://qa-portal.mortarai.com/")
   cy.title().should('eq','Mortar - Web Portal')
      cy.get('#username').type('vimarsha@hyperspacehub.com')
  })
   /!* it('enter-username', () => {
        cy.get('#username').type('vimarsha@hyperspacehub.com')
        // cy.visit("https://www.saucedemo.com/")
        // cy.title().should('equal', 'Swag Labs')
    })*!/
})*/