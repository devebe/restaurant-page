export default class Component {
    constructor(name, tag) {
        this.name = name;
        this.id = name;
        this.tag = tag;
        this.parent = document.getElementById('content');
        this.child = document.createElement(this.tag);
        this.child.id = this.id;
    }

    build() {
        this.parent.appendChild(this.child);
    }

    addText(text) {
        this.child.textContent = text;
    };
}; 