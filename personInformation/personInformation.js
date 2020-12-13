class Person_Month {
    "use strict"
    constructor(yearMonth, income, foodConsumption, rent, childrenEducationCost, WaterPowerCost, MedicalCost) {
        this._yearMonth = yearMonth ;
        this._income = income;
        this._foodConsumption = foodConsumption;
        this._rent = rent;
        this._childrenEducationCost = childrenEducationCost;
        this._WaterPowerCost = WaterPowerCost;
        this._MedicalCost = MedicalCost;
    }


    get yearMonth() {
        return this._yearMonth;
    }

    set yearMonth(value) {
        this._yearMonth = value;
    }

    get income() {
        return this._income;
    }

    set income(value) {
        this._income = value;
    }

    get foodConsumption() {
        return this._foodConsumption;
    }

    set foodConsumption(value) {
        this._foodConsumption = value;
    }

    get rent() {
        return this._rent;
    }

    set rent(value) {
        this._rent = value;
    }

    get childrenEducationCost() {
        return this._childrenEducationCost;
    }

    set childrenEducationCost(value) {
        this._childrenEducationCost = value;
    }

    get WaterPowerCost() {
        return this._WaterPowerCost;
    }

    set WaterPowerCost(value) {
        this._WaterPowerCost = value;
    }

    get MedicalCost() {
        return this._MedicalCost;
    }

    set MedicalCost(value) {
        this._MedicalCost = value;
    }

    getSavings(){
        return this.income()-this.foodConsumption()-this.childrenEducationCost()-this.MedicalCost()-this.rent()-this.WaterPowerCost();
    }
}

