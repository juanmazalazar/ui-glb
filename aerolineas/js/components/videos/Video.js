/**
 * @param {object} attributes
 */
var Video = function(attributes){
  this.attributes = attributes;
  this.initialize.apply(this, arguments);
}


/**
 * default getter
 */
Video.prototype.get = function(attribute) {
    return this.attributes[attribute];
}

/**
 * default setter
 */
Video.prototype.set = function(attribute, value) {
    this.attributes[attribute] = value;
}

/**
 * This method is an example about calling a metho with apply in a constructor
 * We use apply because we don't know the quantity of parameters
 */
Video.prototype.initialize = function() {
    console.log("initializing model Video with data", arguments);
}