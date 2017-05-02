var logo = {   
    "el" : "#logo",
    "img" : {
        "name": "logo_Aerolineas.gif",
        "folder": "img",
        "alt": "Logo Aerolineas Argentinas"
    },
    "url": "http://www.aerolineas.com.ar/"
};

var subMenu = {
    "el": "#subMenu",
    "access" : {
        "description" : "Ingresá a tu cuenta Aerolíneas Plus",
        "url": "/acces"
    },
    "phone": {
        "number": "0810-222-86527",
        "url" : "/click"
    },
    "idioms" : [
        {
            "description": "Español (Argentina)",
            "value": "es-ar"
        },
        {
            "description": "English (Argentina)",
            "value": "en-ar"
        },
        {
            "description": "Español (Argentina)",
            "value": "es-cl"
        }
    ],
    "contact":{
        "description": "Contacto",
        "url": "/contacto"
    },
    "faq":{
        "description": "Preguntas frecuentes",
        "url": "/faq"
    }    
}

var menu = {
    "type":"horizontal",
    "el": "#menu",    
    "items": [
        {
            "text":"La empresa",
            "href":"http://www.google.com.ar",
            "target": "_self",            
        },
        {
            "text":"Reservas y servicios",
            "href":"http://www.google.com.ar",
            "target": "_self",            
        },
        {
            "text":"Info para tu viaje",
            "href":"http://www.google.com.ar",
            "target": "_self",            
        },
        {
            "text":"Aerolíneas Plus",
            "href":"http://www.google.com.ar",
            "target": "_self",            
        }
        ]
    }


var promos = {    
    "promos":[
        {
        "type": "full",
        "origin": "Buenos Aires",
        "destination": "El Calafate",
        "price": 2428,
        "currency": "ARS",
        "currencySymbol": "$",
        "url": "es-ar/reservasservicios/vuelo/147_buenos-aires-el-calafate",
        "description": "Llegá volando a El Calafate. Más rápido, más cómodo, más cuotas.",
        "img": {
            "name": "calafate.jpg",
            "folder": "img",
            "alt": "Imagen para el Calafate",            
            }
        },
        {
        "type": "full",
        "origin": "Buenos Aires",
        "destination": "Neuquén",
        "price": 1978,
        "currency": "ARS",
        "currencySymbol": "$",
        "url": "es-ar/reservasservicios/vuelo/147_buenos-aires-neuquen",
        "description": "Volá a Neuquén y comprá con la mejor financiación con más de 30 bancos.",
        "img": {
            "name": "neuquen.gif",
            "folder": "img",
            "alt": "Imagen para neuquen",            
            }
        },
    ],   
};

var promosSimple = {    
    "promos":[
        {
            "type": "simple",
            "origin": "Buenos Aires",
            "destination": "Mar del Plata",
            "price": 1242,
            "currency": "ARS",
            "currencySymbol": "$",
            "url": "es-ar/reservasservicios/vuelo/139_buenos-aires-mar-del-plata"
        },
        {
            "type": "simple",
            "origin": "Buenos Aires",
            "destination": "Córdoba",
            "price": 1675,
            "currency": "ARS",
            "currencySymbol": "$",
            "url":"es-ar/reservasservicios/vuelo/138_buenos-aires-cordoba"
        },
        {
            "type": "simple",
            "origin": "Buenos Aires",
            "destination": "Río Cuarto",
            "price": 1564,
            "currency": "ARS",
            "currencySymbol": "$",
            "url":"es-ar/reservasservicios/vuelo/1800_buenos-aires-rio-cuarto"
        },
        {
            "type": "simple",
            "origin": "Buenos Aires",
            "destination": "Tucumán",
            "price": 2300,
            "currency": "ARS",
            "currencySymbol": "$",
            "url":"es-ar/reservasservicios/vuelo/146_tucuman"
        }    
    ]
}
 
var header = {   
    "el" : "#slider",
    "img" : {
        "name": "slide1.jpg",
        "folder": "img",
        "alt": "Viaja con Grupo Sancor Seguros"
    },
    "url": "sancor-seguros"
};

headerView = new HeaderView(logo);
headerView.render();

subMenuView = new SubMenuView(subMenu);
subMenuView.render();

menuBarView = new MenuBarView(menu);
menuBarView.render();

headerView = new HeaderView(header);
headerView.render();


var promoView;

promos.promos.map( promo => {
    promoView = new PromoView({
        el: '#promosDest',
        model: new Promo(promo)
    });
    promoView.render();    
});

promosSimple.promos.map( promo => {
    promoView = new PromoView({
        el: '#promosSimple',
        model: new Promo(promo)
    });
    promoView.render();    
});
