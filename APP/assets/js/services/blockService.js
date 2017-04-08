'use strict';

const blockLayout = {
  'c100': { name: '1 Column', icon: '' },
  'c5050': { name: '2 Column - 50:50', icon: '' },
  'c3366': { name: '2 Column - 33:66', icon: '' },
  'c6633': { name: '2 Column - 66:33', icon: '' },
  'c300': { name: '3 Column - 33:33:33', icon: '' },
};

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

class BlockService {
  constructor(type, options) {
    this.block = new Block(type, options);
  }
  blockLayout() {
    return listFromObj(blockLayout);
  };
}

care.factory('blockService', [function () {
  return BlockService;
}]);
