# 📧 EmailJS Setup Guide

## Fix Email Sending Error

The contact form requires **EmailJS credentials** to send emails. Follow these steps:

---

## 🔑 Step 1: Get Your Public Key

1. Go to https://www.emailjs.com/
2. **Sign up** (free account)
3. Verify your email
4. Click **Account** in the sidebar
5. Copy your **Public Key** (looks like: `xxxxxxxxxxxxxx`)

---

## 🔧 Step 2: Create Email Service

1. Click **Email Services** in sidebar
2. Click **Create New Service**
3. Choose **Gmail** (or your email provider)
4. Follow authentication steps
5. **Copy the Service ID** (looks like: `service_xxxxx`)
6. Click **Create Service**

---

## 📝 Step 3: Create Email Template

1. Click **Email Templates** in sidebar
2. Click **Create New Template**
3. Copy this template structure:

```
Subject: New Message from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. **Copy the Template ID** (looks like: `template_xxxxx`)
5. Click **Save**

---

## ✏️ Step 4: Update script.js

In `script.js`, find lines **7-9** and replace:

```javascript
// BEFORE (Lines 7-9)
const EMAIL_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAIL_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAIL_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';
```

With:

```javascript
// AFTER - Replace with your credentials
const EMAIL_SERVICE_ID = 'service_abc123def456';    // Your Service ID
const EMAIL_TEMPLATE_ID = 'template_xyz789uvw012';  // Your Template ID
const EMAIL_PUBLIC_KEY = 'your_public_key_here';    // Your Public Key
```

---

## ✅ Step 5: Test It

1. Save `script.js`
2. Reload your portfolio
3. Fill out the contact form
4. Click "Send Message"
5. You should receive an email!

---

## 🐛 Troubleshooting

### Error: "EmailJS is not configured"
- Make sure you replaced all three credentials
- Check for typos in the IDs
- Copy-paste directly from EmailJS (avoid manual typing)

### Error: "Service not found"
- Make sure Service ID is correct
- Check it starts with `service_`

### Error: "Template not found"
- Make sure Template ID is correct
- Check it starts with `template_`

### Error: "Invalid Public Key"
- Make sure Public Key is correct
- Get it from Account → API Keys

### Still not working?
1. Open DevTools (F12)
2. Go to Console tab
3. Send a test message
4. Check console for detailed error
5. Share the error message for help

---

## 🔒 Security Notes

- Keep credentials in `script.js` for simple portfolios
- For production apps with sensitive data, use environment variables
- The Public Key is safe to expose (it's meant to be public)

---

## 📧 Default Email Template Format

Your template will look like:

```
Email received from Portfolio Contact Form

From: {{from_name}} ({{from_email}})

Message:
{{message}}
```

You can customize this in EmailJS dashboard!

---

## ✨ Once Configured

Your contact form will:
- ✅ Send emails to your inbox
- ✅ Show success message
- ✅ Display errors if something fails
- ✅ Have smooth animations
- ✅ Reset after sending

**Happy emailing!** 📬
