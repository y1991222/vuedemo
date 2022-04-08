const Mock = require('mockjs');

Mock.mock('/api/stuList',function(){
    return [
        {
            name:'ysx',
            age:32
        },
        {
            name:'ly',
            age:30
        }
    ]
});