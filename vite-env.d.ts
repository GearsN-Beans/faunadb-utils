interface ImportMetaEnv {
	VITE_FAUNA_SECRET: string;
	VITE_V10_FAUNA_SECRET: string;
	// Add other environment variables here...
}

interface ImportMeta {
	env: ImportMetaEnv;
}
