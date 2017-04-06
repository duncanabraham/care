'use strict';

const formFields = {
  'tb': { name: 'Text Box', icon: '' },
  'ta': { name: 'Text Area', icon: '' },
  'da': { name: 'Date', icon: '' },
  'ti': { name: 'Time', icon: '' },
  'cb': { name: 'Checkbox', icon: '' },
  'ra': { name: 'Radio Button', icon: '' },
  'dd': { name: 'Dropdown', icon: '' },
  'ms': { name: 'Multi Select', icon: '' },
  'lh': { name: 'Large Heading', icon: '' },
  'mh': { name: 'Medium Heading', icon: '' },
  'sh': { name: 'Small Heading', icon: '' },
  'pa': { name: 'Paragraph', icon: '' },
  'se': { name: 'Seperator', icon: '' },
  'bl': { name: 'Blank Line', icon: '' },
  'bu': { name: 'Button', icon: '' }
};

const blockLayout = {
  'c100': { name: '1 Column', icon: '' },
  'c5050': { name: '2 Column - 50:50', icon: '' },
  'c3366': { name: '2 Column - 33:66', icon: '' },
  'c6633': { name: '2 Column - 66:33', icon: '' },
  'c300': { name: '3 Column - 33:33:33', icon: '' },
};

const buttonSizes = {
  'btn-sm': { name: 'Small' },
  'btn-md': { name: 'Medium' },
  'btn-lg': { name: 'Large' },
};

const buttonColors = {
  'btn-default': { name: 'Default' },
  'btn-success': { name: 'Green' },
  'btn-primary': { name: 'Blue' },
  'btn-warning': { name: 'Yellow' },
  'btn-info': { name: 'Light Blue' },
  'btn-danger': { name: 'Red' }
};

const textColors = {
  'default': { name: 'Default' },
  'bg-success': { name: 'Green' },
  'bg-primary': { name: 'Blue' },
  'bg-warning': { name: 'Yellow' },
  'bg-info': { name: 'Light Blue' },
  'bg-danger': { name: 'Red' },
};

class Field {
  constructor(type, options) {
    options = _.assign({
      color: 'default',
      size: 'default',
      value: '',
      label: 'Label',
      order: 0,
      id: 0
    }, options);
    this.type = type;
    this.color = options.color;
    this.size = options.size;
    this.value = options.value;
    this.label = options.label;
    this.order = options.order;
    this.id = options.id;
  }
  save() {
    let result = {
      type: this.type,
      color: this.color,
      size: this.size,
      value: this.value,
      label: this.label,
      order: this.order,
      id: this.id
    };
    if (!this.id) {
      delete result.id;
    }
    return result;
  }
}

class Block {
  constructor(type, options) {
    options = _.assign({
      color: 'default',
      order: 0,
      id: 0
    }, options);
    this.type = type;
    this.color = options.color;
    this.id = options.id;
  }
  save() {
    let result = {
      type: this.type,
      color: this.color,
      order: this.order,
      id: this.id
    };
    if (!this.id) {
      delete result.id;
    }
    return result;
  }
}

const listFromObj = (objList) => {
  let result = [];
  for (let obj in objList) {
    result.push({ name: objList[obj].name, key: obj });
  }
  return result;
};

care.factory('fieldService', [function () {
  return {
    formFields: listFromObj(formFields),
    blockLayout: listFromObj(blockLayout),
    buttonSizes: listFromObj(buttonSizes),
    buttonColors: listFromObj(buttonColors),
    textColors: listFromObj(textColors),
    newField: (type, options) => { return new Field(type, options); },
    newBlock: (type, options) => { return new Block(type, options); }
  };
}]);
