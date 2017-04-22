/**
 * @param {object} attributes
 */
var VideoView = function(attributes) {
    this.attributes = attributes;
    this.$el = document.querySelector(attributes.el);
}

/**
 * default getter
 */
VideoView.prototype.get = function(attribute) {
    return this.attributes[attribute];
}

/**
 * Shorcut for access to model directly
 * 
 */
VideoView.prototype.getModel = function(attribute) {
    return this.get("model").get(attribute);
}

/**
 * default setter
 */
VideoView.prototype.set = function(attribute, value) {
    this.attributes[attribute] = value;
}

/**
 * This method is an example about calling a metho with apply in a constructor
 * In this case, we can use it as a event binding.
 */
Video.prototype.initialize = function() {
    console.log("initializing View Video with data", arguments);
}

/**
 * Render method,
 * given a template, renders a Component content
 * This can be as complex as you want
 */
VideoView.prototype.render = function() {
    var container = document.createElement('div');
    container.innerHTML = this.template();
    this.$el.append(container.firstChild);
}

/**
 * Builds a tamplate layout, attaching model to its container 
 */
VideoView.prototype.template = function() {
    // return '<div><div>' + this.get("model").get("capture") + ' </div><div>' +
    //     this.get("model").get("title") + ' </div><div>' +
    //     this.get("model").get("duration") + ' </div></div>';

    //using template literals
    return `<div class="video-item left md-2">
                <div class="video-container">
                    <div class="video-img"> 
                        <img class="img" src="${this.getModel("capture")}">
                        <span class="video-time" aria-hidden="true">${this.getModel("duration")}</span>
                    </div>
                    <div class"video-resume">
                        <h3 class="video-title"> <a href="${this.getModel("link")}">${this.getModel("title")}</a></h3>
                        <span class="video-channel"><a href="${this.getModel("user").profile}">${this.getModel("user").name}</a></span>
                        <ul class="video-details">
                            <li>${this.getModel("visualizations")} views </li>
                            <li>${this.getModel("uploaded")}</li>
                        </ul>
                    </div>
                </div>
            </div>
            `
}