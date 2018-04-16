"use strict"

const path = require('path');
const ROOT = path.resolve(__dirname,'..');

function root(_path) {
    return path.join.apply(path,[ROOT,_path]);
}

module.exports = {
    root : root
}