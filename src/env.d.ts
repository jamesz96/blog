interface ImportMetaEnv {
  readonly VITE_ALGOLIA_APP_ID: string;
  readonly VITE_ALGOLIA_SEARCH_KEY: string;
  readonly VITE_ALGOLIA_ADMIN_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
