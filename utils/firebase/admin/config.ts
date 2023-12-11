import { cert } from 'firebase-admin/app';

const privateKey = process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, '\n') || '';

const config = {
  credential: cert({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
    clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL || '',
    privateKey: privateKey,
  }),
};

export default config;
