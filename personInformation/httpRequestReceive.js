function getPropertyByName(yearMonth){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/getRecord",
        data: { yearMonth:yearMonth.value},
        success : function(result){
            if ( result == "500" ){
                console.log("server error")
            } else {
                return result ;
            }
            alert(yearMonth.value) ;
        }
    });
}
function addRecord(yearMonth, income, foodConsumption,
                   rent , childrenEducationCost , WaterPowerCost , MedicalCost)
{
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/addRecord",
        data: { yearMonth:yearMonth.value,income:income.value,foodConsumption:foodConsumption.value, rent:rent.value,
                childrenEducationCost:childrenEducationCost.value,WaterPowerCost:WaterPowerCost.value,MedicalCost:MedicalCost.value},
        success : function(result){
            if ( result == "200" ){
                alert("添加成功!") ;
            } else {
                alert("添加失败!") ;
            }
        }
    });
}
