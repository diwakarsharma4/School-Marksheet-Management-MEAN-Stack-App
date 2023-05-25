const express = require('express');
var userService = require('./teacherService');
var createUserControllerFn = async(req, res) => {
    try {
        console.log(req.body);
        var status = await userService.createUserDbService(req.body);
        console.log(status);

        if(status){
            res.send({"status":true, "message":"user created successfully"});
        }else{
            res.send({"status":false, "message":"error creating user"});
        }
    } catch (error) {
        console.log(error);
    }
}

var loginUserControllerFn = async(req, res) =>{
    var result = null;
    try {
        result = await userService.loginUserDbService(req.body);
        if (result.status){
            res.send({"status":true, "message":result.msg});
        }else{
            res.send({"status":false, "message":result.msg});
        }
    } catch (error) {
        console.log(error);
        res.send({"status":false, "message":error.msg});
    }
}

module.exports = {createUserControllerFn, loginUserControllerFn};