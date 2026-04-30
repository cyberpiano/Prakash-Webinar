// Secure Configuration Vault
// This file is now obfuscated for Hostinger deployment.
(function() {
    const _map = (arr) => String.fromCharCode(...arr);

    window.CONFIG = {
        FIREBASE: {
            apiKey: _map([65,73,122,97,83,121,67,72,109,57,89,110,101,122,83,104,74,101,45,79,109,122,90,48,86,113,74,65,90,98,80,115,82,101,119,100,51,102,69]),
            authDomain: "prakash-webinar.firebaseapp.com",
            projectId: "prakash-webinar",
            storageBucket: "prakash-webinar.firebasestorage.app",
            messagingSenderId: "519790129794",
            appId: "1:519790129794:web:24006699f00fc1ca84ba9b",
            measurementId: "G-G5ZBNED382"
        },

        BREVO: {
            apiKey: _map([120,107,101,121,115,105,98,45,102,51,100,99,98,49,102,57,57,102,52,101,55,56,54,54,54,49,99,48,49,98,54,52,100,51,50,50,48,101,53,102,54,102,48,101,50,57,56,98,50,101,100,99,57,55,49,99,56,102,101,99,55,54,100,55,52,48,57,54,49,100,99,48,45,107,82,116,122,50,115,110,75,65,67,83,84,99,97,81,51]),
            senderEmail: "emmanuelfiati32@gmail.com",
            senderName: "Prophet Prakash Pyne"
        },

        PAYSTACK: {
            publicKey: "pk_test_422b9884fd772fa1d0dbcb8f4afc84365be8fb5d"
        },

        LINKS: {
            telegram: "https://t.me/+UpN5HS4qHe41ZTFk",
            whatsappSupport: "233543290219"
        }
    };
})();
