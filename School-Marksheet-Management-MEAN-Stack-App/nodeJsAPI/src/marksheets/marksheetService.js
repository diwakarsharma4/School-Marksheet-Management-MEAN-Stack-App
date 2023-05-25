var marksheetModel = require('./marksheetModel');

module.exports.createmarksheetDbService = (marksheetDetails) =>{
    return new Promise(function fun(resolve, reject){
        var marksheetModelData = new marksheetModel();

        marksheetModelData.Roll_No = marksheetDetails.Roll_No;
        marksheetModelData.Name = marksheetDetails.Name;
        marksheetModelData.Date_of_Birth = marksheetDetails.Date_of_Birth;
        marksheetModelData.Score = marksheetDetails.Score;

        marksheetModelData.save()
        .then(function(result){
            console.log(result);
            resolve(true);
        })
        .catch(function(error){
            console.log(error);
            reject(false);
        });

    });
}


module.exports.getAllMarksheetDbService = ()=>{
    return new Promise(function fun(resolve, reject){
        marksheetModel.find({}).
        then(function(result){
            resolve(result);
        }).
        catch(function(error){
            reject(false);
        })
    });
}




module.exports.deleteMarksheetDbService = (id) =>{
    return new Promise(function fun(resolve, reject){
        marksheetModel.findByIdAndDelete(id).
        then(function(result){
            resolve({status:true, msg:result});
        }).
        catch(function(error){
            reject(false);
        })
    });
}

