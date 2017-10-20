var nodemailer = require('nodemailer');





function send(uname,uid,email){



var transporter = nodemailer.createTransport({  
  host: 'smtp.qq.com',  
  auth: {  
    user: '1463952111@qq.com', //配置邮箱账号 
    pass: 'wntmnjldyhagjgab' //授权码,通过QQ获取  
  }  
  });  
// 定义传输内容
  var mailOptions = {  
    from: 'itme_cnode<1463952111@qq.com>', // 发送者  
    to: ''+email, // 接受者,可以同时发送多个,以逗号隔开  
    subject: 'cnode_test邮箱验证', // 标题  
    //text: 'Hello world', // 文本  
    html: "欢迎"+uname+"注册CNode<a href=http://192.168.30.100/users/actived/"+uid+">跳转</a>" 
  };  
  
  transporter.sendMail(mailOptions, function (err, info) {  
      
    if (err) {  
      console.log(err);  
      return;  
    } 
    console.log(info); 
    console.log('发送成功');  
  }); 





} 
 


   module.exports=send;