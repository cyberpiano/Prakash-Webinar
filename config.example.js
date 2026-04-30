// ============================================================
// CONFIG TEMPLATE — SAFE TO COMMIT
// ============================================================
// SETUP INSTRUCTIONS:
//   1. Copy this file and rename it to:  config.js
//   2. Fill in the real values for each key below.
//   3. NEVER commit config.js — it is in .gitignore.
// ============================================================

window.CONFIG = {
    // Firebase Configuration
    // Get from: https://console.firebase.google.com → Project Settings → Your apps
    FIREBASE: {
        apiKey: "YOUR_FIREBASE_API_KEY",
        authDomain: "prakash-webinar.firebaseapp.com",
        projectId: "prakash-webinar",
        storageBucket: "prakash-webinar.firebasestorage.app",
        messagingSenderId: "519790129794",
        appId: "1:519790129794:web:...",
        measurementId: "G-G5ZBNED382"
    },

    // Brevo (Sendinblue) Transactional Email
    // Get from: https://app.brevo.com → SMTP & API → API Keys
    BREVO: {
        apiKey: "YOUR_BREVO_API_KEY",
        senderEmail: "your-verified-sender@example.com",
        senderName: "Your Name or Brand"
    },

    // Paystack Public Key (safe to expose, but still keep in config)
    // Get from: https://dashboard.paystack.com/#/settings/developer
    PAYSTACK: {
        publicKey: "pk_live_YOUR_PAYSTACK_PUBLIC_KEY"
    },

    // Support & Community Links
    LINKS: {
        telegram: "https://t.me/YOUR_TELEGRAM_GROUP_LINK",
        whatsappSupport: "COUNTRY_CODE_PLUS_NUMBER_NO_PLUS_SIGN"
    }
};
