module.exports = () => {
	return {
		clientDir: `client`,
		serverDir: `server`,
		assetsDir: `assets`,
		serverEntry: `server.js`,
		serverBasePath: `api`,
		clientBasePath: `/`,
		assetsBasePath: `/`,
		template: `default`,
		browserDependencies: [],
		osDependencies: [],
		desktop: {
			height: 500,
			width: 800,
			minWidth: 100,
			minHeight: 100,
			maxWidth: null,
			maxHeight: null,
			icon: `assets/favicon.ico`,
			waitUntilReady: true,
		},
		appName: `Versatile App`,
		backgroundColor: `#2e2c29`,
	};
};
