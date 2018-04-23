export default class Calculator {
    constructor({total_sum, first_deposit, term, termUnit, percent, percentUnit}) {
        console.log(total_sum, first_deposit, term, termUnit, percent, percentUnit);
        this.total_sum = total_sum
        this.first_deposit = first_deposit
        this.term =  term
        this.termUnit = termUnit
        this.percent = percent
        this.percentUnit = percentUnit
    }

    calcAnnuity () {
        const total_sum = this.total_sum
        const percent = this.percent * 0.01
        const formulaPercent = percent / 12
        const periodsCount = this.termUnit ==='month'?this.term:12*this.term

        
        console.log(total_sum, percent, periodsCount)

        let remain = total_sum

        let result = {}

        const monthResult = total_sum * (formulaPercent + formulaPercent/(Math.pow(1+ formulaPercent, periodsCount) - 1))

        let percents, mainDebt
        for (let i = 0; i < periodsCount; i++ ) {
            percents = remain * percent / 12
            mainDebt = monthResult - percents
            remain = remain - mainDebt

            result[i] = {
                id : i + 1,
                monthResult: monthResult.toFixed(2),
                mainDebt: mainDebt.toFixed(2),
                percents: percents.toFixed(2),
                remain: remain  < 0.1? 0: remain.toFixed(2)

            }

        }


        return result

    }

    calcDifferential() {

        const total_sum = this.total_sum
        const periodsCount = this.termUnit ==='month'?this.term:12*this.term
        const percent = this.percent * 0.01
        const mainDebt = total_sum/periodsCount

        let remain = total_sum

        let result = {}

        for (let i = 0; i < periodsCount; i++) {
            let monthResult = this.calcDiffMonth(remain, percent)
            remain = remain - mainDebt
            result[i] = {
                id: i + 1,
                debt: remain.toFixed(2),
                monthResult: monthResult.toFixed(2),
                mainDebt: mainDebt.toFixed(2),
                paySum: (mainDebt + monthResult).toFixed(2)
            }

            

        }
        return result
    }

    calcDiffMonth(remain, percent) {
        return remain * percent / 12
    }
}