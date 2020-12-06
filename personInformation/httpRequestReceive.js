function getPropertyByName(yearMonth){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/getRecord",
        data: { yearMonth:yearMonth.val()},
        success : function(result){
            if ( result == "500" ){
                console.log("server error")
            } else {
                return result ;
            }
            alert(yearMonth.val()) ;
        }
    });
}
function addRecord(yearMonth, income, foodConsumption,
                   rent , childrenEducationCost , WaterPowerCost , MedicalCost)
{
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/addRecord",
        data: { yearMonth:yearMonth.val(),income:income.val(),foodConsumption:foodConsumption.val(), rent:rent.val(),
                childrenEducationCost:childrenEducationCost.val(),WaterPowerCost:WaterPowerCost.val(),MedicalCost:MedicalCost.val() },
        success : function(result){
            if ( result == "200" ){
                alert("添加成功!") ;
            } else {
                alert("添加失败!") ;
            }
        }
    });
}
