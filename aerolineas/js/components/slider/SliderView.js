/**
 * 
 * @param {*attributes} attributes 
 */
var SliderView = function(attributes) {
    this.attributes = attributes;
    this.$el = document.querySelector(attributes.el)
}

SliderView.prototype = {
    get: function(att){
        return this.attributes[att] || null;
    },
    set: function(att, value){
        return this.attributes[att] = value;
    },
    render: function(){
        let img = this.get("img");

        this.$el.innerHTML = `<a href="${this.get("url")}"><img src="${img.folder}/${img.name}" alt="${img.alt}" /></a>`;
    }
}