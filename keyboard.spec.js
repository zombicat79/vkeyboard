describe('keyboard.js', function() {
    let keyboard;
    let keyboard2;
    let keyboard3;
    let keyboard4;
    let keyboard5;
    let keyboard6;

    let mainTestDiv;
    let auxTestDiv;

    describe('Keyboard', function() {
        beforeAll(() => {
            keyboard = new Keyboard('wrapper', 'es-ES');
            keyboard2 = new Keyboard('wrapper', 'french');
            keyboard3 = new Keyboard('main-element', 'ru-RU');
            keyboard4 = new Keyboard('main-element', 'swahili');
            keyboard5 = new Keyboard('wrapper', 'ITALIAN');
            keyboard6 = new Keyboard('wrapper', 'German');
        })

        it('should throw an error if it is not properly instantiated', function() {
            expect(function() {return new Keyboard()}).toThrowError('Initialized with no parameters');
            expect(function() {return new Keyboard('main-element')}).toThrowError('Initialized with too few parameters');
            expect(function() {return new Keyboard('main-element', 34)}).toThrowError('Parameter 2 should be a string');
            expect(function() {return new Keyboard(true, 'de-DE')}).toThrowError('Parameter 1 should be a string');
        })

        it('should receive 2 string parameters', function() {
            expect(keyboard3.target).toBe('main-element');
            expect(typeof keyboard3.target).toBe('string');
            expect(keyboard.language).toBe('es-ES');
            expect(typeof keyboard.language).toBe('string');
        })

        it('should accept plain language inputs as well as international language codes', function() {
            expect(keyboard2.language).toBe('french');
            expect(keyboard.language).toBe('es-ES');
            expect(keyboard5.language).toBe('italian');
            expect(keyboard6.language).toBe('german');
        })

        it('parameter received should be a supported language', function() {
            expect(keyboard.language).toBeTruthy();
            expect(keyboard2.language).toBeTruthy();
            expect(keyboard3.language).toBeTruthy();
            expect(keyboard4.language).toBeNull();
            expect(keyboard5.language).toBeTruthy();
            expect(keyboard6.language).toBeTruthy();
        })

        it('should load keyboard map in accordance to selected language', function() {
            expect(keyboard.map.language).toBe('es-ES');
            expect(keyboard2.map.language).toBe('fr-FR');
            expect(keyboard3.map.language).toBe('ru-RU');
            expect(keyboard4.map).toBeNull();
            expect(keyboard5.map.language).toBe('it-IT');
        })

        afterAll(() => {
            keyboard = null;
            keyboard2 = null;
            keyboard3 = null;
            keyboard4 = null;
            keyboard5 = null;
            keyboard6 = null;
        })
    })

    describe('Method availability', function() {
        let initialization;
        
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
        })
        
        beforeEach(() => {
            keyboard = new Keyboard('main-element', 'fr-FR');
            initialization = keyboard.init();
        })
        
        it('should have an init() method', function() {
            expect(initialization).toBe(true);
        })

        it('should have a mount() method', function() {     
            expect(keyboard.mount()).toBe(true);
        })

        xit('should have a destroy() method', function() {
            expect(keyboard.tabulate()).toBeNull();
        })
        
        xit('should have a tabulate() method', function() {
            expect(keyboard.tabulate()).toBeNull();
        })
    
        xit('should have a capitalize() method', function() {
            expect(keyboard.capitalize()).toBeNull();
        })
    
        xit('should have a shift() method', function() {
            expect(keyboard.shift()).toBeNull();
        })
    
        xit('should have an alternate() method', function() {
            expect(keyboard.alternate()).toBeNull();
        })
    
        xit('should have a delete() method', function() {
            expect(keyboard.delete()).toBeNull();
        })
    
        xit('should have an enter() method', function() {
            expect(keyboard.enter()).toBeNull();
        })
    
        xit('should have a space() method', function() {
            expect(keyboard.space()).toBeNull();
        })

        afterEach(() => {
            keyboard = null;
            initialization = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            mainTestDiv = null;
        })
    })

    describe('init()', function() {
        let initialization;
        
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);

            keyboard = new Keyboard('main-element', 'es-ES');
            initialization = keyboard.init();

            auxTestDiv = document.createElement('div');
            auxTestDiv.setAttribute('id', 'keyboard-wrapper');
            auxTestDiv.style.opacity = '0';
            document.body.appendChild(auxTestDiv);

            keyboard2 = new Keyboard('whatever-wrapper', 'it-IT');
        })

        it('should throw an error if Keyboard was called on a DOM element that does not exist', function() {
            expect(function() {initialization}).not.toThrow();
            expect(function() {keyboard2.init()}).toThrowError('Keyboard instantiated on an inexistent DOM Node');
        })
        
        it('should append 5 children HTML elements to the element passed as 1st parameter upon instantiation', function() {
            expect(Array.from(mainTestDiv.children).length).toBe(5);
        })

        it('1st child element should be of type "textarea"', function() {
            expect(Array.from(mainTestDiv.children)[0].nodeName).toBe("TEXTAREA");
        })

        it('1st child element should get a class attribute of "screen"', function() {
            expect(Array.from(mainTestDiv.children)[0].classList.contains("screen")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("screen")).toBeFalsy();
        })

        it('2nd to 5th children elements should be of type "div"', function() {
            expect(Array.from(mainTestDiv.children)[1].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[2].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[3].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[4].nodeName).toBe("DIV");
        })

        it('2nd to 5th children elements should get a class attribute of "keyboard"', function() {
            expect(Array.from(mainTestDiv.children)[0].classList.contains("keyboard")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[2].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[3].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[4].classList.contains("keyboard")).toBeTruthy();
        })

        it('2nd to 5th children elements should get a class attribute corresponding to the language chosen for keyboard initialization. It should conform to the example format "keyboard--ES"', function() {
            expect(Array.from(mainTestDiv.children)[0].classList.contains("keyboard--DE")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[2].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[3].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[4].classList.contains("keyboard--ES")).toBeTruthy();
        })

        it('2nd child element should get class attributes of "keyboard--normal" and "show"', function() {
            expect(Array.from(mainTestDiv.children)[1].classList.contains("keyboard--normal")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("show")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("keyboard--shifted")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("hide")).toBeFalsy();
        })

        it('3rd child element should get class attributes of "keyboard--capitalized" and "hide"', function() {
            expect(Array.from(mainTestDiv.children)[2].classList.contains("keyboard--capitalized")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[2].classList.contains("hide")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[2].classList.contains("keyboard--alternated")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[2].classList.contains("show")).toBeFalsy();
        })

        it('4th child element should get class attributes of "keyboard--shifted" and "hide"', function() {
            expect(Array.from(mainTestDiv.children)[3].classList.contains("keyboard--shifted")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[3].classList.contains("hide")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[3].classList.contains("keyboard--normal")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[3].classList.contains("show")).toBeFalsy();
        })

        it('5th child element should get class attributes of "keyboard--alternated" and "hide"', function() {
            expect(Array.from(mainTestDiv.children)[4].classList.contains("keyboard--alternated")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[4].classList.contains("hide")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[4].classList.contains("keyboard--capitalized")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[4].classList.contains("show")).toBeFalsy();
        })

        it('should call the subsequent mount() method', function() {
            expect(initialization).toBe(true);
        })

        afterAll(() => {
            mainTestDiv.remove();
            auxTestDiv.remove();
            mainTestDiv = null;
            auxTestDiv = null;
            keyboard = null;
            keyboard2 = null;
        })
    })

    describe('mount()', function() {
        let keyboardDIVs;
        let keyboard2DIVs;

        let testKeyboard;
        let testBtn;

        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
            keyboard = new Keyboard('main-element', 'es-ES');
            keyboard.init();
            keyboardDIVs = Array.from(document.querySelectorAll('#main-element .keyboard'));

            auxTestDiv = document.createElement('div');
            auxTestDiv.setAttribute('id', 'keyboard-wrapper');
            auxTestDiv.style.opacity = '0';
            document.body.appendChild(auxTestDiv);
            keyboard2 = new Keyboard('keyboard-wrapper', 'ru-RU');
            keyboard2.init();
            keyboard2DIVs = Array.from(document.querySelectorAll('#keyboard-wrapper .keyboard'));
        })

        beforeEach(() => {
            const randomKeyboard = Math.floor(Math.random() * 4);
            const randomBtn = Math.floor(Math.random() * 50);

            testKeyboard = keyboardDIVs[randomKeyboard];
            testBtn = Array.from(testKeyboard.children)[randomBtn];
        })

        it('should append to all HTML elements holding the "keyboard" class: as many children as elements contained in the corresponding 2D mapping array', function() {
            const spanishNormalTotal = spanishMap.normal[0].length + spanishMap.normal[1].length + spanishMap.normal[2].length + spanishMap.normal[3].length + spanishMap.normal[4].length;
            const spanishCapitalizedTotal = spanishMap.capitalized[0].length + spanishMap.capitalized[1].length + spanishMap.capitalized[2].length + spanishMap.capitalized[3].length + spanishMap.capitalized[4].length;
            const spanishShiftedTotal = spanishMap.shifted[0].length + spanishMap.shifted[1].length + spanishMap.shifted[2].length + spanishMap.shifted[3].length + spanishMap.shifted[4].length;
            const spanishAlternatedTotal = spanishMap.alternated[0].length + spanishMap.alternated[1].length + spanishMap.alternated[2].length + spanishMap.alternated[3].length + spanishMap.alternated[4].length;
            const russianNormalTotal = russianMap.normal[0].length + russianMap.normal[1].length + russianMap.normal[2].length + russianMap.normal[3].length + russianMap.normal[4].length;
            const russianCapitalizedTotal = russianMap.capitalized[0].length + russianMap.capitalized[1].length + russianMap.capitalized[2].length + russianMap.capitalized[3].length + russianMap.capitalized[4].length;
            const russianShiftedTotal = russianMap.shifted[0].length + russianMap.shifted[1].length + russianMap.shifted[2].length + russianMap.shifted[3].length + russianMap.shifted[4].length;
            const russianAlternatedTotal = russianMap.alternated[0].length + russianMap.alternated[1].length + russianMap.alternated[2].length + russianMap.alternated[3].length + russianMap.alternated[4].length;
            
            expect(spanishNormalTotal).not.toBeNaN();
            expect(spanishCapitalizedTotal).not.toBeNaN();
            expect(spanishShiftedTotal).not.toBeNaN();
            expect(spanishAlternatedTotal).not.toBeNaN();
            expect(russianNormalTotal).not.toBeFalsy();
            expect(russianCapitalizedTotal).not.toBeFalsy();
            expect(russianShiftedTotal).not.toBeFalsy();
            expect(russianAlternatedTotal).not.toBeFalsy();
            expect(Array.from(keyboardDIVs[0].children).length).toBe(spanishNormalTotal);
            expect(Array.from(keyboardDIVs[1].children).length).toBe(spanishCapitalizedTotal);
            expect(Array.from(keyboardDIVs[2].children).length).toBe(spanishShiftedTotal);
            expect(Array.from(keyboardDIVs[3].children).length).toBe(spanishAlternatedTotal);
            expect(Array.from(keyboard2DIVs[0].children).length).toBe(russianNormalTotal);
            expect(Array.from(keyboard2DIVs[1].children).length).toBe(russianCapitalizedTotal);
            expect(Array.from(keyboard2DIVs[2].children).length).toBe(russianShiftedTotal);
            expect(Array.from(keyboard2DIVs[3].children).length).toBe(russianAlternatedTotal);
        })

        it('every "keyboard" children element should be of type "button"', function() {
            expect(testBtn.nodeName).not.toBe("DIV");
            expect(testBtn.nodeName).toBe("BUTTON");
        })

        it('every "keyboard" children element should have class attribute "keyboard__button"', function() {
            expect(testBtn.classList.contains('keyboard__button')).toBe(true);
        })

        it('every "keyboard__button" element should have a "data-content" attribute', function() {
            expect(testBtn.dataset.content).toBeTruthy();
            expect(typeof testBtn.dataset.content).toBe('string');
            expect(testBtn.dataset.row).toMatch(/\*?[0-9]{1,3}|\w+|&\w+;/);
        })

        it('every "keyboard__button" element should have "data-row" and "data-column" attributes, with number values corresponding to the coordinates of its injected content in the previously fed mapping array', function() {
            expect(testBtn.dataset.row).toBeTruthy();
            expect(typeof Number(testBtn.dataset.row)).toBe('number');
            expect(testBtn.dataset.row).toMatch(/[0-9]{1,2}/);
            expect(testBtn.dataset.column).toBeTruthy();
            expect(typeof Number(testBtn.dataset.column)).toBe('number');
            expect(testBtn.dataset.column).toMatch(/[0-9]{1,2}/);

            const testBtnParent = testBtn.closest('.keyboard');
            const parentClass = testBtnParent.getAttribute('class').match(/(?<=--)[a-z][a-z]+/);
            const testSubKeyboard = parentClass[0];
            const rowCoordinate = Number(testBtn.dataset.row);
            const columnCoordinate = Number(testBtn.dataset.column);

            if (keyboard.map[testSubKeyboard][rowCoordinate][columnCoordinate] === null) {
                expect(keyboard.map[testSubKeyboard][rowCoordinate][columnCoordinate]).toBeNull();
            } else  {
                expect(keyboard.map[testSubKeyboard][rowCoordinate][columnCoordinate].toString()).toBe(testBtn.dataset.content);
            }
        })

        it('every "keyboard__button" element should have a class attribute for clasification purposes. The allowed categories should be "keyboard__button--standard", "keyboard__button--operation" and "keyboard__button--void"', function() {
            const btnType = testBtn.getAttribute('class').match(/keyboard__button--[a-z]+/);
            
            expect(btnType).not.toBeNull();
        })

        it('every "keyboard__button" element should show text content corresponding to the character given to it by the selected language mapping.', function() {
            const testBtnParent = testBtn.closest('.keyboard');
            const parentClass = testBtnParent.getAttribute('class').match(/(?<=--)[a-z][a-z]+/);
            const testSubKeyboard = parentClass[0];
            const rowCoordinate = Number(testBtn.dataset.row);
            const columnCoordinate = Number(testBtn.dataset.column);
            const targetedCharacter = keyboard.map[testSubKeyboard][rowCoordinate][columnCoordinate];

            if (!targetedCharacter) {
                expect(testBtn.innerHTML).toBe("");
            }
            else if (/^\*/.test(targetedCharacter)) {
                const processingFix = Number(targetedCharacter.replace("*", ""));
                expect(testBtn.innerHTML).toBe(String.fromCharCode(processingFix));
            }
            else if (/^&/.test(targetedCharacter)) {
                expect(testBtn.dataset.content).toBe(targetedCharacter);
            }
            else if (/[a-zA-Z]{2,}/.test(targetedCharacter)) {
                expect(testBtn.innerHTML).toBe(targetedCharacter);
            }
            else {
                expect(testBtn.innerHTML).toBe(String.fromCharCode(targetedCharacter));
            }
        })

        afterEach(() => {
            testKeyboard = null;
            testBtn = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            auxTestDiv.remove();
            mainTestDiv = null;
            auxTestDiv = null;
            keyboard = null;
            keyboard2 = null;
        })
    })

    /* xdescribe('tabulate()', function() {

    })

    xdescribe('capitalize()', function() {

    })

    xdescribe('shift()', function() {

    })

    xdescribe('control()', function() {

    })

    xdescribe('alternate()', function() {

    })

    xdescribe('write()', function() {

    })

    xdescribe('delete()', function() {

    })

    xdescribe('enter()', function() {

    })

    xdescribe('space()', function() {

    }) */
})