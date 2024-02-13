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

        it('should have an arm() method', function() {
            const button = document.createElement('button');
            button.classList.add('random-test-class');

            expect(keyboard.arm(button)).toBeTruthy();
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

        it('should throw an error if called on a Keyboard instance that has already been initialized', function() {
            expect(function() {keyboard.init()}).toThrowError('Keyboard already instantiated on current object');
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

        it('should call the arm() method for every button in the keyboard', function() {
            const spanishNormalTotal = spanishMap.normal[0].length + spanishMap.normal[1].length + spanishMap.normal[2].length + spanishMap.normal[3].length + spanishMap.normal[4].length;
            const spanishCapitalizedTotal = spanishMap.capitalized[0].length + spanishMap.capitalized[1].length + spanishMap.capitalized[2].length + spanishMap.capitalized[3].length + spanishMap.capitalized[4].length;
            const spanishShiftedTotal = spanishMap.shifted[0].length + spanishMap.shifted[1].length + spanishMap.shifted[2].length + spanishMap.shifted[3].length + spanishMap.shifted[4].length;
            const spanishAlternatedTotal = spanishMap.alternated[0].length + spanishMap.alternated[1].length + spanishMap.alternated[2].length + spanishMap.alternated[3].length + spanishMap.alternated[4].length;
            const spanishGrandTotal = spanishNormalTotal + spanishCapitalizedTotal + spanishShiftedTotal + spanishAlternatedTotal;

            const russianNormalTotal = russianMap.normal[0].length + russianMap.normal[1].length + russianMap.normal[2].length + russianMap.normal[3].length + russianMap.normal[4].length;
            const russianCapitalizedTotal = russianMap.capitalized[0].length + russianMap.capitalized[1].length + russianMap.capitalized[2].length + russianMap.capitalized[3].length + russianMap.capitalized[4].length;
            const russianShiftedTotal = russianMap.shifted[0].length + russianMap.shifted[1].length + russianMap.shifted[2].length + russianMap.shifted[3].length + russianMap.shifted[4].length;
            const russianAlternatedTotal = russianMap.alternated[0].length + russianMap.alternated[1].length + russianMap.alternated[2].length + russianMap.alternated[3].length + russianMap.alternated[4].length;
            const russianGrandTotal = russianNormalTotal + russianCapitalizedTotal + russianShiftedTotal + russianAlternatedTotal;

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

    /* describe('destroy() method', function() {
        beforeAll(() => {
            mainTestDiv = document.createElement('div');
            mainTestDiv.setAttribute('id', 'main-element');
            mainTestDiv.style.opacity = '0';
            document.body.appendChild(mainTestDiv);
            keyboard = new Keyboard('main-element', 'it-IT');
        })

        beforeEach(() => {
            keyboard.init();
        })

        it('should remove a previously initialized keyboard from the DOM', function() {
            expect(document.getElementById('main-element')).toBeUndefined();
        })

        xit('should remove a previously initialized keyboard instance', function() {
            // expect(keyboard).toBeNull();
        })

        afterAll(() => {
            mainTestDiv = null;
            keyboard = null;
        })
    }) */

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