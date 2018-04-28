import React from 'react'
import './style.sass'

const ResultTable = (props) => {

    const {calcTable} = props


    return (

      <div className="resultTable">
        <div className="resultTable__head">
            <div className="resultTable__row">
                <div className = "resultTable__cell">№ платежа</div>
                <div className = "resultTable__cell">Сумма платежа</div>
                <div className = "resultTable__cell">Основной долг</div>
                <div className = "resultTable__cell">Начисленные проценты</div>
                <div className = "resultTable__cell">Остаток задолженности</div>
            </div>
        </div>

        <div className="resultTable__body">
            {
                calcTable.map((object, i) => {
                    return (
                        <div className="resultTable__row">
                            <div className = "resultTable__cell">{object.id}</div>
                            <div className = "resultTable__cell">{object.paySum}</div>
                            <div className = "resultTable__cell">{object.mainDebt}</div>
                            <div className = "resultTable__cell">{object.accruedInterests}</div>
                            <div className = "resultTable__cell">{object.remain}</div>
                        </div>)
                })
            }
        </div>

        <div className="resultTable__footer">
            <div className="resultTable__row">
                <div className = "resultTable__cell">№ платежа</div>
                <div className = "resultTable__cell">Сумма платежа</div>
                <div className = "resultTable__cell">Основной долг</div>
                <div className = "resultTable__cell">Начисленные проценты</div>
                <div className = "resultTable__cell">Остаток задолженности</div>
            </div>
        </div>


      </div>
    );

}

export default ResultTable