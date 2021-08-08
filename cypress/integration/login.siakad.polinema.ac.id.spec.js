// login.siakad.polinema.ac.id.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('Menampilkan Pesan Error Ketika Login Tidak Menggunakan data yang sesuai', () => {
    it('Menampilkan Halaman Login', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.url().should('eq', 'http://siakad.polinema.ac.id/')
    });

    it('Seharusnya muncul peringatan ketika username tidak diisi', () => {
        cy.get('.btn-success').click()
        cy.contains('Username harus diisi')
    });

    it('Seharusnya muncul peringatan ketika password tidak diisi', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710187')
        cy.get('.btn-success').click()
        cy.contains('Password harus diisi')
    });

    it('Seharusnya muncul peringatan ketika username atau password salah', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710187')
        cy.get('#password').type('password')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')

        cy.get('#username').clear().type('1831710180')
        cy.get('#password').clear().type('Mahatta098)(*')
        cy.get('.btn-success').click()
        cy.contains('Username / Password Salah')
    });
});

describe('Menampilkan Pesan Error Ketika Login Tidak Menggunakan data yang sesuai', () => {
    it('Seharusnya bisa menampilkan dan merahasiakan password', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#password').type('password')

        
        for( var i = 0; i < 2; i++ ) {
            cy.get('#password').then(($input) => {
            const inputType = $input.attr('type');

            cy.log('input type : ', inputType)

            if (inputType == 'password') {
                cy.get('#uniform-chk_tampilkan').click()
                cy.get('#password').should('have.attr', 'type', 'text')
            } else {
                cy.get('#uniform-chk_tampilkan').click()
                cy.get('#password').should('have.attr', 'type', 'password')
            }
        });
        }
        
    });

    it('Seharusnya diredirect pada halaman dashboard', () => {
        cy.visit("http://siakad.polinema.ac.id/")
        cy.get('#username').type('1831710187')
        cy.get('#password').type('Mahatta098)(*')
        cy.get('.btn-success').click()
        cy.url().should('eq', 'http://siakad.polinema.ac.id/beranda')
    });
});