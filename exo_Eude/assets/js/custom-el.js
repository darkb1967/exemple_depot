// custom-elements.js
class AppHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div style='border:2px solid red; padding:5px'>
                This is my header
            </div>
        `
    }
}
window.customElements.define('app-header', AppHeader)