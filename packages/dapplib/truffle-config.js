require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good close bone tooth story rescue night mad good arctic sun shine'; 
let testAccounts = [
"0x465a92c3d423dfa911f95e9dbe7aef4020cc6fe9249faa47abdb675d0ec96ea7",
"0x614b212623b226124c03bdf2ac65d9582174214f177a8f69191781fd130371eb",
"0x28f428f8e134c20e611bd153d69517974fe3c84dc8c4d70f4fb5a50669815e1d",
"0x1575ef01c77eb567afcb524040c99b74919910d394aeb469aa24946a37e75199",
"0xb402ef759d36a5ccaeb0ce638bc514488891679d4e4542dd40a338ff7ae83643",
"0xcee6bbcce0c7660c7a827ae4de5db433a39790269310fec41cd880e11c34bce7",
"0x2a535260a4ce66a782f3392b97108461667e840336f3392aeaa251126148d1f0",
"0x64dcd7019ca23b79f1f3071961b31a14e9382a55d9c29b4c5187f28532370799",
"0xfd54e42bd644fe3ea8ef78be611e5fb55d3b71e07d7a1437007610208f765ee6",
"0x59705369d7259a3cf31030b8e867bfbc6ab9f82bc3be3e1cc79eafed78e4b19d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


