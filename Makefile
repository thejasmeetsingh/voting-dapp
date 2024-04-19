compile:
	npx hardhat compile

node:
	npx hardhat node

deploy:
	rm -r artifacts cache ignition/deployments
	npx hardhat ignition deploy ./ignition/modules/Token.js --network localhost