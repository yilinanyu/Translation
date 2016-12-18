var initialReduxState = {
    header: {
        title: "TESLA TRANSLATION",
        imgSrc: "/img/tesla.png"
    },
    counter: {
        count: 0
    },
    environment: {
        title: "Environment",
        radios:[
            { id:1, label:"Stage", value:"stage", selected: true },
            { id:2, label:"Prod", value:"prod", selected: false },
            { id:3, label:"Mirror", value:"mirror", selected: false },
            { id:4, label:"Stage3", value:"stage3", selected: false },
            { id:5, label:"QA", value:"qa", selected: false },
        ]
    },
    locales:{
        title: "Locales",
        checkboxes:[
            { id:1, label:"US", value:"en_US", selected: true },
            { id:2, label:"Canada", value:"en_CA", selected: true },
            { id:3, label:"Canada French", value:"fr_CA", selected: false},
            { id:4, label:"Mexico", value:"es_MX", selected: false},
            { id:5, label:"Belgium", value:"nl_BE", selected: false},
            { id:6, label:"France", value:"fr_FR", selected: false},
            { id:7, label:"Hong Kong", value:"zh_HK", selected: false}
            ]
    },
    marketingpages:{
        title: "Marketingpages",
        checkboxes:[
            { id:1, label:"Home", value:"home", selected: true },
            { id:2, label:"Model S", value:"models", selected: true },
            { id:3, label:"Model X", value:"modelx", selected: false},
            { id:4, label:"Model 3", value:"model3", selected: false},
            { id:5, label:"Energy", value:"energy", selected: false},
            { id:6, label:"Supercharger", value:"supercharger", selected: false},
            { id:7, label:"Career", value:"career", selected: false}
        ]
    }

}