class ScreenCenter {
    ctn = document.createElement('div');
    vertical = true;
    horizontal = false;
    color = '#000';
    zIndex = 99999;
    constructor() {
        this.ctn.style.position = 'fixed';
        this.ctn.style.inset = 0;
        this.ctn.style.display = 'flex';
        this.ctn.style.alignItems = 'center';
        this.ctn.style.justifyContent = 'center';
        this.ctn.style.pointerEvents = 'none';
        this.ctn.style.zIndex = this.zIndex;
    }
    create(vertical) {
        let elem = document.createElement('div');
        elem.style.position = 'absolute';
        elem.style.backgroundColor = this.color;
        if (vertical) {
            elem.style.width = '1px';
            elem.style.height = '100%';
            return elem;
        }
        elem.style.height = '1px';
        elem.style.width = '100%';
        return elem;
    }
    createGrid(cols, rows) {
        this.v = this.create(this.vertical);
        this.ctn.appendChild(this.v);
        this.h = this.create(this.horizontal);
        this.ctn.appendChild(this.h);

        this.ctn.style.backgroundImage = `
        linear-gradient(#000000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #000000 calc(100% - 0.5px)),
        linear-gradient(90deg, #000000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px),
        #000000 calc(100% - 0.5px))`;
        this.ctn.style.backgroundSize = '25% 25%';
        this.ctn.style.border = '0.5px solid ' + this.color;

        document.body.appendChild(this.ctn);
    }
    displayVertical() {
        this.v = this.create(this.vertical);
        this.ctn.appendChild(this.v);
        document.body.appendChild(this.ctn);
    }
    displayHorizontal() {
        this.h = this.create(this.horizontal);
        this.ctn.appendChild(this.h);
        document.body.appendChild(this.ctn);
    }
    displayGrid() {
        this.createGrid();
    }
    display() {
        this.v = this.create(this.vertical);
        this.ctn.appendChild(this.v);
        this.h = this.create(this.horizontal);
        this.ctn.appendChild(this.h);
        document.body.appendChild(this.ctn);
    }
}
// const center = new ScreenCenter();
// center.display();