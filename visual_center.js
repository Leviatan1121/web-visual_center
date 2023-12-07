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
    createCol() {
        let col = document.createElement('div');
        col.style.flex = '1';
        col.style.display = 'flex';
        col.style.flexDirection = 'column';
        return col;
    }
    createRow() {
        let row = document.createElement('div');
        row.style.flex = '1';
        row.style.display = 'flex';
        return row;
    }
    createBaseGrid() {
        let col1 = this.createCol();
        col1.style.height = '100%';

        let col1Row1 = this.createRow();
        col1Row1.style.border = '1px solid ' + this.color;

        let col1Row2 = this.createRow();
        col1Row2.style.border = '1px solid ' + this.color;

        col1.appendChild(col1Row1);
        col1.appendChild(col1Row2);

        let col2 = this.createCol();
        col2.style.height = '100%';

        let col2Row1 = this.createRow();
        col2Row1.style.border = '1px solid ' + this.color;

        let col2Row2 = this.createRow();
        col1Row2.style.border = '1px solid ' + this.color;

        col1.appendChild(col1Row1);
        col1.appendChild(col1Row2);

        col2.appendChild(col2Row1);
        col2.appendChild(col2Row2);

        this.ctn.appendChild(col1);
        this.ctn.appendChild(col2);
    }
    createGrid(rows, cols) {
        this.v = this.create(this.vertical);
        this.ctn.appendChild(this.v);
        this.h = this.create(this.horizontal);
        this.ctn.appendChild(this.h);

        this.createBaseGrid();

        this.ctn.style.backgroundImage = 'linear-gradient(#000000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #000000 calc(100% - 0.5px)), linear-gradient(90deg, #000000 0.5px, transparent 0.5px, transparent calc(100% - 0.5px), #000000 calc(100% - 0.5px))';
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