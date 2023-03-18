### :blue_heart::yellow_heart:GoIT: HTML-SCSS, JavaScript, ReactJS, Node.js

---

#### :link:**_Final project "Petly project":moneybag: - backend_**

---

Pet-project - back-end part of the application "Petly project". This application is for .

---

#### Technologies used:

- Node.js
- Express
- MongoDB Atlas
- Mongoose
- bcryptjs

---

#### Commands:

- "npm run start:dev" - start the server in development mode
- "npm run lint" - running a code check with eslint
- "npm run lint:fix" - running a code check with eslint with automatic fixes for simple errors

---

#### Api:

- **/api-docs** - swagger-ui

---

- **/api/finances/summary?type=income&month=2&year=2023** - totalAmount income for the specified month
- **/api/finances/summary?type=expenses&month=2&year=2023** - totalAmount expenses for the specified month
- **/api/finances/summary?type=income&countmonth=6** - for Summary totalAmount income in the last 6 months
- **/api/finances/summary?type=expenses&countmonth=6** - for Summary totalAmount expenses in the last 6 months

---

- **/api/finances/reports?month=2&year=2023** - an array of objects of all transactions for the specified month
- **/api/finances/reports?month=2&year=2023&total=2** - for the specified month "totalAmount expenses" and "totalAmount income"
- **/api/finances/reports?month=2&year=2023&type=expenses** - for the specified month expenses totalAmount by category
- **/api/finances/reports?month=2&year=2023&type=income** - for the specified month income totalAmount by category
- **/api/finances/reports?month=2&year=2023&type=expenses&category=housing** - for the specified month expenses transactions by category
- **/api/finances/reports?month=2&year=2023&type=income&category=salary** - for the specified month income transactions by category

---
