📄✨ Dynamic Resume Builder
A sleek and modern web application that allows users to dynamically generate a professional, polished resume and download it as a high-quality PDF. This project combines a user-friendly form with a live preview, all rendered through a Node.js backend and converted to a downloadable format on the client-side.

🚀 Key Features
📝 Easy-to-Use Form: A clean interface for users to input their personal, professional, and educational details.

🎨 Live Preview: See your resume take shape in real-time with a beautifully styled template.

📱 Fully Responsive Design: The homepage and forms are designed to be perfectly usable on any device, from desktops to mobile phones like the iPhone 14 Pro Max.

📄 Instant PDF Downloads: Generate and download your finished resume as a single-page PDF, perfectly formatted for job applications.

🎨 Modern & Professional Template: The generated resume is designed to be ATS-friendly, clean, and visually appealing to recruiters.

💻 Tech Stack
This project is built with a modern, efficient stack:

Backend:

Frontend:

Templating Engine: EJS (Embedded JavaScript templates)

PDF Generation: html2pdf.js (Client-side generation for speed and reliability)

🛠️ How It Works
Fill in the Details: The user navigates through a simple form, adding their name, contact info, experience, skills, and education.

Generate Resume: Upon submission, the data is sent to the Node.js server.

Render & Preview: The server uses EJS to inject the user's data into a professional HTML template and displays it in the browser.

Download PDF: The user clicks the "Download as PDF" button. The html2pdf.js library then converts the rendered HTML into a perfectly formatted, single-page PDF directly in their browser.

⚙️ Getting Started
To run this project locally, follow these simple steps:

Clone the repository:
git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)

Navigate to the project directory: cd your-repo-name

Install the dependencies: npm install

Start the server: node index.js

Open your browser and go to http://localhost:8080 to start creating your resume!

✨ Acknowledgment
This project was built to provide a simple, yet powerful tool for creating professional resumes without the hassle of traditional word processors. A special thanks to the creators of html2pdf.js for making client-side PDF generation so seamless.

Coded with ❤️.
