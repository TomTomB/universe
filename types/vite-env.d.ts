/// <reference types="vite/client" />

/**
 * Describes all existing environment variables and their types.
 * Assists in autocomplete and typechecking
 *
 * @see https://github.com/vitejs/vite/blob/eef51cb37db98a1ad9a541bdd3cd74736ff8488d/packages/vite/types/importMeta.d.ts#L62-L69 Base Interface
 */
interface ImportMetaEnv {
  /**
   * The value of the variable is set in scripts/watch.js and depend on packages/main/vite.config.js
   */
  readonly VITE_DEV_SERVER_URL: undefined | string;

  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  readonly VITE_FIREBASE_DATABASE_URL: string;
  readonly VITE_FIREBASE_PROJECT_ID: string;
  readonly VITE_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_FIREBASE_MESSAGING_SENDER_ID: string;
  readonly VITE_FIREBASE_APP_ID: string;
  readonly VITE_FIREBASE_MEASUREMENT_ID: string;

  readonly VITE_RECAPTCHA_V3_KEY: string;

  readonly VITE_FIREBASE_EMULATOR_URL: string;

  readonly VITE_SENTRY_URL: string;
}
