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
