function getRecordByYearMonth(yearMonth){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/getRecord",
        data: { yearMonth:yearMonth.toString()},
        success : function(result){
            if ( result.toString() === "no" ){
                alert("没有查询到此纪录") ;
            } else {
                alert(result.toString()) ;
            }
        }
    });
}

function addRecord(yearMonth, income, foodConsumption,
                   rent , childrenEducationCost , WaterPowerCost , MedicalCost)
{
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/addRecord",
        data: { yearMonth:yearMonth.toString(),income:income.toString(),foodConsumption:foodConsumption.toString(), rent:rent.toString(),
                childrenEducationCost:childrenEducationCost.toString(),WaterPowerCost:WaterPowerCost.toString(),MedicalCost:MedicalCost.toString() },
        success : function(result){
            if ( result === "no" ){
                alert("添加失败!") ;
            } else {
                alert(result.toString()) ;
            }
        }
    });
}

function getAllRecord(){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/getAllRecord",
        data: {},
        success : function(result){
            if ( result.toString() === "no" ){
                alert("账单为空！") ;
            } else {
                alert(result.toString()) ;
            }
        }
    });
}
function deleteRecord(yearMonth){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/deleteRecord",
        data: { yearMonth:yearMonth.toString() },
        success : function(result){
            if ( result.toString() === "no"){
                alert("没有此记录！") ;
            } else {
                alert(result.toString()) ;
            }
        }
    });
}
function correctRecordByYearMonth(yearMonth,propertyName,propertyValue){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/correctRecord",
        data: { yearMonth:yearMonth.toString(),propertyName:propertyName.toString(),propertyValue:propertyValue.toString()},
        success : function(result){
            if ( result.toString() === "no"){
                alert("没有此记录!") ;
            } else {
                alert(result.toString()) ;
            }
        }
    });
}

function sortRecordsByBills(){

}