function getPropertyByName(yearMonth){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/getRecord",
        data: { yearMonth:yearMonth.toString()},
        success : function(result){
            if ( result.toString() == "500" ){
                console.log("server error")
            } else {
                return result ;
            }
            ///alert(yearMonth.toString()) ;
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
            if ( result.toString() == "200" ){
                alert(" 添加成功! ") ;
            } else {
                ///alert("添加失败!") ;
            }
        }
    });
}
