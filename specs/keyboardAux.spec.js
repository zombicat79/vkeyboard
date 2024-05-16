describe('KEYBOARD.JS AUXILIARY METHODS', function() {
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
            expect(typeof position).toBe('object');
            expect([...position]).toEqual(position);
            expect(position[0]).toBeGreaterThanOrEqual(0);
            expect(position[1]).toBeGreaterThanOrEqual(0);
        })

        it ('should update the "screenCursorPosition" property of the instantiated keyboard state', function() {
            expect(keyboard6.screenCursorPosition).toEqual(position);
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

    describe('injectContent()' , function() {
        beforeAll(() => {
            auxTestDiv = document.createElement('div');
            auxTestDiv.setAttribute('id', 'aux-element');
            auxTestDiv.style.opacity = '0';
            document.body.appendChild(auxTestDiv);
            keyboard4 = new Keyboard('aux-element', 'spanish');
            keyboard4.init();
        })

        it('should get 1 string argument called "payload"', function() {
            expect(keyboard4.injectContent(34)).toBeFalse();
            expect(keyboard4.injectContent(null)).toBeFalse();
            expect(keyboard4.injectContent(['re'])).toBeFalse();
            expect(keyboard4.injectContent({})).toBeFalse();
            expect(keyboard4.injectContent('f')).toBeTruthy();
            expect(keyboard4.injectContent('f')[1]).toBe('f');
            expect(keyboard4.injectContent('&#x1F642')[1]).toBe('&#x1F642');
        })

        it('should create a new string, resulting of the modification of the current screen output', function() {
            keyboard4.output = "hello world";
            const operationResult = keyboard4.injectContent("s");
            
            expect(operationResult[0]).toBe("hello world");
        })

        it('the newly created string should be an injection of the "payload" into the current output, between the values set for "screenCursorPosition"', function() {
            keyboard4.output = "Inject something into me";
            keyboard4.screenCursorPosition = [6, 7];
            const operationResult = keyboard4.injectContent("s");

            keyboard4.screenCursorPosition = [16, keyboard4.output.length];
            const operationResult2 = keyboard4.injectContent("");

            keyboard4.screenCursorPosition = [7, 16];
            const operationResult3 = keyboard4.injectContent("caffeine");

            keyboard4.screenCursorPosition = [0, keyboard4.output.length];
            const operationResult4 = keyboard4.injectContent("");

            expect(operationResult[2]).toBe('Injectssomething into me');
            expect(operationResult2[2]).toBe('Inject something');
            expect(operationResult3[2]).toBe('Inject caffeine into me');
            expect(operationResult4[2]).toBe('');
        })

        it ('should augment the current "screenCursorPosition" by one unit', function() {
            keyboard4.output = "Hello world";
            keyboard4.screenCursorPosition = [5, 6];
            const operationResult = keyboard4.injectContent("s");

            expect(operationResult[2]).toBe('Hellosworld');
            expect(keyboard4.screenCursorPosition).toEqual([6, 2]);
        })

        it('should return an array containing the previous screen output, the modifying payload and the newly created string', function() {
            keyboard4.output = "This test is going to be successful";
            keyboard4.screenCursorPosition = [25, keyboard4.output.length];
            const operationResult = keyboard4.injectContent("amazing");

            keyboard4.screenCursorPosition = [0, 4];
            const operationResult2 = keyboard4.injectContent("My");

            expect(operationResult).toEqual(['This test is going to be successful', 'amazing', 'This test is going to be amazing']);
            expect(operationResult2).toEqual(['This test is going to be successful', 'My', 'My test is going to be successful']);
        })

        afterEach(() => {
            keyboard4.output = "";
        })

        afterAll(() => {
            keyboard4 = null;
            auxTestDiv.remove();
            auxTestDiv = null;
        })
    })

    xdescribe('mountDropdown()', function() {
        it('should be 1 parameter that should be an HTML element of type "button" with class attribute "keyboard__button--emoji"', function() {

        })

        it('should throw an error if it were called with more than 1 parameter', function() {

        })

        it('should throw an error if it were called with an invalid parameter', function() {

        })

        it('should create a new HTML of type "select", as a direct child of the element passed in as the argument', function() {

        })

        it('should add a class attribute of "" to the "select" element', function() {

        })

        it('should obtain the "data-content" value of the element passed in as argument and format it', function() {

        })

        it('should look up the formatted "data-content" value and create as many "option" subelements as there are in the returned array', function() {

        })

        it('should add an "onchange" event listener to the "select" element, that should call the "write()" method with the current value as argument', function() {

        })

        it('should add an "onblur" event listener to the "select" element, that should call the "unmountDropdown()" method with the element itself as argument', function() {

        })
    })

    xdescribe('unmountDropdown()', function() {
        it('should be 1 parameter that should be an HTML element of type "select"', function() {

        })

        it('should throw an error if it were called with more than 1 parameter', function() {

        })

        it('should throw an error if it were called with an invalid parameter', function() {

        })

        it('should remove the recived HTML element from the DOM', function() {

        })
    })
})