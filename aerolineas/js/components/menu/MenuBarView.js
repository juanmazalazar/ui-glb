//Contrato de la config - asi debo recibir los parametros
//algunos pueden ser opcionales, se especifica en contrato
/*
var config = {
    "type":"horizontal",
    "el": "",
    "class": ["",""], //optional
    "items": [
        {
            "text":"",
            "href":"",
            "target": "",
            "dropdown": [  //optional
                {
                    "text":"",
                    "href":"",
                    "target": "",
                }
            ]
        }
    ]
}*/

//Contrato de la config - asi debo recibir los parametros
//algunos pueden ser opcionales, se especifica en contrato
/*var configs = {
    "type":"horizontal",
    "el": "",    
    "items": [
        {
            "text":"",
            "href":"",
            "target": "",            
        }
    ]
}
*/
//Class
/**
 * 
 * @param {*configs} configs 
 */
var MenuBarView = function(configs) {
    this.configs = configs;
    this.$el = document.querySelector(configs.el)
}

MenuBarView.prototype = {
    get: function(att){
        return this.configs[att] || null;
    },
    set: function(att, value){
        return this.configs[att] = value;
    },
    render: function(){
        let items = this.get("items").map( item => {
            return `<li><a href="${item.href}" target="${item.target}">${item.text}</a></li>`;
        }).reduce( (previousValue, currentValue) => {
            return previousValue + currentValue;
        }, "");

        this.$el.innerHTML = `<nav class="cols left md-12">
                    <ul class="display-inline">
                        ${items}
                    </ul>
                </nav>`;
    }
}


    