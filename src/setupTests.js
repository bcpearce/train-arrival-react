//shim for Object.values
Object.values = Object.values || (obj => Object.keys(obj).map(key => obj[key]));