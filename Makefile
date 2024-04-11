compile:
	npx hardhat compile

node:
	npx hardhat node

deploy:
	npx hardhat ignition deploy ./ignition/modules/Token.js --network localhost