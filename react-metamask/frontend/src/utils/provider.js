import { Web3Provider } from '@ethersproject/providers'
export function getProvider(provider) {
  const web3Provider = new Web3Provider(provider);
  web3Provider.pollingInterval = 1000;
  // console.log(web3Provider)
  return web3Provider;
}