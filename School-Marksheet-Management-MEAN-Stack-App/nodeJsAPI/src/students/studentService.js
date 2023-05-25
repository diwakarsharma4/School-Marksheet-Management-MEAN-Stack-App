var userModel = require('./studentModel');

module.exports.createUserDbService = (userDetails) =>{
    return new Promise(function fun(resolve, reject){
        var userModelData = new userModel();

        userModelData.username = userDetails.username;
        userModelData.password = userDetails.password;

        // var encryptedPassword = encryptor.encrypt(userDetails.password);
        // userModelData.password = encryptedPassword;

        userModelData.save()
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

module.exports.loginUserDbService = (userData)=>{
    return new Promise(function fun(resolve, reject){
        userModel.findOne({username: userData.username}).
        then(function(result){
            if(result != undefined && result != null){
                if(result.password == userData.password){
                    resolve({status:true, msg:"validated"});
                }else{
                    reject({status:false, msg:"notvalidated"});
                }
            }else{
                reject({status:false, msg:"invalid input"});
            }
        }).
        catch(function(error){
            reject({status:false, msg: "invalid input"});
        })
    });
}



// module.exports.loginUserDbService = (userData)=>{
//     return new Promise(function fun(resolve, reject){
//         userModel.findOne({username: userData.username}, function getresult(error, result){
//             if(error){
//                 reject({status:false, msg: "invalid input"});
//             }else{
//                 if(result != undefined && result != null){
//                     if(result.password == userData.password){
//                         resolve({status:true, msg:"validated"});
//                     }else{
//                         reject({status:false, msg:"notvalidated"});
//                     }
//                 }else{
//                     reject({status:false, msg:"invalid input"});
//                 }
//             }
//         });
//     });
// }