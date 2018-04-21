let initStore = {
    "active_page": "calculator", //calculator/map
    "calculator": {
        "total_sum" : {
            "id": "total_sum",
            "label": "Сумма кредита",
            "value": 1000000,
            "min": 300000,
            "max": 20000000,
            "step": 100000
        },
        "first_contribution": {
            "id": "first_contribution",
            "label": "Первый взнос",
            "value": 300000,
            "min": 300000,
            "max": 10000000,
            "step": 50000
        },
        "term" : {
            "id": "term",
            "label": "Срок кредита",
            "value": 12,
            "term_unit": "day", //day/month
            "min": 1,
            "max": 120,
            "step": 1
        },
        "type": "annuity", //annuity/differenital,
        "calc_button": "calc" //calc/reset
    },
    "calc_result_table": null, //null/obj
    "calc_result_banks": null, //null/obj
} 

export default initStore