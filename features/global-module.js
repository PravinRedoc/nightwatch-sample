//Hoops
module.exports = {
    before: function (cb){
        console.log("In before function");
        cb();
    },
    after: function (cb){
        console.log("In after function");
        cb();
    }
};