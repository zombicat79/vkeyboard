/*
    KEYBOARD CLASS

    Creates an instance of a multilanguage virtual keyboard

    @param1 - string - id attribute of the HTML element on which the keyboard will be instantiated
    @param2 - string - the language-country code corresponding to the resulting keyboard
*/

class Keyboard {
    constructor(target, language) {
        if (!target) {
            throw new Error('Initialized with no parameters');
        }
        if (!language) {
            throw new Error('Initialized with too few parameters');
        }
        if (typeof target !== 'string') {
            throw new Error('Parameter 1 should be a string');
        }
        if (typeof language !== 'string') {
            throw new Error('Parameter 2 should be a string');
        }
        
        this.target = target;
        this.language = null;
        this.langId = null;
        this.map = null;
        this.activeLayer = 'normal';
        this.armedBtns = 0;
        this.output = "";
        this.screen = null;
        this.screenCursorPosition = [0, 0];
        this.auxPanel = null;
        this.graphModifier = null;
        this.initReport = [];

        this.availableLangCodes = ["es-ES", "en-GB", "en-US", "it-IT", "fr-FR", "de-DE", "ru-RU"];
        this.availableLanguages = ["spanish", "english", "british", "american", "italian", "french", "german", "russian"];

        if (this.availableLangCodes.includes(language)) {
            this.language = language;
        } else {
            this.language = language.toLowerCase();
            if (!(this.availableLanguages.includes(this.language))) {
                this.language = null;
            }
        }
        
        switch(this.language) {
            case "es-ES":
            case "spanish":
                this.map = spanishMap;
                this.langId = 'es';
                break;
            case "en-GB":
            case "british":
            case "english":
                this.map = britishMap;
                this.langId = 'en';
                break;
            case "en-US":
            case "american":
                this.map = americanMap;
                this.langId = 'us';
                break;
            case "it-IT":
            case "italian":
                this.map = italianMap;
                this.langId = 'it';
                break;
            case "fr-FR":
            case "french":
                this.map = frenchMap;
                this.langId = 'fr';
                break;
            case "de-DE":
            case "german":
                this.map = germanMap;
                this.langId = 'de';
                break;
            case "ru-RU":
            case "russian":
                this.map = russianMap;
                this.langId = 'ru';
                break;
        }
    }

    init() {
        if (this.initReport.length !== 0) throw new Error('Keyboard already instantiated on current object');

        const initElement = document.getElementById(this.target);
        if (!initElement) throw new Error('Keyboard instantiated on an inexistent DOM Node');

        const initMeasurement = this.measureKeyboardFrame();

        const childrenElements = [
            document.createElement('textarea'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div')
        ];
        
        childrenElements.forEach((el, index) => {
            index === 0 ? el.classList.add('screen') : el.classList.add('keyboard');
            // index === 0 ? el.readOnly = true : null;
            index === 0 ? this.screen = el : null;

            if (index === 0) {
                const method = this.getScreenCursorPosition.bind(this);
                el.addEventListener('click', function(event) {
                    method(event);
                });
                /* el.addEventListener('blur', function() {
                    this.screenCursorPosition = [null, null];
                }) */
            }
            switch(index) {
                case 1:
                    el.classList.add('keyboard--normal', 'show');
                    break;
                case 2:
                    el.classList.add('keyboard--capitalized', 'hide');
                    break;
                case 3:
                    el.classList.add('keyboard--shifted', 'hide');
                    break;
                case 4:
                    el.classList.add('keyboard--alternated', 'hide');
                    break;
                case 5:
                    el.classList.add('keyboard--emotional', 'hide');
                    break;
            }
            if (index === 6) {
                this.auxPanel = el;
                el.classList.remove('keyboard');
                el.classList.add('aux-panel', 'hide');
            }

            const langCode = this.map.language.match(/[A-Z]{2}$/)
            el.classList.add(`keyboard--${langCode[0]}`);

            initElement.appendChild(el);
        });

        if (initMeasurement === 'ko') {
            const initAuxMethod1 = this.displayMessage.bind(this);
            const initAuxMethod2 = this.manageLayers.bind(this);
            initAuxMethod1('insufficient-width');
            initAuxMethod2('aux');
            return false;
        }

        return this.mount();
    }

    measureKeyboardFrame() {
        const size = document.getElementById(this.target).offsetWidth;
        if (size < 200) {
            return "ko";
        }
        
        return "ok";
    }

    displayMessage(...params) {
        if (params.length !== 1) return undefined;
        if (typeof params[0] !== 'string') return undefined;

        switch(params[0]) {
            case "insufficient-width":
                this.auxPanel.innerText = 'Container too small. Keyboard requires at least 200px width to be initialized.';
                break;
            default:
                throw new Error('Message type not recognized');
        }

        return params[0];
    }

    mount() {
        const keyboardDIVs = Array.from(document.querySelectorAll(`#${this.target} .keyboard`));
        let keyboardType;

        keyboardDIVs.forEach((keyboard, superindex) => {
            switch(true) {
                case keyboard.classList.contains('keyboard--normal'):
                    keyboardType = 'normal';
                    break;
                case keyboard.classList.contains('keyboard--capitalized'):
                    keyboardType = 'capitalized';
                    break;
                case keyboard.classList.contains('keyboard--shifted'):
                    keyboardType = 'shifted';
                    break;
                case keyboard.classList.contains('keyboard--alternated'):
                    keyboardType = 'alternated';
                    break;
                case keyboard.classList.contains('keyboard--emotional'):
                    keyboardType = 'emotional';
                    break;
            }

            let rowPosition = 0;
            this.map[keyboardType].forEach((array) => {
                let columnPosition = 0;
                let shiftKeyCount = 1;
                let controlKeyCount = 1;
                let altKeyCount = 1;

                array.forEach((el) => {
                    const newBtn = document.createElement('button');
                    newBtn.classList.add('keyboard__button');
                    newBtn.dataset.row = rowPosition;
                    newBtn.dataset.column = columnPosition;
                    newBtn.dataset.content = el;
                
                    if (!el) {
                        newBtn.innerHTML = "";
                        newBtn.classList.add('keyboard__button--void');
                    } else if (/^[0-9]{1,3}$/.test(el)) {
                        newBtn.innerHTML = String.fromCharCode(el);
                        newBtn.id = this.langId + '-' + keyboardType + '-' + el;
                        newBtn.classList.add('keyboard__button--standard');
                    } else if (/^\*/.test(el)) {
                        const trimmedEl = Number(el.replace("*", ""));
                        newBtn.innerHTML = String.fromCharCode(trimmedEl);
                        newBtn.id = this.langId + '-' + keyboardType + '-' + el;
                        newBtn.classList.add('keyboard__button--standard');
                    } else if (/^&#x\w+$/.test(el)) {
                        newBtn.innerHTML = el;
                        newBtn.id = this.langId + '-' + keyboardType + '-' + el;
                        newBtn.classList.add('keyboard__button--emoji');
                    } else {
                        newBtn.innerHTML = el;
                        if (/^\w{2,}$/.test(el)) {
                            newBtn.classList.add('keyboard__button--operation');
                            if (el === "Shift") {
                                newBtn.id = this.langId + '-' + keyboardType + '-' + el + '-' + shiftKeyCount;
                                shiftKeyCount += 1;
                            }
                            else if (el === "Control") {
                                newBtn.id = this.langId + '-' + keyboardType + '-' + el + '-' + controlKeyCount;
                                controlKeyCount += 1;
                            }
                            else if (el === "Alt") {
                                newBtn.id = this.langId + '-' + keyboardType + '-' + el + '-' + altKeyCount;
                                altKeyCount += 1;
                            } else {
                                newBtn.id = this.langId + '-' + keyboardType + '-' + el;
                            }
                        } else {
                            newBtn.id = this.langId + '-' + keyboardType + '-' + el;
                            newBtn.classList.add('keyboard__button--standard');
                        }
                    }

                    this.arm(newBtn);
                    keyboardDIVs[superindex].appendChild(newBtn);
                    columnPosition += 1;
                    // console.log(newBtn)
                })
                rowPosition += 1;
            })

            keyboardType = null;
        })

        return true;
    }

    arm(btn) {
        if (!btn) {
            throw new Error ('Tried to arm without specifying any element');
        }
        if (btn.nodeName !== 'BUTTON') {
            throw new Error ('Tried to arm an element that is not a button');
        }

        this.armedBtns += 1;
        let action = null;

        const btnClasses = btn.getAttribute('class');
        if (btnClasses) {
            switch(true) {
                case btnClasses.includes('standard'):
                    if (btn.dataset.content === "" || btn.dataset.content === "null") {
                        action = null;
                    } else if (/^\*/.test(btn.dataset.content)) {
                        const method = this.writeAux.bind(this);
                        btn.addEventListener('click', () => {
                            method(btn.innerHTML);
                        });
                        action = 'writeAux';
                    } else {
                        const method = this.write.bind(this);
                        btn.addEventListener('click', function() {
                            method(btn.innerHTML);
                        });
                        action = 'write';
                    }
                    break;
                case btnClasses.includes('emoji'):
                    if (btn.dataset.content === "" || btn.dataset.content === "null") {
                        action = null;
                    } else {
                        const method = this.mountDropdown.bind(this);
                        btn.addEventListener('click', function() {
                            method(btn);
                        });
                        action = 'dropdown';
                    }
                    break;
                case btnClasses.includes('operation'):
                    if (btn.dataset.content === "Caps") {
                        const method = this.capitalize.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'capitalize';
                    } else if (btn.dataset.content === "Shift") {
                        const method = this.shift.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'shift';
                    } else if (btn.dataset.content === "Alt") {
                        const method = this.alternate.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'alternate';
                    } else if (btn.dataset.content === "Tab") {
                        const method = this.tabulate.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'tabulate';
                    } else if (btn.dataset.content === "Emoji") {
                        const method = this.goEmotional.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'emotional';
                    } else if (btn.dataset.content === "Backspace") {
                        const method = this.delete.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'delete';
                    } else if (btn.dataset.content === "Enter") {
                        const method = this.tabulate.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'enter';
                    }
                    else if (btn.dataset.content === "Space") {
                        const method = this.space.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'space';
                    } else if (btn.dataset.content === "Control") {
                        const method = this.space.bind(this);
                        btn.addEventListener('click', function() {
                            method();
                        });
                        action = 'control';
                    }
                    break;
            }

        }

        const armReport = {button: btn, payload: btn.innerHTML, action: action, armed: true};
        this.initReport.push(armReport);
        return armReport;
    }

    tabulate() {
        this.output += '\t';
        if (this.screen) {
            this.screen.value = this.output;
        }

        return this.output;
    }

    capitalize() {
        this.activeLayer === 'capitalized' ? this.activeLayer = 'normal' : this.activeLayer = 'capitalized';
        
        this.manageLayers(this.activeLayer);
        return true;
    }

    shift() {
        this.activeLayer === 'shifted' ? this.activeLayer = 'normal' : this.activeLayer = 'shifted';
        
        this.manageLayers(this.activeLayer);
        return true;
    }

    goEmotional() {
        this.activeLayer === 'emotional' ? this.activeLayer = 'normal' : this.activeLayer = 'emotional';
        
        this.manageLayers(this.activeLayer);
        return true;
    }

    control() {
        // TODO
    }

    alternate() {
        this.activeLayer === 'alternated' ? this.activeLayer = 'normal' : this.activeLayer = 'alternated';
        
        this.manageLayers(this.activeLayer);
        return true;
    }

    manageLayers(layerToShow) {
        const keyboardLayers = Array.from(document.getElementById(this.target).children);
        let deactivatedLayers;
        switch(layerToShow) {
            case 'normal':
                deactivatedLayers = keyboardLayers.map((layer) => {
                    if (layer.classList.contains('keyboard--normal')) {
                        layer.classList.remove('hide');
                        layer.classList.add('show');
                    } else {
                        return layer;
                    }
                })
                break;
            case 'capitalized':
                deactivatedLayers = keyboardLayers.map((layer) => {
                    if (layer.classList.contains('keyboard--capitalized')) {
                        layer.classList.remove('hide');
                        layer.classList.add('show');
                    } else {
                        return layer;
                    }
                })
                break;
            case 'shifted':
                deactivatedLayers = keyboardLayers.map((layer) => {
                    if (layer.classList.contains('keyboard--shifted')) {
                        layer.classList.remove('hide');
                        layer.classList.add('show');
                    } else {
                        return layer;
                    }
                })
                break;
            case 'alternated':
                deactivatedLayers = keyboardLayers.map((layer) => {
                    if (layer.classList.contains('keyboard--alternated')) {
                        layer.classList.remove('hide');
                        layer.classList.add('show');
                    } else {
                        return layer;
                    }
                })
                break;
            case 'emotional':
                deactivatedLayers = keyboardLayers.map((layer) => {
                    if (layer.classList.contains('keyboard--emotional')) {
                        layer.classList.remove('hide');
                        layer.classList.add('show');
                    } else {
                        return layer;
                    }
                })
                break;
            case 'aux':
                deactivatedLayers = keyboardLayers.map((layer) => {
                    if (layer.classList.contains('aux-panel')) {
                        layer.classList.remove('hide');
                        layer.classList.add('show');
                    } else {
                        return layer;
                    }
                })
                break;
        }

        deactivatedLayers.forEach((layer) => {
            if (layer && !(layer.classList.contains("screen"))) {
                layer.classList.remove('show');
                layer.classList.add('hide');
            }
        });

        return true;
    }

    getScreenCursorPosition(event) {
        const screen = event.target || event;
        const startPosition = screen.selectionStart;
        const endPosition = screen.selectionEnd;
        this.screenCursorPosition = [startPosition, endPosition];
        console.log(this.screenCursorPosition)
        
        return [startPosition, endPosition];
    }

    injectContent(payload) {
        if (typeof payload !== 'string') {
            return false;
        }

        const previousOutput = this.output.split("");
        const modificationStartIndex = this.screenCursorPosition[0];
        const positionsToBeReplaced = (this.screenCursorPosition[1] - this.screenCursorPosition[0]);
        previousOutput.splice(modificationStartIndex, positionsToBeReplaced, payload);
        const newOutput = [...previousOutput].join("");
        
        this.screenCursorPosition = [this.screenCursorPosition[0]+1, positionsToBeReplaced+1];

        return [this.output, payload, newOutput];
    }

    extractContent() {
        const previousOutput = this.output.split("");
        const modificationStartIndex = this.screenCursorPosition[0];
        const positionsToBeDeleted = (this.screenCursorPosition[1] - this.screenCursorPosition[0]);
        if (!positionsToBeDeleted) {
            previousOutput.splice(modificationStartIndex-1, 1);
        } else {
            previousOutput.splice(modificationStartIndex, positionsToBeDeleted);
        }
        const newOutput = [...previousOutput].join("");

        this.screenCursorPosition = [this.screenCursorPosition[0]-1, this.screenCursorPosition[1]-1];

        return [this.output, null, newOutput];
    }

    mountDropdown(parentBtn, controlParam = null) {
        if(controlParam) throw new Error('mountDropdown() must be called exactly with 1 argument.');
        if(typeof parentBtn === 'string') throw new Error('mountDropdown() does not accept string arguments.');
        if(typeof parentBtn === 'number') throw new Error('mountDropdown() does not accept numeric arguments.');
        if(parentBtn === null) throw new Error('mountDropdown() only accepts HTML elements as a valid argument.');

        if(parentBtn.nodeName !== 'BUTTON' || !(parentBtn.classList.contains('keyboard__button--emoji'))) {
            return false;
        }

        if(parentBtn.querySelector('select')) {
            return false;
        }

        const emojiSelect = document.createElement('select');
        emojiSelect.classList.add('emoji__select');
        parentBtn.appendChild(emojiSelect);

        const optionSelector = document.createElement('option');
        optionSelector.value = null;
        optionSelector.innerText = "\u2753";
        emojiSelect.appendChild(optionSelector);

        const formattedDataContent = parentBtn.dataset.content.substring(2);

        const emojiGroupMembers = emojiConverter[formattedDataContent];
        emojiGroupMembers.forEach((el) => {
            const newOption = document.createElement('option');
            newOption.value = String.fromCodePoint(parseInt (el.substring(3), 16));
            newOption.innerText = String.fromCodePoint(parseInt (el.substring(3), 16));
            emojiSelect.appendChild(newOption);
        });

        const method1 = this.write.bind(this);
        const method2 = this.unmountDropdown.bind(this);    
        emojiSelect.addEventListener('change', function() {
            method1(emojiSelect.value);
            optionSelector.selected = true;
        });
        emojiSelect.addEventListener('blur', function() {
            method2(emojiSelect);
        });
        
        emojiSelect.focus();
        return { completed: true, emojiGroupIdentifier: formattedDataContent, emojiGroupMembers: emojiGroupMembers};
    }

    unmountDropdown(selectHTMLelement, controlParam = null) {
        if(controlParam) throw new Error('unmountDropdown() must be called exactly with 1 argument.');
        if(typeof selectHTMLelement === 'string') throw new Error('unmountDropdown() does not accept string arguments.');
        if(typeof selectHTMLelement === 'number') throw new Error('unmountDropdown() does not accept numeric arguments.');
        if(selectHTMLelement === null) throw new Error('unmountDropdown() only accepts HTML elements as a valid argument.');

        if(selectHTMLelement.nodeName !== 'SELECT' || !(selectHTMLelement.classList.contains('emoji__select'))) {
            return false;
        }

        selectHTMLelement.remove();

        return true;
    }

    write(payload) {
        const boundComposer = this.composeChar.bind(this);
        if (this.graphModifier) {
            const allowedPayload = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
            if (allowedPayload.includes(payload)) {
                let processedChar = "";
                switch(this.graphModifier) {
                    case '`':
                        processedChar = boundComposer(payload, 0);
                        break;
                    case '´':
                        processedChar = boundComposer(payload, 1);
                        break;
                    case '^':
                        processedChar = boundComposer(payload, 2);
                        break;
                    case '¨':
                        processedChar = boundComposer(payload, 3);
                        break;
                }

                if (!this.screenCursorPosition[0]) {
                    this.output += processedChar;
                } else  {
                    this.output = this.injectContent(processedChar)[2];
                }
            }
        } else {
            if (payload === '&lt;') payload = "<";
            if (payload === '&gt;') payload = ">";
            if (payload === '&amp;') payload = "&";

            if (!this.screenCursorPosition[0]) {
                this.output += payload;
            } else {
                this.output = this.injectContent(payload)[2];
            }
        }

        if (this.screen) {
            this.screen.value = this.output;
        }
        this.graphModifier = null;

        return this.output;
    }

    composeChar(character, modifierIndex) {
        const specialChars = {
            a: ['à', 'á', 'â', 'ä'],
            e: ['è', 'é', 'ê', 'ë'],
            i: ['ì', 'í', 'î', 'ï'],
            o: ['ò', 'ó', 'ô', 'ö'],
            u: ['ù', 'ú', 'û', 'ü'],
            A: ['À', 'Á', 'Â', 'Ä'],
            E: ['È', 'É', 'Ê', 'Ë'],
            I: ['Ì', 'Í', 'Î', 'Ï'],
            O: ['Ò', 'Ó', 'Ô', 'Ö'],
            U: ['Ù', 'Ú', 'Û', 'Ü']
        }
    
        return specialChars[character][modifierIndex];
    }

    writeAux(payload) {
        if (this.graphModifier !== null) {
            return;
        }
        this.graphModifier = payload;

        return this.graphModifier;
    }

    async delete() {
        if (this.output !== "") {
            // clean up preoutput from all ASCII 55357 occurrences
            let preOutput;
            if (!this.screenCursorPosition[0] || (this.output.length === this.screenCursorPosition[0] && this.output.length === this.screenCursorPosition[1])) {
                preOutput = this.output.substring(0, this.output.length-1);
            } else {
                preOutput = this.extractContent()[2];
            }
            const trashInspection = await this.lookForTrash(preOutput);
            trashInspection ? this.output = await this.deleteEmojiTrash(trashInspection) : this.output = preOutput;
        }

        if (this.screen) {
            this.screen.value = this.output;
        }

        return this.output;
    }

    async lookForTrash(input) {
        // clean up preoutput from all ASCII 55357 occurrences
        const searchPromise = new Promise((resolve, reject) => {
            if (typeof input === 'string') {
                const arrayFromInput = input.split("");
                const outputArray = arrayFromInput.map((el) => {
                    return el.charCodeAt(0);
                });
                let dirtyCheck;
                outputArray.includes(55357) ? dirtyCheck = true : dirtyCheck = false;
                resolve({ checkableInput: arrayFromInput, checkedOutput: outputArray, dirty: dirtyCheck });
            } else {
                reject("not a string");
            }
        })

        return searchPromise;
    }
    
    async deleteEmojiTrash() {
        // clean up preoutput from all ASCII 55357 occurrences

    }

    enter() {
        this.output += '\n';

        if (this.screen) {
            this.screen.value = this.output;
        }

        return this.output;
    }

    space() {
        const payload = " ";
        if (!this.screenCursorPosition[0]) {
            this.output += payload;
        } else {
            this.output = this.injectContent(payload)[2];
        }

        if (this.screen) {
            this.screen.value = this.output;
        }

        return this.output;
    }

    destroy(enforce = true) {
        if (enforce) {
            const keyboardFrame = document.getElementById(this.target);
            keyboardFrame.remove();
        }
    
        return "terminated";
    }
}