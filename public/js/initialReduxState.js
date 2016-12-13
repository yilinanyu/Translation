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
            { id:1, label:"USA", value:"en_US", selected: true },
            { id:2, label:"CANADA ENGLISH", value:"en_CA", selected: true },
            { id:3, label:"CANADA FRENCH", value:"fr_CA", selected: false},
            ]
    }
}