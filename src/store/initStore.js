let initStore = {
    "active_page": "calculator", //calculator/map
    "calculator": {
        "total_sum" : {
            "id": "total_sum",
            "label": "Сумма кредита",
            "value": 1000000,
            "min": 300000,
            "max": 20000000,
            "step": 100000,
            "hasSwitcher": false,
            "divide": true
        },
        "first_contribution": {
            "id": "first_contribution",
            "label": "Первый взнос",
            "value": 300000,
            "min": 300000,
            "max": 10000000,
            "step": 50000,
            "hasSwitcher": false,
            "divide": true
        },
        "term" : {
            "id": "term",
            "label": "Срок кредита",
            "value": 12,
            "termUnit": "month", //month/hear
            "min": 1,
            "max": 24,
            "step": 1,
            "hasSwitcher": true,
            "divide": false
        },
        "percent" : {
            "id": "percent",
            "label": "Процентная ставка",
            "value": 7,
            "termUnit": "year", //month/year
            "min": 1,
            "max": 20,
            "step": 0.1,
            "hasSwitcher": true,
            "divide": false
        },
        "type": "annuity", //annuity/differenital,
        "calc_button": "calc" //calc/reset
    },
    "calc_result_table": null, //null/obj
    "calc_result_banks": null, //null/obj
} 

export default initStore