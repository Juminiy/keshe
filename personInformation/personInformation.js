class Person_Month {
    // "use strict"
    constructor(year, month, income, foodConsumption, rent, childrenEducationCost, WaterPowerCost, MedicalCost) {
        this._year = year;
        this._month = month;
        this._income = income;
        this._foodConsumption = foodConsumption;
        this._rent = rent;
        this._childrenEducationCost = childrenEducationCost;
        this._WaterPowerCost = WaterPowerCost;
        this._MedicalCost = MedicalCost;
    }

    get year() {
        return this._year;
    }

    get month() {
        return this._month;
    }

    get foodConsumption() {
        return this._foodConsumption;
    }

    get rent() {
        return this._rent;
    }

    get childrenEducationCost() {
        return this._childrenEducationCost;
    }

    get WaterPowerCost() {
        return this._WaterPowerCost;
    }

    get MedicalCost() {
        return this._MedicalCost;
    }


    set year(value) {
        this._year = value;
    }

    set month(value) {
        this._month = value;
    }

    set foodConsumption(value) {
        this._foodConsumption = value;
    }

    set rent(value) {
        this._rent = value;
    }

    set childrenEducationCost(value) {
        this._childrenEducationCost = value;
    }

    set WaterPowerCost(value) {
        this._WaterPowerCost = value;
    }

    set MedicalCost(value) {
        this._MedicalCost = value;
    }

    set income(value) {
        this._income = value;
    }

    get income() {
        return this._income;
    }

    getYearMonth(){
        return this.year()+this.month();
    }
    getSavings(){
        return this.income()-this.foodConsumption()-this.childrenEducationCost()-this.MedicalCost()-this.rent()-this.WaterPowerCost();
    }
}

