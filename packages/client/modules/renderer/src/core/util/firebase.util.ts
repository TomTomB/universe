import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  enableIndexedDbPersistence,
  connectFirestoreEmulator,
} from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import {
  getAnalytics,
  setAnalyticsCollectionEnabled,
} from 'firebase/analytics';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import { getPerformance } from 'firebase/performance';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
});

if (import.meta.env.DEV) {
  firebaseApp.automaticDataCollectionEnabled = false;
}

// export const appCheck = initializeAppCheck(firebaseApp, {
//   provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_V3_KEY),
// });

export const firestore = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
export const analytics = getAnalytics(firebaseApp);

export const functions = getFunctions(firebaseApp);
functions.region = 'europe-west1';

export const storage = getStorage(firebaseApp);
export const performance = getPerformance(firebaseApp);
export const database = getDatabase(firebaseApp);

if (import.meta.env.DEV) {
  firebaseApp.automaticDataCollectionEnabled = false;

  setAnalyticsCollectionEnabled(analytics, false);

  performance.dataCollectionEnabled = false;
  performance.instrumentationEnabled = false;

  connectFirestoreEmulator(
    firestore,
    import.meta.env.VITE_FIREBASE_EMULATOR_URL,
    8080,
  );
  connectAuthEmulator(
    auth,
    import.meta.env.VITE_FIREBASE_EMULATOR_URL + ':9099',
    { disableWarnings: true },
  );
  connectFunctionsEmulator(
    functions,
    import.meta.env.VITE_FIREBASE_EMULATOR_URL,
    5001,
  );
  connectStorageEmulator(
    storage,
    import.meta.env.VITE_FIREBASE_EMULATOR_URL,
    9199,
  );
  connectDatabaseEmulator(
    database,
    import.meta.env.VITE_FIREBASE_EMULATOR_URL,
    9000,
  );
}

enableIndexedDbPersistence(firestore);
