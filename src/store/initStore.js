let START_DATA = {
    "active_page": "calculator", //calculator/map
    "calculator": {
        "total_sum" : {
            "label": "Сумма кредита",
            "value": 1000000,
            "min": 300000,
            "max": 20000000
        },
        "first_contribution": {
            "label": "Первый взнос",
            "value": 200000,
            "min": 300000,
            "max": 20000000
        },
        "term" : {
            "label": "Срок кредита",
            "value": 12,
            "term_unit": "day", //day/month
            "min": 1,
            "max": 120
        },
        "type": "annuity", //annuity/differenital,
        "calc_button": "calc" //calc/reset
    },
    "calc_result_table": null, //null/obj
    "calc_result_banks": null, //null/obj
}

export default START_DATA