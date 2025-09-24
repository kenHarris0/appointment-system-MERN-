const registerMail = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Preescipto</title>
  <style>
    /* General Reset */
    body, html {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f4f8;
    }

    .container {
      width: 100%;
      padding: 40px 0;
      display: flex;
      justify-content: center;
      background-color: #f0f4f8;
    }

    .card {
      background-color: #ffffff;
      padding: 40px 30px;
      border-radius: 12px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 6px 18px rgba(0,0,0,0.1);
      text-align: center;
    }

    .checkmark {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background-color: #4caf50;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 25px auto;
      position: relative;
    }

    .checkmark::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 40px;
      border: solid #fff;
      border-width: 0 5px 5px 0;
      transform: rotate(45deg);
    }

    h1 {
      color: #222222;
      font-size: 26px;
      margin-bottom: 12px;
    }

    p {
      color: #555555;
      font-size: 16px;
      line-height: 1.5;
      margin: 8px 0;
    }

    .highlight {
      font-weight: bold;
      color: #2193b0;
    }

    .footer {
      margin-top: 25px;
      font-size: 14px;
      color: #888888;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="card">
      <div class="checkmark"></div>
      <h1>Welcome to Preescipto 🎉</h1>
      <p>Hi <span class="highlight">{{username}}</span>,</p>
      <p>Your account has been created successfully with the email:</p>
      <p class="highlight">{{email}}</p>
      <p>We're excited to have you on board 🚀</p>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Prescipto. All rights reserved.
      </div>
    </div>
  </div>
</body>
</html>
`;

module.exports = registerMail;
