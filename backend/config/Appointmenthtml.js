const aptmail=`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Appointment Confirmation</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f6f6;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    .header {
      background-color: #4CAF50;
      color: white;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .body {
      padding: 20px;
      color: #333;
    }
    .body h2 {
      color: #4CAF50;
    }
    .details {
      margin: 20px 0;
      padding: 10px;
      background-color: #f1f1f1;
      border-radius: 6px;
    }
    .details p {
      margin: 8px 0;
    }
    .footer {
      background-color: #f1f1f1;
      padding: 15px;
      text-align: center;
      font-size: 12px;
      color: #777;
    }
    .button {
      display: inline-block;
      padding: 12px 20px;
      margin: 15px 0;
      background-color: #4CAF50;
      color: white;
      text-decoration: none;
      border-radius: 6px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Appointment Confirmation</h1>
    </div>
    <div class="body">
      
      <p>Your appointment has been successfully booked!</p>

      <div class="details">
       
        <p><strong>Date:</strong> {{appointmentDate}}</p>
        <p><strong>Time:</strong> {{appointmentTime}}</p>
        <p><strong>Payment Status:</strong> {{paymentStatus}}</p>
      </div>

      <p>Please arrive 10 minutes before your scheduled time.</p>

     
    </div>
    <div class="footer">
      &copy; 2025 Prescripto. All rights reserved.
    </div>
  </div>
</body>
</html>

`

module.exports=aptmail