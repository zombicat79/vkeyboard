describe('KEYBOARD.JS', function() {
    let keyboard;
    let keyboard2;
    let keyboard3;
    let keyboard4;
    let keyboard5;
    let keyboard6;

    let mainTestDiv;
    let auxTestDiv;
    let tertiaryTestDiv;
    let anotherTestDiv;

    let normalKeyboard;
    let capsKeyboard;
    let shiftKeyboard;
    let altKeyboard;

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

        it('should have an arm() method', function() {
            const button = document.createElement('button');
            button.classList.add('random-test-class');

            expect(keyboard.arm(button)).toBeTruthy();
        })

        it('should have a write() method', function() {
            expect(keyboard.write('A')).not.toBeUndefined();
        })

        it('should have a writeAux() method', function() {
            expect(keyboard.writeAux('^')).not.toBeUndefined();
        })

        it('should have a destroy() method', function() {
            expect(keyboard.destroy(false)).toBe("terminated");
        })
        
        it('should have a tabulate() method', function() {
            expect(keyboard.tabulate()).not.toBeUndefined();
        })
    
        it('should have a capitalize() method', function() {
            expect(keyboard.capitalize()).toBeTrue();
        })
    
        it('should have a shift() method', function() {
            expect(keyboard.shift()).toBeTrue();
        })
    
        it('should have an alternate() method', function() {
            expect(keyboard.alternate()).toBeTrue();
        })
    
        it('should have a delete() method', function() {
            expect(keyboard.delete()).not.toBeUndefined();
        })

        it('should have a goEmotional() method', function() {
            expect(keyboard.goEmotional()).toBeTrue();
        })
    
        it('should have an enter() method', function() {
            expect(keyboard.enter()).not.toBeUndefined();
        })
    
        it('should have a space() method', function() {
            expect(keyboard.space()).not.toBeUndefined();
        })

        it('should have a measureKeyboardFrame() method', function() {
            const sizingResult = keyboard.measureKeyboardFrame();

            expect(typeof sizingResult).toBe("string");
        })

        it('should have a displayMessage() method', function() {
            expect(keyboard.displayMessage('insufficient-width')).toBeTruthy();
        })

        it('should have a manageLayers() method', function() {
            expect(keyboard.manageLayers('alternated')).toBeTrue();
        })

        it('should have a getScreenCursorPosition() method', function() {
            const screen = document.querySelector('#main-element .screen');
            
            expect(keyboard.getScreenCursorPosition(screen)).toBeGreaterThanOrEqual(0);
        })

        it('should have a composeChar() method', function() {
            expect(keyboard.composeChar('u', 2)).not.toBeUndefined();
        })

        xit('should have a control() method', function() {
            expect(keyboard.space()).not.toBeUndefined();
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
        let initialization3;
        let initialization4;
        
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

            tertiaryTestDiv = document.createElement('div');
            tertiaryTestDiv.setAttribute('id', 'keyboard-frame');
            tertiaryTestDiv.style.width = "130px";
            tertiaryTestDiv.style.opacity = '0';
            document.body.appendChild(tertiaryTestDiv);

            anotherTestDiv = document.createElement('div');
            anotherTestDiv.setAttribute('id', 'keyboard-container');
            anotherTestDiv.style.width = "500px";
            anotherTestDiv.style.opacity = '0';
            document.body.appendChild(anotherTestDiv);
        })

        beforeEach(() => {
            keyboard3 = new Keyboard('keyboard-frame', 'german');
            keyboard4 = new Keyboard('keyboard-container', 'french');
        })

        it('should throw an error if Keyboard was called on a DOM element that does not exist', function() {
            expect(function() {initialization}).not.toThrow();
            expect(function() {keyboard2.init()}).toThrowError('Keyboard instantiated on an inexistent DOM Node');
        })

        it('should throw an error if called on a Keyboard instance that has already been initialized', function() {
            expect(function() {keyboard.init()}).toThrowError('Keyboard already instantiated on current object');
        })


        it('should append 7 children HTML elements to the element passed as 1st parameter upon instantiation', function() {
            expect(Array.from(mainTestDiv.children).length).toBe(7);
        })

        it('1st child element should be of type "textarea"', function() {
            expect(Array.from(mainTestDiv.children)[0].nodeName).toBe("TEXTAREA");
        })

        it('1st child element should get a class attribute of "screen"', function() {
            expect(Array.from(mainTestDiv.children)[0].classList.contains("screen")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("screen")).toBeFalsy();
        })

        it('1st child element should call the "getScreenCursorPosition()" every time it gets clicked', function() {
            spyOn(keyboard3, 'getScreenCursorPosition');
            spyOn(keyboard4, 'getScreenCursorPosition');

            keyboard3.init();
            keyboard4.init();
            const screen3 = document.querySelector('#keyboard-frame .screen');
            const screen4 = document.querySelector('#keyboard-container .screen');
            
            screen3.click();
            screen4.click();

            expect(keyboard3.getScreenCursorPosition).toHaveBeenCalled();
            expect(keyboard3.getScreenCursorPosition).toHaveBeenCalledTimes(1);
            expect(keyboard4.getScreenCursorPosition).toHaveBeenCalled();
            expect(keyboard4.getScreenCursorPosition).toHaveBeenCalledTimes(1);
        })

        it('2nd to 7th children elements should be of type "div"', function() {
            expect(Array.from(mainTestDiv.children)[1].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[2].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[3].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[4].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[5].nodeName).toBe("DIV");
            expect(Array.from(mainTestDiv.children)[6].nodeName).toBe("DIV");
        })

        it('2nd to 6th children elements should get a class attribute of "keyboard"', function() {
            expect(Array.from(mainTestDiv.children)[0].classList.contains("keyboard")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[2].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[3].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[4].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[5].classList.contains("keyboard")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[6].classList.contains("keyboard")).toBeFalsy();
        })

        it('2nd to 6th children elements should get a class attribute corresponding to the language chosen for keyboard initialization. It should conform to the example format "keyboard--ES"', function() {
            expect(Array.from(mainTestDiv.children)[0].classList.contains("keyboard--DE")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[1].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[2].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[3].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[4].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[5].classList.contains("keyboard--ES")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[6].classList.contains("keyboard--ES")).toBeTruthy();
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

        it('6th child element should get class attributes of "keyboard--emotional" and "hide"', function() {
            expect(Array.from(mainTestDiv.children)[5].classList.contains("keyboard--emotional")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[5].classList.contains("hide")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[5].classList.contains("keyboard--shifted")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[5].classList.contains("show")).toBeFalsy();
        })

        it('7h child element should get class attributes of "aux-panel" and "hide"', function() {
            expect(Array.from(mainTestDiv.children)[6].classList.contains("aux-panel")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[6].classList.contains("hide")).toBeTruthy();
            expect(Array.from(mainTestDiv.children)[6].classList.contains("keyboard")).toBeFalsy();
            expect(Array.from(mainTestDiv.children)[6].classList.contains("show")).toBeFalsy();
        })

        it('should call the measureKeyboardFrame() method', function() {
            spyOn(keyboard3, 'measureKeyboardFrame');
            spyOn(keyboard4, 'measureKeyboardFrame');

            keyboard3.init();
            keyboard4.init();

            expect(keyboard3.measureKeyboardFrame).toHaveBeenCalled();
            expect(keyboard3.measureKeyboardFrame).toHaveBeenCalledTimes(1);
            expect(keyboard4.measureKeyboardFrame).toHaveBeenCalled();
            expect(keyboard4.measureKeyboardFrame).toHaveBeenCalledTimes(1);
        })

        it('should call the displayMessage() method, if the keyboard container is too small', function() {
            spyOn(keyboard3, 'displayMessage');
            spyOn(keyboard4, 'displayMessage');

            keyboard3.init();
            keyboard4.init();

            expect(keyboard3.displayMessage).toHaveBeenCalled();
            expect(keyboard3.displayMessage).toHaveBeenCalledTimes(1);
            expect(keyboard3.displayMessage).toHaveBeenCalledWith('insufficient-width');
            expect(keyboard4.displayMessage).not.toHaveBeenCalled();
        })

        it('should call the manageLayers() method passing "aux" as parameter, if the keyboard container is too small' , function() {
            spyOn(keyboard3, 'manageLayers');
            spyOn(keyboard4, 'manageLayers');

            keyboard3.init();
            keyboard4.init();

            expect(keyboard3.manageLayers).toHaveBeenCalled();
            expect(keyboard3.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard3.manageLayers).toHaveBeenCalledWith('aux');
            expect(keyboard4.manageLayers).not.toHaveBeenCalled();
        });

        it('should call the subsequent mount() method, if the width of the keyboard container is correct', function() {
            initialization3 = keyboard3.init();
            initialization4 = keyboard4.init();
            
            expect(initialization3).toBeFalsy();
            expect(initialization4).toBe(true);
        })

        afterEach(() => {
            keyboard3 = null;
            keyboard4 = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            auxTestDiv.remove();
            tertiaryTestDiv.remove();
            anotherTestDiv.remove();
            mainTestDiv = null;
            auxTestDiv = null;
            anotherTestDiv = null;
            tertiaryTestDivTestDiv = null;
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

        it('every "keyboard__button" element should have a class attribute for clasification purposes. The allowed categories should be "keyboard__button--standard", "keyboard__button--emoji", "keyboard__button--operation" and "keyboard__button--void"', function() {
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

        it('should call the arm() method for every button in the keyboard', function() {
            const spanishNormalTotal = spanishMap.normal[0].length + spanishMap.normal[1].length + spanishMap.normal[2].length + spanishMap.normal[3].length + spanishMap.normal[4].length;
            const spanishCapitalizedTotal = spanishMap.capitalized[0].length + spanishMap.capitalized[1].length + spanishMap.capitalized[2].length + spanishMap.capitalized[3].length + spanishMap.capitalized[4].length;
            const spanishShiftedTotal = spanishMap.shifted[0].length + spanishMap.shifted[1].length + spanishMap.shifted[2].length + spanishMap.shifted[3].length + spanishMap.shifted[4].length;
            const spanishAlternatedTotal = spanishMap.alternated[0].length + spanishMap.alternated[1].length + spanishMap.alternated[2].length + spanishMap.alternated[3].length + spanishMap.alternated[4].length;
            const spanishEmotionalTotal = spanishMap.emotional[0].length + spanishMap.emotional[1].length + spanishMap.emotional[2].length + spanishMap.emotional[3].length + spanishMap.emotional[4].length;
            const spanishGrandTotal = spanishNormalTotal + spanishCapitalizedTotal + spanishShiftedTotal + spanishAlternatedTotal + spanishEmotionalTotal;

            const russianNormalTotal = russianMap.normal[0].length + russianMap.normal[1].length + russianMap.normal[2].length + russianMap.normal[3].length + russianMap.normal[4].length;
            const russianCapitalizedTotal = russianMap.capitalized[0].length + russianMap.capitalized[1].length + russianMap.capitalized[2].length + russianMap.capitalized[3].length + russianMap.capitalized[4].length;
            const russianShiftedTotal = russianMap.shifted[0].length + russianMap.shifted[1].length + russianMap.shifted[2].length + russianMap.shifted[3].length + russianMap.shifted[4].length;
            const russianAlternatedTotal = russianMap.alternated[0].length + russianMap.alternated[1].length + russianMap.alternated[2].length + russianMap.alternated[3].length + russianMap.alternated[4].length;
            const russianEmotionalTotal = russianMap.emotional[0].length + russianMap.emotional[1].length + russianMap.emotional[2].length + russianMap.emotional[3].length + russianMap.emotional[4].length;
            const russianGrandTotal = russianNormalTotal + russianCapitalizedTotal + russianShiftedTotal + russianAlternatedTotal + russianEmotionalTotal;

            expect(keyboard.armedBtns).toBe(spanishGrandTotal);
            expect(keyboard2.armedBtns).toBe(russianGrandTotal);
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

    describe('arm() method', function() {
        let initialization;
        let initialization2;

        let button;
        let button2;
        let button3;
        
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
            keyboard = new Keyboard('main-element', 'fr-FR');

            auxTestDiv = document.createElement('div');
            auxTestDiv.setAttribute('id', 'keyboard-wrapper');
            auxTestDiv.style.opacity = '0';
            document.body.appendChild(auxTestDiv);
            keyboard2 = new Keyboard('keyboard-wrapper', 'de-DE');

            spyOn(keyboard, 'write');
            spyOn(keyboard, 'writeAux');
            spyOn(keyboard, 'delete');
            spyOn(keyboard, 'space');

            initialization = keyboard.init();
            initialization2 = keyboard2.init();
        })

        beforeEach(() => {
            button = document.createElement('button');
            button2 = document.createElement('button');
            button3 = document.createElement('button');
        })

        it('should receive 1 button type HTML element as parameter', function() {
            expect(function() {keyboard.arm()}).toThrow();
            expect(keyboard.arm(button)).toEqual({button: button, payload: "", action: null, armed: true});
            expect(keyboard.arm(button2)).toEqual({button: button2, payload: "", action: null, armed: true});
            expect(keyboard.arm(button3)).toEqual({button: button3, payload: "", action: null, armed: true});
        })

        it('should throw error if parameter received were not an HTML button element', function() {
            button = document.createElement('div');
            button2 = document.createElement('p');
            
            expect(function() {keyboard.arm(button)}).toThrow();
            expect(function() {keyboard.arm(button2)}).toThrow();
            expect(function() {keyboard.arm(button3)}).not.toThrow();
        })

        it('should call button specific methods on different type of buttons', function() {
            const button4 = document.createElement('button');
            const button5 = document.createElement('button');
            const button6 = document.createElement('button');
            const button7 = document.createElement('button');
            const button8 = document.createElement('button');
            const button9 = document.createElement('button');
            const button10 = document.createElement('button');
            const button11 = document.createElement('button');
            
            button.classList.add('random-test-class');
            button2.classList.add('keyboard__button--standard');
            button2.dataset.content = "81";
            button2.innerHTML = "Q";
            button3.classList.add('keyboard__button--standard');
            button3.dataset.content = "*94";
            button3.innerHTML = "^";
            
            const opBtns = [button4, button5, button6, button7, button8, button9, button10, button11];
            opBtns.forEach(el => el.classList.add('keyboard__button--operation'));

            button4.dataset.content = "Caps";
            button4.innerHTML = "Caps";
            button5.dataset.content = "Shift";
            button5.innerHTML = "Shift";
            button6.dataset.content = "Alt";
            button6.innerHTML = "Alt";
            button7.dataset.content = "Tab";
            button7.innerHTML = "Tab";
            button8.dataset.content = "Backspace";
            button8.innerHTML = "Backspace";
            button9.dataset.content = "Enter";
            button9.innerHTML = "Enter";
            button10.dataset.content = "Space";
            button10.innerHTML = "Space";
            button11.dataset.content = "Control";
            button11.innerHTML = "Control";

            expect(keyboard.arm(button)).toEqual({button: button, payload: "", action: null , armed: true});
            expect(keyboard.arm(button2)).toEqual({button: button2, payload: "Q", action: 'write', armed: true});
            expect(keyboard.arm(button3)).toEqual({button: button3, payload: "^", action: 'writeAux', armed: true});
            expect(keyboard.arm(button4)).toEqual({button: button4, payload: "Caps", action: 'capitalize', armed: true});
            expect(keyboard.arm(button5)).toEqual({button: button5, payload: "Shift", action: 'shift', armed: true});
            expect(keyboard.arm(button6)).toEqual({button: button6, payload: "Alt", action: 'alternate', armed: true});
            expect(keyboard.arm(button7)).toEqual({button: button7, payload: "Tab", action: 'tabulate', armed: true});
            expect(keyboard.arm(button8)).toEqual({button: button8, payload: "Backspace", action: 'delete', armed: true});
            expect(keyboard.arm(button9)).toEqual({button: button9, payload: "Enter", action: 'enter', armed: true});
            expect(keyboard.arm(button10)).toEqual({button: button10, payload: "Space", action: 'space', armed: true});
            expect(keyboard.arm(button11)).toEqual({button: button11, payload: "Control", action: 'control', armed: true});
        })

        it('should add an onclick event listener to every button', function() {
            const testBtn = document.getElementById('fr-normal-116'); // lowercase t
            const testBtn2 = document.getElementById('fr-normal-101'); // lowercase e
            const testBtn3 = document.getElementById('fr-normal-115'); // lowercase s
            const testBtn4 = document.getElementById('fr-normal-116'); // lowercase t
            const testBtn5 = document.getElementById('fr-normal-Backspace'); // delete
            const testBtn6 = document.getElementById('fr-normal-Space'); // space
            const testBtn7 = document.getElementById('fr-capitalized-72'); // uppercase h
            const testBtn8 = document.getElementById('fr-normal-*94'); // ^ symbol
            const testBtn9 = document.getElementById('fr-normal-97'); // lowercase a

            const testBtns = [testBtn, testBtn2, testBtn3, testBtn4, testBtn5, testBtn6, 
                testBtn7, testBtn8, testBtn9];

            testBtns.forEach(btn => btn.click());

            expect(keyboard.write).toHaveBeenCalled();
            expect(keyboard.write).toHaveBeenCalledTimes(6);
            expect(keyboard.write).toHaveBeenCalledWith("t");
            expect(keyboard.write).toHaveBeenCalledWith("e");
            expect(keyboard.write).toHaveBeenCalledWith("s");
            expect(keyboard.write).toHaveBeenCalledWith("H");
            expect(keyboard.write).toHaveBeenCalledWith("a");

            expect(keyboard.delete).toHaveBeenCalled();
            expect(keyboard.delete).toHaveBeenCalledTimes(1);
            
            expect(keyboard.space).toHaveBeenCalled();
            expect(keyboard.space).toHaveBeenCalledTimes(1);
            
            expect(keyboard.writeAux).toHaveBeenCalled();
            expect(keyboard.writeAux).toHaveBeenCalledTimes(1);
            expect(keyboard.writeAux).toHaveBeenCalledWith("^");
        })

        it('should add 1 new object entry to the init report', function() {
            expect(keyboard.armedBtns).toBe(keyboard.initReport.length);
            expect(keyboard2.armedBtns).toBe(keyboard2.initReport.length);
        })

        it('should return 1 object confirming completion of arming process', function() {
            button2.classList.add('keyboard__button--standard');
            button2.dataset.content = "114";
            button2.innerHTML = "r";
            button3.classList.add('keyboard__button--standard');
            button3.dataset.content = "43";
            button3.innerHTML = "+";
            
            expect(keyboard.arm(button2)).toEqual({button: button2, payload: "r", action: 'write', armed: true});
            expect(keyboard.arm(button3)).toEqual({button: button3, payload: "+", action: 'write', armed: true});
        })

        afterEach(() => {
            button = null;
            button2 = null;
            button3 = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            auxTestDiv.remove();
            mainTestDiv = null;
            auxTestDiv = null;
            keyboard = null;
            keyboard2 = null;
            initialization = null;
            initialization2 = null;
        })
    })

    describe('destroy() method', function() {
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
            keyboard = new Keyboard('main-element', 'it-IT');
            keyboard.init();
        })

        it('should remove a previously initialized keyboard from the DOM', function() {
            keyboard.destroy();
            
            expect(document.getElementById('main-element')).toBeNull();
        })

        afterAll(() => {
            mainTestDiv = null;
            keyboard = null;
        })
    })

    describe('tabulate()', function() {
        beforeEach(() => {
            keyboard = new Keyboard('inexistent-element', 'de-DE');
            keyboard2 = new Keyboard('inexistent-element', 'russian');
        })

        it('should add tabulation space at the end of the existing output string', function() {
            keyboard.output = 'Global village';

            keyboard.tabulate();
            keyboard2.tabulate();

            expect(keyboard.output).toBe('Global village\t');
            expect(keyboard2.output).toBe('\t');
        })

        it('should return the resultant current keyboard output string', function() {
            keyboard.output = 'Wonders';
            keyboard2.output = 'Ski resort';

            const outputResult = keyboard.tabulate();
            const outputResult2 = keyboard2.tabulate();

            expect(outputResult).toBe('Wonders\t');
            expect(outputResult2).toBe('Ski resort\t');
        })

        afterEach(() => {
            keyboard = null;
            keyboard2 = null;
        })
    })

    describe('capitalize()', function() {
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
        })

        beforeEach(() => {
            keyboard = new Keyboard('main-element', 'es-ES');
            keyboard.init();

            spyOn(keyboard, 'manageLayers');
        })

        it('should change the activeLayer value to "capitalized"', function() {
            keyboard.capitalize();
            
            expect(keyboard.activeLayer).toBe('capitalized');
        })

        it('should call the "manageLayers()" method passing "capitalized" as its argument', function() {
            keyboard.capitalize();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('capitalized');
        })

        it('should call the "manageLayers()" method passing "normal" as its argument if the activeLayer is already "capitalized"', function() {
            keyboard.activeLayer = 'capitalized';
            keyboard.capitalize();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('normal');
        })

        afterEach(() => {
            keyboard = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            mainTestDiv = null;
        })
    })

    describe('shift()', function() {
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
        })

        beforeEach(() => {
            keyboard = new Keyboard('main-element', 'fr-FR');
            keyboard.init();

            spyOn(keyboard, 'manageLayers');
        })

        it('should change the activeLayer value to "shifted"', function() {
            keyboard.shift();
            
            expect(keyboard.activeLayer).toBe('shifted');
        })

        it('should call the "manageLayers()" method passing "shifted" as its argument', function() {
            keyboard.shift();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('shifted');
        })

        it('should call the "manageLayers()" method passing "normal" as its argument if the activeLayer is already "shifted"', function() {
            keyboard.activeLayer = 'shifted';
            keyboard.shift();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('normal');
        })

        afterEach(() => {
            keyboard = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            mainTestDiv = null;
        })
    })

    describe('goEmotional()', function() {
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
        })

        beforeEach(() => {
            keyboard = new Keyboard('main-element', 'italian');
            keyboard.init();

            spyOn(keyboard, 'manageLayers');
        })

        it('should change the activeLayer value to "emotional"', function() {
            keyboard.goEmotional();
            
            expect(keyboard.activeLayer).toBe('emotional');
        })

        it('should call the "manageLayers()" method passing "emotional" as its argument', function() {
            keyboard.goEmotional();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('emotional');
        })

        it('should call the "manageLayers()" method passing "normal" as its argument if the activeLayer is already "emotional"', function() {
            keyboard.activeLayer = 'emotional';
            keyboard.goEmotional();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('normal');
        })

        afterEach(() => {
            keyboard = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            mainTestDiv = null;
        })
    })

    /* xdescribe('control()', function() {

    }) */

    describe('alternate()', function() {
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
        })

        beforeEach(() => {
            keyboard = new Keyboard('main-element', 'de-DE');
            keyboard.init();

            spyOn(keyboard, 'manageLayers');
        })

        it('should change the activeLayer value to "alternated"', function() {
            keyboard.alternate();
            
            expect(keyboard.activeLayer).toBe('alternated');
        })

        it('should call the "manageLayers()" method passing "alternated" as its argument', function() {
            keyboard.alternate();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('alternated');
        })

        it('should call the "manageLayers()" method passing "normal" as its argument if the activeLayer is already "alternated"', function() {
            keyboard.activeLayer = 'alternated';
            keyboard.alternate();

            expect(keyboard.manageLayers).toHaveBeenCalled();
            expect(keyboard.manageLayers).toHaveBeenCalledTimes(1);
            expect(keyboard.manageLayers).toHaveBeenCalledWith('normal');
        })

        afterEach(() => {
            keyboard = null;
        })

        afterAll(() => {
            mainTestDiv.remove();
            mainTestDiv = null;
        })
    })

    describe('write()', function() {
        beforeEach(() => {
            keyboard = new Keyboard('inexistent-element', 'fr-FR');
            keyboard2 = new Keyboard('inexistent-element', 'spanish');
        })

        it('should add normal characters to the end of the current output string', function() {
            keyboard.output = 'Live your life';
            keyboard2.output = 'The world is mine';

            keyboard.write('t');
            keyboard.write('e');
            keyboard.write('s');
            keyboard.write('t');

            for (let i=0; i<3; i++) {
                keyboard2.write('!');
            }

            expect(keyboard.output).toBe('Live your lifetest');
            expect(keyboard2.output).toBe('The world is mine!!!');
        })

        it('should call composeChar() auxiliary method, in case there is a graph modifier in place', function() {
            keyboard.output = 't';
            keyboard.graphModifier = '^';
            
            keyboard2.output = 'emoci';
            keyboard2.graphModifier = '´';

            keyboard3 = new Keyboard('whatever-element', 'german');
            keyboard3.output = 'op';
            keyboard3.graphModifier = '`';

            spyOn(keyboard, 'composeChar');
            spyOn(keyboard2, 'composeChar');
            spyOn(keyboard3, 'composeChar');

            keyboard.write('o');
            keyboard.write('t');
            keyboard2.write('o');
            keyboard2.write('n');
            keyboard3.write('A');

            expect(keyboard.composeChar).toHaveBeenCalled();
            expect(keyboard.composeChar).toHaveBeenCalledTimes(1);
            expect(keyboard.composeChar).toHaveBeenCalledWith('o', 2);
            expect(keyboard2.composeChar).toHaveBeenCalled();
            expect(keyboard2.composeChar).toHaveBeenCalledTimes(1);
            expect(keyboard2.composeChar).toHaveBeenCalledWith('o', 1);
            expect(keyboard3.composeChar).toHaveBeenCalled();
            expect(keyboard3.composeChar).toHaveBeenCalledTimes(1);
            expect(keyboard3.composeChar).toHaveBeenCalledWith('A', 0);
        })

        it('should NOT call composeChar() if the caracter to be modified by the graph modifier is not a vowel', function() {
            keyboard.output = 't';
            keyboard.graphModifier = '^';
            
            keyboard2.output = 'emoci';
            keyboard2.graphModifier = '´';

            spyOn(keyboard, 'composeChar');
            spyOn(keyboard2, 'composeChar');

            keyboard.write('s');
            keyboard2.write('p');

            expect(keyboard.composeChar).not.toHaveBeenCalled();
            expect(keyboard2.composeChar).not.toHaveBeenCalled();
        })

        it('should clean up any existing graph modifier after output string modification', function() {
            keyboard.output = 'fr';
            keyboard.graphModifier = '`';

            keyboard2.output = 'g';
            keyboard2.graphModifier = '¨';

            keyboard.write('e');
            keyboard2.write('u');

            expect(keyboard.graphModifier).toBeNull();
            expect(keyboard2.graphModifier).toBeNull();
        })

        it('should return the resultant current keyboard output string', function() {
            keyboard.output = 'Bien sû';
            keyboard2.output = 'Todo bie';

            const outputResult = keyboard.write('r');
            const outputResult2 = keyboard2.write('n');

            expect(outputResult).toBe('Bien sûr');
            expect(outputResult2).toBe('Todo bien');
        })

        afterEach(() => {
            keyboard = null;
            keyboard2 = null;
        })
    })

    describe('writeAux()', function() {
        beforeEach(() => {
            keyboard = new Keyboard('inexistent-element', 'es-ES');
            keyboard2 = new Keyboard('inexistent-element', 'french');
        })

        it('should make sure there is no previously set graph modifier when called', function() {
            keyboard.graphModifier = '^';
            keyboard2.graphModifier = '¨';
            
            keyboard.writeAux('´');
            keyboard2.writeAux('`');
            
            expect(keyboard.graphModifier).not.toBe('´');
            expect(keyboard2.graphModifier).not.toBe('`');
        })
        
        it('should set the keyboard graph modifier with an input symbol', function() {
            keyboard.writeAux('^');
            keyboard2.writeAux('¨');

            expect(keyboard.graphModifier).toBe('^');
            expect(keyboard2.graphModifier).toBe('¨');
        })

        it('should return the symbol activated as current graph modifier', function() {
            const update = keyboard.writeAux('^');
            const update2 = keyboard2.writeAux('¨');

            expect(update).toBe('^');
            expect(update2).toBe('¨')
        })

        afterEach(() => {
            keyboard = null;
            keyboard2 = null;
        })
    })

    describe('delete()', function() {
        beforeEach(() => {
            keyboard = new Keyboard('inexistent-element', 'en-US');
            keyboard2 = new Keyboard('inexistent-element', 'german');
        })

        it('should remove the last character in the keyboard output string', function() {
            keyboard.output = 'Hardcore';
            for (let i=0; i<5; i++) {
                keyboard.delete();
            }

            keyboard2.output = 'Trying my best';
            keyboard2.delete();
            keyboard2.delete();

            expect(keyboard.output).toBe('Har');
            expect(keyboard2.output).toBe('Trying my be');
        })

        it('should do nothing if the current output string was already empty', function() {
            keyboard.delete();

            keyboard2.output = "T";
            keyboard2.delete();
            keyboard2.delete();

            expect(keyboard.output).toBe("");
            expect(keyboard2.output).toBe("");
        })

        it('should return the resultant current keyboard output string', function() {
            keyboard.output = 'Seven eleven';
            const outputResult = keyboard.delete();

            keyboard2.output = 'Stranded in space';
            const outputResult2 = keyboard2.delete();

            expect(outputResult).toBe('Seven eleve');
            expect(outputResult2).toBe('Stranded in spac');
        })

        afterEach(() => {
            keyboard = null;
            keyboard2 = null;
        })
    })

    describe('enter()', function() {
        beforeEach(() => {
            keyboard = new Keyboard('inexistent-element', 'es-GB');
            keyboard2 = new Keyboard('inexistent-element', 'american');
        })

        it('should add a new line to the end of the existing keyboard output string', function() {
            keyboard.output = 'The sky is blue';
            keyboard2.output = 'Here we go again!';

            keyboard.enter();
            keyboard2.enter();

            expect(keyboard.output).toBe('The sky is blue\n');
            expect(keyboard2.output).toBe('Here we go again!\n');
        })

        it('should return the resultant current keyboard output string', function() {
            keyboard.output = 'Explanation of nothing';
            keyboard2.output = 'Trying my best';

            const outputResult = keyboard.enter();
            const outputResult2 = keyboard2.enter();

            expect(outputResult).toBe('Explanation of nothing\n');
            expect(outputResult2).toBe('Trying my best\n');
        })

        afterEach(() => {
            keyboard = null;
            keyboard2 = null;
        })
    })

    describe('space()', function() {
        beforeEach(() => {
            keyboard = new Keyboard('inexistent-element', 'ru-RU');
            keyboard2 = new Keyboard('inexistent-element', 'italian');
        })

        it('should add an empty space to the end of keyboard output string', function() {
            keyboard.output = 'hello';
            keyboard.space();

            keyboard2.output = 'this is a test';
            keyboard2.space();

            expect(keyboard.output).toBe('hello ');
            expect(keyboard2.output).toBe('this is a test ');
        })

        it('should return the resultant current keyboard output string', function() {
            keyboard.output = 'flowers in the garden';
            const outputResult = keyboard.space();

            keyboard2.output = 'wild lion';
            const outputResult2 = keyboard2.space();

            expect(outputResult).toBe('flowers in the garden ');
            expect(outputResult2).toBe('wild lion ');
        })

        afterEach(() => {
            keyboard = null;
            keyboard2 = null;
        })
    })

    describe('AUXILIARY METHODS', function() {
        describe('measureKeyboardFrame()', function() {
            beforeAll(() => {
                mainTestDiv = document.createElement('div');
                mainTestDiv.setAttribute('id', 'main-element');
                mainTestDiv.style.opacity = '0';
                document.body.appendChild(mainTestDiv);
            })

            beforeEach(() => {
                keyboard = new Keyboard('main-element', 'es-ES');
                keyboard.init();
            })

            it('should return "ok" if the keyboard is being initialized within a container equal or bigger than 200px wide', function() {
                mainTestDiv.style.width = "350px";
                const sizingResult = keyboard.measureKeyboardFrame();
                mainTestDiv.style.width = "201px";
                const sizingResult2 = keyboard.measureKeyboardFrame();
                mainTestDiv.style.width = "1500px";
                const sizingResult3 = keyboard.measureKeyboardFrame();

                expect(sizingResult).toBe('ok');
                expect(sizingResult2).toBe('ok');
                expect(sizingResult3).toBe('ok');
            })

            it('should return "ko" if the keyboard is being initialized within a container smaller than 200px wide', function() {
                mainTestDiv.style.width = "199px";
                const sizingResult = keyboard.measureKeyboardFrame();
                mainTestDiv.style.width = "10px";
                const sizingResult2 = keyboard.measureKeyboardFrame();
                mainTestDiv.style.width = "125px";
                const sizingResult3 = keyboard.measureKeyboardFrame();

                expect(sizingResult).toBe('ko');
                expect(sizingResult2).toBe('ko');
                expect(sizingResult3).toBe('ko');
            })

            afterEach(() => {
                keyboard = null;
            })

            afterAll(() => {
                mainTestDiv.remove();
                mainTestDiv = null;
            })
        })

        describe('displayMessage() method', function() {
            beforeAll(() => {
                auxTestDiv = document.createElement('div');
                auxTestDiv.setAttribute('id', 'keyboard-frame');
                auxTestDiv.style.opacity = '0';
                document.body.appendChild(auxTestDiv);
            })

            beforeEach(() => {
                keyboard = new Keyboard('keyboard-frame', 'en-US');
                keyboard.init();
            })

            it('should receive 1 string parameter', function() {
                const call1 = keyboard.displayMessage();
                const call2 = keyboard.displayMessage('insufficient-width');
                const call3 = keyboard.displayMessage(4);
                const call4 = keyboard.displayMessage('insufficient-width', 'fantastic');

                expect(call1).toBeUndefined();
                expect(call2).toBe('insufficient-width');
                expect(call3).toBeUndefined();
                expect(call4).toBeUndefined();
            })

            it('should match the accepted string paramater with one corresponding output string', function() {
                expect(function() {keyboard.displayMessage('test-message')}).toThrow();
                expect(function() {keyboard.displayMessage('insufficient-width')}).not.toThrow();
            })

            it('should inject the output string into the current keyboard instance AuxPanel', function() {
                keyboard.displayMessage('insufficient-width');

                expect(keyboard.auxPanel.innerText).toBe('Container too small. Keyboard requires at least 200px width to be initialized.')
            })

            afterEach(() => {
                keyboard = null;
            })

            afterAll(() => {
                auxTestDiv.remove();
                auxTestDiv = null;
            })
        })

        describe('manageLayers() method', function() {
            beforeAll(() => {
                mainTestDiv = document.createElement('div');
                mainTestDiv.setAttribute('id', 'main-element');
                mainTestDiv.style.opacity = '0';
                document.body.appendChild(mainTestDiv);
            })
    
            beforeEach(() => {
                keyboard = new Keyboard('main-element', 'es-ES');
                keyboard.init();

                keyboard.activeLayer = '';
    
                normalKeyboard = document.querySelector('#main-element .keyboard--normal');
                capsKeyboard = document.querySelector('#main-element .keyboard--capitalized');
                shiftKeyboard = document.querySelector('#main-element .keyboard--shifted');
                altKeyboard = document.querySelector('#main-element .keyboard--alternated');
                emojiKeyboard = document.querySelector('#main-element .keyboard--emotional');
            })

            it('should hide all keyboards except the "normal" version if called with "normal"', function() {
                keyboard.manageLayers('shifted');
                keyboard.manageLayers('normal');
    
                expect(normalKeyboard.classList.contains('show')).toBeTrue();
                expect(normalKeyboard.classList.contains('hide')).toBeFalse();
                expect(capsKeyboard.classList.contains('show')).toBeFalse();
                expect(capsKeyboard.classList.contains('hide')).toBeTrue();
                expect(shiftKeyboard.classList.contains('show')).toBeFalse();
                expect(shiftKeyboard.classList.contains('hide')).toBeTrue();
                expect(altKeyboard.classList.contains('show')).toBeFalse();
                expect(altKeyboard.classList.contains('hide')).toBeTrue();
                expect(emojiKeyboard.classList.contains('show')).toBeFalse();
                expect(emojiKeyboard.classList.contains('hide')).toBeTrue();
            })

            it('should hide all keyboards except the "capitalized" version if called with "capitalized"', function() {
                keyboard.manageLayers('capitalized');
    
                expect(normalKeyboard.classList.contains('show')).toBeFalse();
                expect(normalKeyboard.classList.contains('hide')).toBeTrue();
                expect(capsKeyboard.classList.contains('show')).toBeTrue();
                expect(capsKeyboard.classList.contains('hide')).toBeFalse();
                expect(shiftKeyboard.classList.contains('show')).toBeFalse();
                expect(shiftKeyboard.classList.contains('hide')).toBeTrue();
                expect(altKeyboard.classList.contains('show')).toBeFalse();
                expect(altKeyboard.classList.contains('hide')).toBeTrue();
                expect(emojiKeyboard.classList.contains('show')).toBeFalse();
                expect(emojiKeyboard.classList.contains('hide')).toBeTrue();
            })

            it('should hide all keyboards except the "shifted" version if called with "shifted"', function() {
                keyboard.manageLayers('shifted');
    
                expect(normalKeyboard.classList.contains('show')).toBeFalse();
                expect(normalKeyboard.classList.contains('hide')).toBeTrue();
                expect(capsKeyboard.classList.contains('show')).toBeFalse();
                expect(capsKeyboard.classList.contains('hide')).toBeTrue();
                expect(shiftKeyboard.classList.contains('show')).toBeTrue();
                expect(shiftKeyboard.classList.contains('hide')).toBeFalse();
                expect(altKeyboard.classList.contains('show')).toBeFalse();
                expect(altKeyboard.classList.contains('hide')).toBeTrue();
                expect(emojiKeyboard.classList.contains('show')).toBeFalse();
                expect(emojiKeyboard.classList.contains('hide')).toBeTrue();
            })

            it('should hide all keyboards except the "alternated" version if called with "alternated"', function() {
                keyboard.manageLayers('alternated');
    
                expect(normalKeyboard.classList.contains('show')).toBeFalse();
                expect(normalKeyboard.classList.contains('hide')).toBeTrue();
                expect(capsKeyboard.classList.contains('show')).toBeFalse();
                expect(capsKeyboard.classList.contains('hide')).toBeTrue();
                expect(shiftKeyboard.classList.contains('show')).toBeFalse();
                expect(shiftKeyboard.classList.contains('hide')).toBeTrue();
                expect(altKeyboard.classList.contains('show')).toBeTrue();
                expect(altKeyboard.classList.contains('hide')).toBeFalse();
                expect(emojiKeyboard.classList.contains('show')).toBeFalse();
                expect(emojiKeyboard.classList.contains('hide')).toBeTrue();
            })

            it('should hide all keyboards except the "emotional" version if called with "emotional"', function() {
                keyboard.manageLayers('emotional');
    
                expect(normalKeyboard.classList.contains('show')).toBeFalse();
                expect(normalKeyboard.classList.contains('hide')).toBeTrue();
                expect(capsKeyboard.classList.contains('show')).toBeFalse();
                expect(capsKeyboard.classList.contains('hide')).toBeTrue();
                expect(shiftKeyboard.classList.contains('show')).toBeFalse();
                expect(shiftKeyboard.classList.contains('hide')).toBeTrue();
                expect(altKeyboard.classList.contains('show')).toBeFalse();
                expect(altKeyboard.classList.contains('hide')).toBeTrue();
                expect(emojiKeyboard.classList.contains('show')).toBeTrue();
                expect(emojiKeyboard.classList.contains('hide')).toBeFalse();
            })

            afterEach(() => {
                keyboard = null;
            })
    
            afterAll(() => {
                mainTestDiv.remove();
                mainTestDiv = null;
            })
        })

        describe('getScreenCursorPosition()', function() {
            let screen;
            let position;
            
            beforeAll(() => {
                mainTestDiv = document.createElement('div');
                mainTestDiv.setAttribute('id', 'main-element');
                mainTestDiv.style.opacity = '0';
                document.body.appendChild(mainTestDiv);
                keyboard6 = new Keyboard('main-element', 'es-ES');
                keyboard6.init();
                screen = document.querySelector('#main-element .screen');
            })

            beforeEach(() => {
                position = keyboard6.getScreenCursorPosition(screen);
            })

            it('should return a positive number every time it gets called', function() {
                expect(typeof position).toBe('number');
                expect(position).toBeGreaterThanOrEqual(0);
            })

            it ('should update the "screenCursorPosition" property of the instantiated keyboard state', function() {
                expect(keyboard6.screenCursorPosition).toBe(position);
            })

            afterEach(() => {
                position = null;
            })

            afterAll(() => {
                keyboard6 = null;
                mainTestDiv.remove();
                mainTestDiv = null;
            })
        })

        describe('composeChar()', function() {
            beforeAll(() => {
                keyboard = new Keyboard('inexistent-element', 'fr-FR');
                keyboard2 = new Keyboard('inexistent-element', 'spanish');
                keyboard3 = new Keyboard('whatever-element', 'german');
            })

            it('should add modified characters to the end of the current output string, in case there is a graph modifier in place', function() {
                keyboard.output = 't';
                keyboard.graphModifier = '^';
                
                keyboard2.output = 'emoci';
                keyboard2.graphModifier = '´';
    
                keyboard3.output = 'op';
                keyboard3.graphModifier = '`';
    
                keyboard.write('o');
                keyboard.write('t');
                keyboard2.write('o');
                keyboard2.write('n');
                keyboard3.write('A');
    
                expect(keyboard.output).toBe('tôt');
                expect(keyboard2.output).toBe('emoción');
                expect(keyboard3.output).toBe('opÀ');
            })
    
            afterAll(() => {
                keyboard = null;
                keyboard2 = null;
                keyboard3 = null;
            })
        })
    })
})