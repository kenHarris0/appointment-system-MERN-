const registerMail=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Prescripto</title>
  <style>
    /* General email reset */
    body, html {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f4f8;
    }

    .container {
      width: 100%;
      padding: 30px 0;
      display: flex;
      justify-content: center;
      background-color: #f0f4f8;
    }

    .card {
      background-color: #ffffff;
      padding: 30px;
      border-radius: 12px;
      width: 100%;
      max-width: 500px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      text-align: center;
    }

    .checkmark {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #4caf50;
      display: inline-block;
      margin-bottom: 20px;
      position: relative;
    }

    .checkmark::after {
      content: '';
      position: absolute;
      left: 18px;
      top: 12px;
      width: 15px;
      height: 30px;
      border: solid #fff;
      border-width: 0 4px 4px 0;
      transform: rotate(45deg);
    }

    h1 {
      color: #333333;
      font-size: 24px;
      margin-bottom: 10px;
    }

    p {
      color: #555555;
      font-size: 16px;
      margin: 5px 0;
    }

    .btn {
      display: inline-block;
      margin-top: 20px;
      padding: 12px 25px;
      background-color: #2193b0;
      color: white !important;
      text-decoration: none;
      border-radius: 6px;
      font-size: 16px;
    }

    .btn:hover {
      background-color: #176d80;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="checkmark"></div>
      <h1>Welcome to Prescripto!</h1>
      <p>Hi <strong>{{username}}</strong>,</p>
      <p>Your account has been created successfully with the email:</p>
      <p><strong>{{email}}</strong></p>
        <p>We're excited to have you on board.</p>
    </div>
  </div>
</body>
</html>
`

module.exports=registerMail