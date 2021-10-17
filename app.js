// contract address on Kovan:
const dcaAddress = '0xCf9dF7fC6345dB4cd89D66462A240BaF9b6CFf25'


const ABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "portfolioAllocation",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "tokenBalances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "userTimelock",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256[]",
          "name": "_portfolio_allocation",
          "type": "uint256[]"
        }
      ],
      "name": "createPortfolioAllocation",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "daiDeposited",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "daiDepositedAndExecute",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "executePortfolioBuys",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_amountIn",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "token_index",
          "type": "uint256"
        }
      ],
      "name": "swapExactInputSingle",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "amountOut",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_unlockDate",
          "type": "uint256"
        }
      ],
      "name": "setTimelockByDate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_hoursToLock",
          "type": "uint256"
        }
      ],
      "name": "setTimelockByHours",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_daysToLock",
          "type": "uint256"
        }
      ],
      "name": "setTimelockByDays",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "token_index",
          "type": "uint256"
        }
      ],
      "name": "withdrawTokens",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "convertExactEthToDai",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function",
      "payable": true
    }
  ]


  // Using the 'load' event listener for Javascript to
// check if window.ethereum is available

window.addEventListener('load', function() {
  
    if (typeof window.ethereum !== 'undefined') {
      console.log('window.ethereum is enabled')
      if (window.ethereum.isMetaMask === true) {
        console.log('MetaMask is active')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Is Available!'
  
        // add in web3 here
        var web3 = new Web3(window.ethereum)
  
      } else {
        console.log('MetaMask is not available')
        let mmDetected = document.getElementById('mm-detected')
        mmDetected.innerHTML += 'MetaMask Not Available!'
        // let node = document.createTextNode('<p>MetaMask Not Available!<p>')
        // mmDetected.appendChild(node)
      }
    } else {
      console.log('window.ethereum is not found')
      let mmDetected = document.getElementById('mm-detected')
      mmDetected.innerHTML += '<p>MetaMask Not Available!<p>'
    }
  })
  
  
  var web3 = new Web3(window.ethereum)
  
  // Grabbing the button object,  
  
  const mmEnable = document.getElementById('mm-connect');
  
  // since MetaMask has been detected, we know
  // `ethereum` is an object, so we'll do the canonical
  // MM request to connect the account. 
  // 
  // typically we only request access to MetaMask when we
  // need the user to do something, but this is just for
  // an example
   
  mmEnable.onclick = async () => {
    await ethereum.request({ method: 'eth_requestAccounts'})
    // grab mm-current-account
    // and populate it with the current address
    var mmCurrentAccount = document.getElementById('mm-current-account');
    mmCurrentAccount.innerHTML = 'Current Account: ' + ethereum.selectedAddress
  }
  
//   // grab the button for input to a contract:
  
//   const ssSubmit = document.getElementById('ss-input-button');
  
//   ssSubmit.onclick = async () => {
//     // grab value from input
    
//     const ssInputValue = document.getElementById('ss-input-box').value;
//     console.log(ssInputValue)
  
//     var web3 = new Web3(window.ethereum)
  
//     // instantiate smart contract instance
    
//     const simpleStorage = new web3.eth.Contract(ssABI, ssAddress)
//     simpleStorage.setProvider(window.ethereum)
  
//     await simpleStorage.methods.store(ssInputValue).send({from: ethereum.selectedAddress})
  
//   }
  
//   const ssGetValue = document.getElementById('ss-get-value')
  
//   ssGetValue.onclick = async () => {
  
//     var web3 = new Web3(window.ethereum)
  
//     const simpleStorage = new web3.eth.Contract(ssABI, ssAddress)
//     simpleStorage.setProvider(window.ethereum)
  
//     var value = await simpleStorage.methods.retrieve().call()
  
//     console.log(value)
  
//     const ssDisplayValue = document.getElementById('ss-display-value')
  
//     ssDisplayValue.innerHTML = 'Current Simple Storage Value: ' + value
  
//   }
  