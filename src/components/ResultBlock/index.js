import React from 'react'
import './style.sass'

const ResultBlock = (props) => {
    
    return (
      <div className="resultBlock">
        <div className="resultBlock__row">
            <div className="resultBlock__cell">
                Сумма ежемесячного платежа
            </div>
            <div className="resultBlock__cell">
                100...85 руб
            </div>
        </div>
        <div className="resultBlock__row">
            <div className="resultBlock__cell">
                Переплата по процентам за ипотеку
            </div>
            <div className="resultBlock__cell">
                108 руб
            </div>
        </div>
        <div className="resultBlock__row">
            <div className="resultBlock__cell">
                Итоговая переплата с учетом комиссий:
            </div>
            <div className="resultBlock__cell">
                108 руб.
            </div>
        </div>
        <div className="resultBlock__row">
            <div className="resultBlock__cell">
                Эффективная процентная ставка:
            </div>
            <div className="resultBlock__cell">
                21.9%
            </div>
        </div>
      </div>
    );
}

export default ResultBlock