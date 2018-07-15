(function() {
"use strict";
class _S {
    constructor(s, scope) {
        this.nl = Array.from((scope||document).querySelectorAll(s));
    }

    forEach(cbk) {
        this.nl.forEach(l => cbk(l));
        return this;
    }

    on(evt, cbk) {
        this.forEach(l => l.addEventListener(evt, cbk));
        return this;
    }

    addClass(cls) {
        this.forEach(l => l.classList.add(cls));
        return this;
    }

    removeClass(cls) {
        this.forEach(l => l.classList.remove(cls));
        return this;
    }

    toggleClass(cls) {
        this.forEach(l => l.classList.toggle(cls));
        return this;
    }

    appendChild(chld) {
        this.forEach(l => l.appendChild(chld));
        return this;
    }

    removeChild(chld) {
        this.forEach(l => {
            l.removeChild(typeof chld == "string" ? l.querySelector(chld) : chld)
        });
        return this;
    }

    delete() {
        this.forEach(l => l.parentElement.removeChild(l));
        return this;
    }

    unfound() {
        return this.nl.length == 0;
    }

    querySelectorAll(sel) {
        return this.nl[0].querySelectorAll(sel);
    }

    get value() {
        return this.nl[0].value;
    }

    set value(v) {
        this.forEach(l => l.value = v);
    }

    set textContent(v) {
        this.forEach(l => l.textContent = v);
    }

    get elements() {
        return this.nl;
    }

    get id() {
        return this.nl[0].id;
    }
}

window.S = (s, scope) => new _S(s, scope);
})();
