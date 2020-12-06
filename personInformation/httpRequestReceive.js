function getPropertyByName(yearMonth){
    $.ajax({
        type: "post",
        url: "https://authorize.hulingnan.site:8124/keshe/getRecord",
        data: { yearMonth:yearMonth},
        success : function(result){
            if ( result == "500" ){
                console.log("server error")
            } else {
                return result ;
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
        data: { yearMonth:yearMonth,income:income,foodConsumption:foodConsumption, rent:rent,
                childrenEducationCost:childrenEducationCost,WaterPowerCost:WaterPowerCost,MedicalCost:MedicalCost},
        success : function(result){
            if ( result == "200" ){
                alert("添加成功!") ;
            } else {
                alert("添加失败!") ;
            }
        }
    });
}
