import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL || 'https://alex-cerezo.firebaseio.com',
  projectId: process.env.VUE_APP_PROJECT_ID || 'alex-cerezo',
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET || 'alex-cerezo.firebasestorage.app',
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID || '482323943',
  appId: process.env.VUE_APP_APP_ID || '1:482323943:web:400d20c68e4c22b5d06142',
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);

let analytics = null;
try {
  if (typeof window !== 'undefined') {
    analytics = getAnalytics(app);
  }
} catch (error) {
  analytics = null;
}

export { analytics };
