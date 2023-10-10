interface ImportMetaEnv {
	VITE_FAUNA_SECRET: string
	// Add other environment variables here...
}

interface ImportMeta {
	env: ImportMetaEnv
}
