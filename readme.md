# poc_storage_callByNodeFork

This is a simple test of hardhat bc mainfork.

The contract deployed on mumbai, i forked mumbai and i called with simple ABI.

It's powerful feature !

## Install 
* install dependencies
```sh
npm install
```

* create .env file 
```sh
touch .env 
```

* get api_key from [alchemy](https://www.alchemy.com/) of mumbai node.

* configure .env file, add URL_MUMBAI = https://polygon-mumbai.g.alchemy.com/v2/API_KEY

* run test 
```sh
npx hardhat test
```

