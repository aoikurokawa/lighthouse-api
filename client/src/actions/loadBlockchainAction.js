import Web3 from 'web3';
import { ADDRESS, ABI } from '../config';

export const loadBlockchain = () => async (dispatch) => {
    const web3 = new Web3(Web3.givenProvider || "http:localhost:8545");
    const accounts = await web3.eth.getAccounts();
    const selectedAccounts = window.ethereum.selectedAddress;
    const contractInstance = new web3.eth.Contract(ABI, ADDRESS, {from: accounts[0]});

    dispatch({
        type: "GET_CONTRACTDATA", 
        contractInstance: contractInstance, 
        accounts: accounts,
    });


};
