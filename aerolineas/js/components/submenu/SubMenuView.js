/**
 * 
 * @param {*attributes} attributes 
 */
var SubMenuView = function(attributes) {
    this.attributes = attributes;
    this.$el = document.querySelector(attributes.el)
}

SubMenuView.prototype = {
    get: function(att){
        return this.attributes[att] || null;
    },
    set: function(att, value){
        return this.attributes[att] = value;
    },
    render: function(){
        let access = this.get("access");
        let idioms = this.get("idioms");
        let phone = this.get("phone");
        let contact = this.get("contact");
        let faq = this.get("faq");

        let options = idioms.map( idiom => {
            return `<option value="${idiom.value}" >${idiom.description}</option>`;
        }).reduce( (previousValue, currentValue) => {
            return previousValue + currentValue;
        }, "");

        this.$el.innerHTML = `<nav class="upper-nav">
                        <ul class="display-inline">
                            <li><a href="${access.url}">${access.description}</a></li>
                            <li><a href="${phone.url}">${phone.number}</a></li>
                            <li>
                                <select>
                                    ${options}
                                </select>
                            </li>
                        </ul>
                    </nav>
                    <div class="upper-nav">
                        <a href="${contact.url}">${contact.description}</a> y <a href="${faq.url}">${faq.description}</a>
                    </div>`;
    }
}