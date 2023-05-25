const express = require('express');
var marksheetService = require('./marksheetService');


var createMarksheetControllerFn = async(req, res) => {
    try {
        console.log(req.body);
        var status = await marksheetService.createmarksheetDbService(req.body);
        console.log(status);

        if(status){
            res.send({"status":true, "message":"marksheet created successfully"});
        }else{
            res.send({"status":false, "message":"error creating marksheet"});
        }
    } catch (error) {
        console.log(error);
    }
}

var getAllMarksheetControllerFn = async(req, res)=>{
    var allMarksheets = await marksheetService.getAllMarksheetDbService();
    res.send({"status":true, "message":allMarksheets});
}

var getOneMarksheetControllerFn = async(req, res) =>{
        var result = await marksheetService.getOneMarksheetDbService(req.params.id);
        if (result.status){
            res.send(result);
        }else{
            res.send({"status":false, "message":result.msg});
        }
}

var updateMarksheetControllerFn = async(req, res) =>{
    try {
        console.log(req.body);
        var status = await marksheetService.updateMarksheetDbService(req.params.id, req.body);
        console.log(status);

        if(status){
            res.send({"status":true, "message":"marksheet updated successfully"});
        }else{
            res.send({"status":false, "message":"error updating marksheet"});
        }
    } catch (error) {
        console.log(error);
    }
}

var deleteMarksheetControllerFn = async(req, res) =>{
        var result = await marksheetService.deleteMarksheetDbService(req.params.id);
        console.log(result);
        if (result.status){
            res.send({"status":true, "message":result});
        }else{
            res.send({"status":false, "message":result});
        }
}

module.exports = {createMarksheetControllerFn, getOneMarksheetControllerFn, getAllMarksheetControllerFn, deleteMarksheetControllerFn, updateMarksheetControllerFn};