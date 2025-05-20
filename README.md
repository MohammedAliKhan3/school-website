# 🏫 School Website

This is a full-stack **School Website** project built using **Node.js**, **Express.js**, and **EJS** for server-side rendering. The website includes multiple frontend pages with dedicated CSS, a styled contact form, embedded map, and informative content about the school.

## 🌐 Features

- Homepage with school introduction
- About, Admissions, and Courses pages
- Contact page with:
  - Styled contact form
  - Google Maps iframe
  - Contact information cards
- **AI Chatbot integrated via API**:
  - Helps users get quick answers about the school
  - Appears on all or selected pages
- Responsive design with separate CSS for each page

## ⚙️ Tech Stack

- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express.js
- **Templating Engine**: EJS
- **Styling**: Custom CSS per page

## 💬 Chatbot Integration

The website includes an AI-powered chatbot integrated using an external API . It is embedded via JavaScript and appears as a floating widget.

### Example Features
- Responds to common questions like school timings, admissions, contact info
- Uses async API calls to provide real-time replies
- Can be expanded to include multilingual support or database queries

### How It Works
1. A chatbot UI is loaded on the frontend (e.g., a floating widget or modal).
2. JavaScript sends user input to the chatbot API.
3. API returns a response, which is then displayed in the chat window.
