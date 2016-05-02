export default class PaymentInvoicePeriod {
    constructor(date) {
        this.date = date;
    }

    createPeriods() {
        const year = this.date.getFullYear();
        const lastYear = year - 1;

        const month = this.date.getMonth(); // 0 based. January = 0, February = 1 etc.
        const lastMonth = month > 0 ? month - 1 : month;

        let getMonthName = PaymentInvoicePeriod.getMonthName;

        let allPeriods = [
            {type: 1, description: `${getMonthName(month)} ${year}`},
            {type: 2, description: `${getMonthName(lastMonth)} ${year}`},
            {type: 3, description: `${getMonthName(0)} t/m ${getMonthName(lastMonth - 1)} ${year}`},
            {type: 4, description: `${lastYear}`}
        ];

        switch (month) {
            case 0: // month January
                return allPeriods.filter(p => p.type === 2 || p.type === 4);
            case 1: // month February
                return allPeriods.filter(p => p.type === 1 || p.type === 2 || p.type === 4);
            default:
                return allPeriods;
        }
    }

    static getMonthName(number) {
        const months = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];

        return 0 <= number && number < 12 // Valid month numbers: between 0 and 11
            ? months[number]
            : months[0]; //default month: January
    }
}