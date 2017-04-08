'use strict';

const formFields = {
  'tb': { name: 'Text Box', icon: 'Tb' },
  'ta': { name: 'Text Area', icon: 'Ta' },
  'da': { name: 'Date', icon: 'Da' },
  'ti': { name: 'Time', icon: 'Ti' },
  'cb': { name: 'Checkbox', icon: 'Cb' },
  'rb': { name: 'Radio Button', icon: 'Rb' },
  'dd': { name: 'Dropdown', icon: 'Dd' },
  'ms': { name: 'Multi Select', icon: 'Ms' },
  'lh': { name: 'Large Heading', icon: 'H1' },
  'mh': { name: 'Medium Heading', icon: 'H2' },
  'sh': { name: 'Small Heading', icon: 'H3' },
  'pa': { name: 'Paragraph', icon: 'Pa' },
  'se': { name: 'Seperator', icon: 'Se' },
  'bl': { name: 'Blank Line', icon: 'Bl' },
  'bu': { name: 'Button', icon: 'Bu' }
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
  buttonHandler(type) {
    console.log('type: ', type);
  }
  listFromObj(objList) {
    let result = [];
    for (let obj in objList) {
      result.push({ name: objList[obj].name, key: obj });
    }
    return result;
  }
  buttonsFromObj(objList) {
    let result = [];
    for (let obj in objList) {
      result.push({ name: objList[obj].name, icon: objList[obj].icon });
    }
    return result;
  }
  formFields() {
    return this.listFromObj(formFields);
  }
  buttonSizes() {
    return this.listFromObj(buttonSizes);
  }
  buttonColors() {
    return this.listFromObj(buttonColors);
  }
  textColors() {
    return this.listFromObj(textColors);
  }
  palette() {
    return this.buttonsFromObj(formFields);
  }
}

care.factory('fieldService', [function () {
  return {
    Field: Field
  };
}]);
