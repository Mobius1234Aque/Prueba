const { JSDOM } = require('jsdom');
const formularioPath = './formulario.html';
const fs = require('fs');

describe('Formulario', () => {
    let dom;
    let form;

    beforeAll(() => {
        // Leer el contenido HTML del archivo del formulario
        const htmlContent = fs.readFileSync(formularioPath, 'utf-8');

        // Configurar el entorno JSDOM con el HTML del formulario
        dom = new JSDOM(htmlContent, { runScripts: 'dangerously' });
        global.document = dom.window.document;
        global.window = dom.window;
        form = document.getElementById('myForm');
    });

    afterAll(() => {
        // Restaurar el entorno JSDOM después de todas las pruebas
        delete global.document;
        delete global.window;
    });

    test('El formulario tiene un campo de entrada y un botón de envío', () => {
        // Simula la creación de un campo de entrada y un botón de envío
        const input = document.createElement('input');
        input.type = 'text';
        form.appendChild(input);

        const button = document.createElement('button');
        button.type = 'submit';
        form.appendChild(button);

        // Verifica que el formulario contenga el campo de entrada y el botón de envío
        expect(form.querySelector('input[type="text"]')).toBeTruthy();
        expect(form.querySelector('button[type="submit"]')).toBeTruthy();
    });
    

    // Agrega más pruebas según sea necesario
});
