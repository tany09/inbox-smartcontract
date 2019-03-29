const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');

const provider = new HDWalletProvider('rate dance invite ability brave stereo any funny spray love left urban', 
    'https://rinkeby.infura.io/v3/ad98813d140342a6879e930737d3cf1f');

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Contract deployed from account ', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode, arguments: ['Hi there']})
    .send({from : accounts[0], gas: '1000000'});
    
    console.log('Contract deployed to address', result.options.address);
};

deploy();