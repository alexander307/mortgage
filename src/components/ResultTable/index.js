import React from 'react'
import './style.sass'

const ResultTable = (props) => {
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
            <div className="resultTable__row">
                <div className = "resultTable__cell">1</div>
                <div className = "resultTable__cell">100,00</div>
                <div className = "resultTable__cell">83,33</div>
                <div className = "resultTable__cell">16,67</div>
                <div className = "resultTable__cell">916,67</div>
            </div>
            <div className="resultTable__row">
                <div className = "resultTable__cell">1</div>
                <div className = "resultTable__cell">100,00</div>
                <div className = "resultTable__cell">83,33</div>
                <div className = "resultTable__cell">16,67</div>
                <div className = "resultTable__cell">916,67</div>
            </div> 
            <div className="resultTable__row">
                <div className = "resultTable__cell">1</div>
                <div className = "resultTable__cell">100,00</div>
                <div className = "resultTable__cell">83,33</div>
                <div className = "resultTable__cell">16,67</div>
                <div className = "resultTable__cell">916,67</div>
            </div>
            <div className="resultTable__row">
                <div className = "resultTable__cell">1</div>
                <div className = "resultTable__cell">100,00</div>
                <div className = "resultTable__cell">83,33</div>
                <div className = "resultTable__cell">16,67</div>
                <div className = "resultTable__cell">916,67</div>
            </div>        
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