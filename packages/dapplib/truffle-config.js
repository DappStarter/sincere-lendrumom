require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict enter occur slab chaos note ranch punch good neck forget team'; 
let testAccounts = [
"0xeb6db22231a20037f57b445480460408139a5f038c4d1f89f568fafcc4fce948",
"0x8c9daabe317fe97ccc005a62ac300054c65374797a7c32cd7e10021d064d5b79",
"0x13bafb6d6d911f80516176d342d257c62b06aeecac1c3b1cb400032def3e49d1",
"0xfe907bf12964422634691a4e5ae0a3145cd71ef6787b1a952452512a6b35d794",
"0xa2baab27f525acebc34cd480c2221cd3f37c467ab7c98e8b6c04ef560c95ed77",
"0x6d9c1b8a9988d5995dc1fb3ed24b3aa67eeb5d22cb5dc19ec863ce1beded23a1",
"0x115a9178f9e452681b64dce089b3890de9d9347f24e2f7267f77f3c0b17fd5c1",
"0x1e5e01d7175b9c0f08f35192e9a46f6843d61f17d185bd8642cca25b80af6c5f",
"0x3864dc88beeeee987e570f1beebac288de4c4b5d7ceb0e4efdf2cc3843842526",
"0x12bc73792bb48d83e92c0930e03f87a45d98458c76d5df4730b4fd028769e57c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
