/*
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
        this.map = null;
        this.armedBtns = 0;

        this.availableLangCodes = ["es-ES", "en-GB", "it-IT", "fr-FR", "de-DE", "ru-RU"];
        this.availableLanguages = ["spanish", "english", "italian", "french", "german", "russian"];

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
                break;
            case "en-GB":
            case "british":
                this.map = britishMap;
                break;
            case "it-IT":
            case "italian":
                this.map = italianMap;
                break;
            case "fr-FR":
            case "french":
                this.map = frenchMap;
                break;
            case "de-DE":
            case "german":
                this.map = germanMap;
                break;
            case "ru-RU":
            case "russian":
                this.map = russianMap;
                break;
        }
    }

    init() {
        const initElement = document.getElementById(this.target);
        if (!initElement) throw new Error('Keyboard instantiated on an inexistent DOM Node');

        const childrenElements = [
            document.createElement('textarea'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div'),
            document.createElement('div')
        ];
        
        childrenElements.forEach((el, index) => {
            index === 0 ? el.classList.add('screen') : el.classList.add('keyboard');
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
            }

            const langCode = this.map.language.match(/[A-Z]{2}$/)
            el.classList.add(`keyboard--${langCode[0]}`);

            initElement.appendChild(el);
        });

        return this.mount();
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
            }

            let rowPosition = 0;
            this.map[keyboardType].forEach((array) => {
                let columnPosition = 0;
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
                        newBtn.classList.add('keyboard__button--standard');
                    } else if (/^\*/.test(el)) {
                        const trimmedEl = Number(el.replace("*", ""));
                        newBtn.innerHTML = String.fromCharCode(trimmedEl);
                        newBtn.classList.add('keyboard__button--standard');
                    } else {
                        newBtn.innerHTML = el;
                        if (/^\w{2,}$/.test(el)) {
                            newBtn.classList.add('keyboard__button--operation');
                        } else {
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
                        btn.addEventListener('click', function() {
                            this.writeAux(btn.innerHTML);
                        });
                        action = 'writeAux';
                    } else {
                        btn.addEventListener('click', function() {
                            this.write(btn.innerHTML);
                        });
                        action = 'write';
                    }
                    break;
                case btnClasses.includes('operation'):
                    if (btn.dataset.content === "Caps") {
                        btn.addEventListener('click', function() {
                            this.capitalize();
                        });
                        action = 'capitalize';
                    } else if (btn.dataset.content === "Shift") {
                        btn.addEventListener('click', function() {
                            this.shift();
                        });
                        action = 'shift';
                    } else if (btn.dataset.content === "Alt") {
                        btn.addEventListener('click', function() {
                            this.alternate();
                        });
                        action = 'alternate';
                    } else if (btn.dataset.content === "Tab") {
                        btn.addEventListener('click', function() {
                            this.tabulate();
                        });
                        action = 'tabulate';
                    } else if (btn.dataset.content === "Backspace") {
                        btn.addEventListener('click', function() {
                            this.delete();
                        });
                        action = 'delete';
                    } else if (btn.dataset.content === "Enter") {
                        btn.addEventListener('click', function() {
                            this.enter();
                        });
                        action = 'enter';
                    }
                    else if (btn.dataset.content === "Space") {
                        btn.addEventListener('click', function() {
                            this.space();
                        });
                        action = 'space';
                    } else if (btn.dataset.content === "Control") {
                        btn.addEventListener('click', function() {
                            this.control();
                        });
                        action = 'control';
                    }
                    break;
            }
    
        }

        return {button: btn, payload: btn.innerHTML, action: action, armed: true};
    } 

    tabulate() {
        
    }

    capitalize() {
        
    }

    shift() {

    }

    control() {

    }

    alternate() {
        
    }

    write() {

    }

    writeAux() {

    }

    delete() {

    }

    enter() {

    }

    space() {

    }
}