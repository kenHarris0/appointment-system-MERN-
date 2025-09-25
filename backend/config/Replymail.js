const replymail=`
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Admin Reply</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0px 3px 8px rgba(0,0,0,0.1);
    }
    .header {
      background: #007bff;
      color: #ffffff;
      padding: 15px;
      text-align: center;
    }
    .content {
      padding: 20px;
      color: #333333;
      line-height: 1.6;
    }
    .content p {
      margin: 10px 0;
    }
    .footer {
      background: #f9f9f9;
      text-align: center;
      padding: 10px;
      font-size: 12px;
      color: #777;
    }
    .btn {
      display: inline-block;
      padding: 10px 15px;
      margin-top: 15px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
    }
    .btn:hover {
      background: #0056b3;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Admin Reply</h2>
    </div>
    <div class="content">
      <p>Hi <strong>{{name}}</strong>,</p>
      <p>We have reviewed your issue:</p>
      
      <p>Our reply:</p>
      <p><strong>{{adminReply}}</strong></p>
      
    </div>
    <div class="footer">
      <p>This is an automated message from the Admin Team.</p>
    </div>
  </div>
</body>
</html>

`

module.exports=replymail