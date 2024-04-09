interface Environment {
	region: string;
	project: string;
	environment: string;
	ownerAccount: string;
	appRepo: string;
	appBranch: string;
	accountId: string;
}

export const environments: { [key: string]: Environment } = {
	dev: {
		region: '',
		project: '',
		environment: '',
		ownerAccount: '',
		appRepo: '',
		appBranch: '',
		accountId: '',
	},

	prod: {
		region: '',
		project: '',
		environment: '',
		ownerAccount: '',
		appRepo: '',
		appBranch: '',
		accountId: '',
	},
};
