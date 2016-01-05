var http = require("http");
http.createServer((req,res)=>{

    var data = {
        ResponseData:{
            users:[
                {name:"yang",age:12},
                {name:"fei",age:14},
                {name:"tomcat",age:15},
            ]
        }
    }

    //设置运行跨域访问
    res.setHeader('Access-control-Allow-origin','*');
    //设置返回的值是 json格式
    res.setHeader("Content-Type", "application/json;charset=utf-8");

    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");

    res.end(JSON.stringify(data));

}).listen(8888);
