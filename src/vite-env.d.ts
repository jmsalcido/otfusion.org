/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GHOST_SITE?: string
  readonly VITE_PUBLIC_POSTHOG_KEY: string
  readonly VITE_PUBLIC_POSTHOG_HOST: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
