const networks = require("./networks")

class Network {
  constructor(name, version = "v1") {
    this.name = name
    this.version = version

    let info;
    if (this.name === 'mainnet') {
      info = require('./mainnet/v1/index.json');
    } else {
      info = require('./testnet/mumbai/index.json');
    }
    // treat data as properties
    Object.keys(info).forEach(key => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: false,
        writable: false,
        value: info[key]
      })
    })
  }

  artifacts(name, type = 'plasma') {
    console.log('leon.w@artifacts@', name, type, this.name);
    if (this.name === 'mainnet') {
      if (type === 'pos') {
        if (name === 'AccessControl') {
          return require('./mainnet/v1/artifacts/pos/AccessControl.json');
        } else if (name === 'AccessControlMixin') {
          return require('./mainnet/v1/artifacts/pos/AccessControlMixin.json');
        } else if (name === 'ChainConstants') {
          return require('./mainnet/v1/artifacts/pos/ChainConstants.json');
        } else if (name === 'ChildChainManager') {
          return require('./mainnet/v1/artifacts/pos/ChildChainManager.json');
        } else if (name === 'ChildChainManagerProxy') {
          return require('./mainnet/v1/artifacts/pos/ChildChainManagerProxy.json');
        } else if (name === 'ChildERC20') {
          return require('./mainnet/v1/artifacts/pos/ChildERC20.json');
        } else if (name === 'ChildERC721') {
          return require('./mainnet/v1/artifacts/pos/ChildERC721.json');
        } else if (name === 'ChildTunnel') {
          return require('./mainnet/v1/artifacts/pos/ChildTunnel.json');
        } else if (name === 'DummyERC20') {
          return require('./mainnet/v1/artifacts/pos/DummyERC20.json');
        } else if (name === 'DummyERC721') {
          return require('./mainnet/v1/artifacts/pos/DummyERC721.json');
        } else if (name === 'DummyERC1155') {
          return require('./mainnet/v1/artifacts/pos/DummyERC1155.json');
        } else if (name === 'DummyMintableERC721') {
          return require('./mainnet/v1/artifacts/pos/DummyMintableERC721.json');
        } else if (name === 'DummyStateSender') {
          return require('./mainnet/v1/artifacts/pos/DummyStateSender.json');
        } else if (name === 'EIP712Base') {
          return require('./mainnet/v1/artifacts/pos/EIP712Base.json');
        } else if (name === 'ERC20') {
          return require('./mainnet/v1/artifacts/pos/ERC20.json');
        } else if (name === 'ERC20Predicate') {
          return require('./mainnet/v1/artifacts/pos/ERC20Predicate.json');
        } else if (name === 'ERC20PredicateProxy') {
          return require('./mainnet/v1/artifacts/pos/ERC20PredicateProxy.json');
        } else if (name === 'ERC165') {
          return require('./mainnet/v1/artifacts/pos/ERC165.json');
        } else if (name === 'ERC721') {
          return require('./mainnet/v1/artifacts/pos/ERC721.json');
        } else if (name === 'ERC721Predicate') {
          return require('./mainnet/v1/artifacts/pos/ERC721Predicate.json');
        } else if (name === 'ERC721PredicateProxy') {
          return require('./mainnet/v1/artifacts/pos/ERC721PredicateProxy.json');
        } else if (name === 'ERC1155') {
          return require('./mainnet/v1/artifacts/pos/ERC1155.json');
        } else if (name === 'ERC1155Predicate') {
          return require('./mainnet/v1/artifacts/pos/ERC1155Predicate.json');
        } else if (name === 'ERC1155PredicateProxy') {
          return require('./mainnet/v1/artifacts/pos/ERC1155PredicateProxy.json');
        } else if (name === 'ERC1155Receiver') {
          return require('./mainnet/v1/artifacts/pos/ERC1155Receiver.json');
        } else if (name === 'EtherPredicate') {
          return require('./mainnet/v1/artifacts/pos/EtherPredicate.json');
        } else if (name === 'EtherPredicateProxy') {
          return require('./mainnet/v1/artifacts/pos/EtherPredicateProxy.json');
        } else if (name === 'ICheckpointManager') {
          return require('./mainnet/v1/artifacts/pos/ICheckpointManager.json');
        } else if (name === 'IChildChainManager') {
          return require('./mainnet/v1/artifacts/pos/IChildChainManager.json');
        } else if (name === 'IChildToken') {
          return require('./mainnet/v1/artifacts/pos/IChildToken.json');
        } else if (name === 'IERC20') {
          return require('./mainnet/v1/artifacts/pos/IERC20.json');
        } else if (name === 'IERC165') {
          return require('./mainnet/v1/artifacts/pos/IERC165.json');
        } else if (name === 'IERC721') {
          return require('./mainnet/v1/artifacts/pos/IERC721.json');
        } else if (name === 'IERC721Enumerable') {
          return require('./mainnet/v1/artifacts/pos/IERC721Enumerable.json');
        } else if (name === 'IERC721Metadata') {
          return require('./mainnet/v1/artifacts/pos/IERC721Metadata.json');
        } else if (name === 'IERC721Receiver') {
          return require('./mainnet/v1/artifacts/pos/IERC721Receiver.json');
        } else if (name === 'IERC1155') {
          return require('./mainnet/v1/artifacts/pos/IERC1155.json');
        } else if (name === 'IERC1155MetadataURI') {
          return require('./mainnet/v1/artifacts/pos/IERC1155MetadataURI.json');
        } else if (name === 'IERC1155Receiver') {
          return require('./mainnet/v1/artifacts/pos/IERC1155Receiver.json');
        } else if (name === 'IERCProxy') {
          return require('./mainnet/v1/artifacts/pos/IERCProxy.json');
        } else if (name === 'IMintableERC721') {
          return require('./mainnet/v1/artifacts/pos/IMintableERC721.json');
        } else if (name === 'IRootChainManager') {
          return require('./mainnet/v1/artifacts/pos/IRootChainManager.json');
        } else if (name === 'IStateSender') {
          return require('./mainnet/v1/artifacts/pos/IStateSender.json');
        } else if (name === 'MaticWETH') {
          return require('./mainnet/v1/artifacts/pos/MaticWETH.json');
        } else if (name === 'Merkle') {
          return require('./mainnet/v1/artifacts/pos/Merkle.json');
        } else if (name === 'MerklePatriciaTest') {
          return require('./mainnet/v1/artifacts/pos/MerklePatriciaTest.json');
        } else if (name === 'Migrations') {
          return require('./mainnet/v1/artifacts/pos/Migrations.json');
        } else if (name === 'MintableERC20Predicate') {
          return require('./mainnet/v1/artifacts/pos/MintableERC20Predicate.json');
        } else if (name === 'MintableERC20PredicateProxy') {
          return require('./mainnet/v1/artifacts/pos/MintableERC20PredicateProxy.json');
        } else if (name === 'MintableERC721Predicate') {
          return require('./mainnet/v1/artifacts/pos/MintableERC721Predicate.json');
        } else if (name === 'MintableERC721PredicateProxy') {
          return require('./mainnet/v1/artifacts/pos/MintableERC721PredicateProxy.json');
        } else if (name === 'MintableERC1155Predicate') {
          return require('./mainnet/v1/artifacts/pos/MintableERC1155Predicate.json');
        } else if (name === 'MintableERC1155PredicateProxy') {
          return require('./mainnet/v1/artifacts/pos/MintableERC1155PredicateProxy.json');
        } else if (name === 'MockCheckpointManager') {
          return require('./mainnet/v1/artifacts/pos/MockCheckpointManager.json');
        } else if (name === 'NativeMetaTransaction') {
          return require('./mainnet/v1/artifacts/pos/NativeMetaTransaction.json');
        } else if (name === 'NetworkAgnostic') {
          return require('./mainnet/v1/artifacts/pos/NetworkAgnostic.json');
        } else if (name === 'Proxy') {
          return require('./mainnet/v1/artifacts/pos/Proxy.json');
        } else if (name === 'ProxyTestImpl') {
          return require('./mainnet/v1/artifacts/pos/ProxyTestImpl.json');
        } else if (name === 'ProxyTestImplStorageLayoutChange') {
          return require('./mainnet/v1/artifacts/pos/ProxyTestImplStorageLayoutChange.json');
        } else if (name === 'RootChainManager') {
          return require('./mainnet/v1/artifacts/pos/RootChainManager.json');
        } else if (name === 'RootChainManagerProxy') {
          return require('./mainnet/v1/artifacts/pos/RootChainManagerProxy.json');
        } else if (name === 'RootChainManagerStorage') {
          return require('./mainnet/v1/artifacts/pos/RootChainManagerStorage.json');
        } else if (name === 'RootTunnel') {
          return require('./mainnet/v1/artifacts/pos/RootTunnel.json');
        } else if (name === 'UpgradableProxy') {
          return require('./mainnet/v1/artifacts/pos/UpgradableProxy.json');
        }
      } else if (type === 'plasma') {
        if (name === 'RootChain') {
          return require('./mainnet/v1/artifacts/plasma/RootChain.json');
        }
      }
    } else {
      if (type === 'pos') {
        if (name === 'AccessControl') {
          return require('./testnet/mumbai/artifacts/pos/AccessControl.json');
        } else if (name === 'AccessControlMixin') {
          return require('./testnet/mumbai/artifacts/pos/AccessControlMixin.json');
        } else if (name === 'ChainConstants') {
          return require('./testnet/mumbai/artifacts/pos/ChainConstants.json');
        } else if (name === 'ChildChainManager') {
          return require('./testnet/mumbai/artifacts/pos/ChildChainManager.json');
        } else if (name === 'ChildChainManagerProxy') {
          return require('./testnet/mumbai/artifacts/pos/ChildChainManagerProxy.json');
        } else if (name === 'ChildERC20') {
          return require('./testnet/mumbai/artifacts/pos/ChildERC20.json');
        } else if (name === 'ChildERC721') {
          return require('./testnet/mumbai/artifacts/pos/ChildERC721.json');
        } else if (name === 'ChildTunnel') {
          return require('./testnet/mumbai/artifacts/pos/ChildTunnel.json');
        } else if (name === 'DummyERC20') {
          return require('./testnet/mumbai/artifacts/pos/DummyERC20.json');
        } else if (name === 'DummyERC721') {
          return require('./testnet/mumbai/artifacts/pos/DummyERC721.json');
        } else if (name === 'DummyERC1155') {
          return require('./testnet/mumbai/artifacts/pos/DummyERC1155.json');
        } else if (name === 'DummyMintableERC721') {
          return require('./testnet/mumbai/artifacts/pos/DummyMintableERC721.json');
        } else if (name === 'DummyStateSender') {
          return require('./testnet/mumbai/artifacts/pos/DummyStateSender.json');
        } else if (name === 'EIP712Base') {
          return require('./testnet/mumbai/artifacts/pos/EIP712Base.json');
        } else if (name === 'ERC20') {
          return require('./testnet/mumbai/artifacts/pos/ERC20.json');
        } else if (name === 'ERC20Predicate') {
          return require('./testnet/mumbai/artifacts/pos/ERC20Predicate.json');
        } else if (name === 'ERC20PredicateProxy') {
          return require('./testnet/mumbai/artifacts/pos/ERC20PredicateProxy.json');
        } else if (name === 'ERC165') {
          return require('./testnet/mumbai/artifacts/pos/ERC165.json');
        } else if (name === 'ERC721') {
          return require('./testnet/mumbai/artifacts/pos/ERC721.json');
        } else if (name === 'ERC721Predicate') {
          return require('./testnet/mumbai/artifacts/pos/ERC721Predicate.json');
        } else if (name === 'ERC721PredicateProxy') {
          return require('./testnet/mumbai/artifacts/pos/ERC721PredicateProxy.json');
        } else if (name === 'ERC1155') {
          return require('./testnet/mumbai/artifacts/pos/ERC1155.json');
        } else if (name === 'ERC1155Predicate') {
          return require('./testnet/mumbai/artifacts/pos/ERC1155Predicate.json');
        } else if (name === 'ERC1155PredicateProxy') {
          return require('./testnet/mumbai/artifacts/pos/ERC1155PredicateProxy.json');
        } else if (name === 'ERC1155Receiver') {
          return require('./testnet/mumbai/artifacts/pos/ERC1155Receiver.json');
        } else if (name === 'EtherPredicate') {
          return require('./testnet/mumbai/artifacts/pos/EtherPredicate.json');
        } else if (name === 'EtherPredicateProxy') {
          return require('./testnet/mumbai/artifacts/pos/EtherPredicateProxy.json');
        } else if (name === 'ICheckpointManager') {
          return require('./testnet/mumbai/artifacts/pos/ICheckpointManager.json');
        } else if (name === 'IChildChainManager') {
          return require('./testnet/mumbai/artifacts/pos/IChildChainManager.json');
        } else if (name === 'IChildToken') {
          return require('./testnet/mumbai/artifacts/pos/IChildToken.json');
        } else if (name === 'IERC20') {
          return require('./testnet/mumbai/artifacts/pos/IERC20.json');
        } else if (name === 'IERC165') {
          return require('./testnet/mumbai/artifacts/pos/IERC165.json');
        } else if (name === 'IERC721') {
          return require('./testnet/mumbai/artifacts/pos/IERC721.json');
        } else if (name === 'IERC721Enumerable') {
          return require('./testnet/mumbai/artifacts/pos/IERC721Enumerable.json');
        } else if (name === 'IERC721Metadata') {
          return require('./testnet/mumbai/artifacts/pos/IERC721Metadata.json');
        } else if (name === 'IERC721Receiver') {
          return require('./testnet/mumbai/artifacts/pos/IERC721Receiver.json');
        } else if (name === 'IERC1155') {
          return require('./testnet/mumbai/artifacts/pos/IERC1155.json');
        } else if (name === 'IERC1155MetadataURI') {
          return require('./testnet/mumbai/artifacts/pos/IERC1155MetadataURI.json');
        } else if (name === 'IERC1155Receiver') {
          return require('./testnet/mumbai/artifacts/pos/IERC1155Receiver.json');
        } else if (name === 'IERCProxy') {
          return require('./testnet/mumbai/artifacts/pos/IERCProxy.json');
        } else if (name === 'IMintableERC721') {
          return require('./testnet/mumbai/artifacts/pos/IMintableERC721.json');
        } else if (name === 'IRootChainManager') {
          return require('./testnet/mumbai/artifacts/pos/IRootChainManager.json');
        } else if (name === 'IStateSender') {
          return require('./testnet/mumbai/artifacts/pos/IStateSender.json');
        } else if (name === 'MaticWETH') {
          return require('./testnet/mumbai/artifacts/pos/MaticWETH.json');
        } else if (name === 'Merkle') {
          return require('./testnet/mumbai/artifacts/pos/Merkle.json');
        } else if (name === 'MerklePatriciaTest') {
          return require('./testnet/mumbai/artifacts/pos/MerklePatriciaTest.json');
        } else if (name === 'Migrations') {
          return require('./testnet/mumbai/artifacts/pos/Migrations.json');
        } else if (name === 'MintableERC20Predicate') {
          return require('./testnet/mumbai/artifacts/pos/MintableERC20Predicate.json');
        } else if (name === 'MintableERC20PredicateProxy') {
          return require('./testnet/mumbai/artifacts/pos/MintableERC20PredicateProxy.json');
        } else if (name === 'MintableERC721Predicate') {
          return require('./testnet/mumbai/artifacts/pos/MintableERC721Predicate.json');
        } else if (name === 'MintableERC721PredicateProxy') {
          return require('./testnet/mumbai/artifacts/pos/MintableERC721PredicateProxy.json');
        } else if (name === 'MintableERC1155Predicate') {
          return require('./testnet/mumbai/artifacts/pos/MintableERC1155Predicate.json');
        } else if (name === 'MintableERC1155PredicateProxy') {
          return require('./testnet/mumbai/artifacts/pos/MintableERC1155PredicateProxy.json');
        } else if (name === 'MockCheckpointManager') {
          return require('./testnet/mumbai/artifacts/pos/MockCheckpointManager.json');
        } else if (name === 'NativeMetaTransaction') {
          return require('./testnet/mumbai/artifacts/pos/NativeMetaTransaction.json');
        } else if (name === 'NetworkAgnostic') {
          return require('./testnet/mumbai/artifacts/pos/NetworkAgnostic.json');
        } else if (name === 'Proxy') {
          return require('./testnet/mumbai/artifacts/pos/Proxy.json');
        } else if (name === 'ProxyTestImpl') {
          return require('./testnet/mumbai/artifacts/pos/ProxyTestImpl.json');
        } else if (name === 'ProxyTestImplStorageLayoutChange') {
          return require('./testnet/mumbai/artifacts/pos/ProxyTestImplStorageLayoutChange.json');
        } else if (name === 'RootChainManager') {
          return require('./testnet/mumbai/artifacts/pos/RootChainManager.json');
        } else if (name === 'RootChainManagerProxy') {
          return require('./testnet/mumbai/artifacts/pos/RootChainManagerProxy.json');
        } else if (name === 'RootChainManagerStorage') {
          return require('./testnet/mumbai/artifacts/pos/RootChainManagerStorage.json');
        } else if (name === 'RootTunnel') {
          return require('./testnet/mumbai/artifacts/pos/RootTunnel.json');
        } else if (name === 'UpgradableProxy') {
          return require('./testnet/mumbai/artifacts/pos/UpgradableProxy.json');
        }
      } else if (type === 'plasma') {
        if (name === 'RootChain') {
          return require('./testnet/mumbai/artifacts/plasma/RootChain.json');
        }
      }
    }
  }

  abi(name, type = 'plasma') {
    return this.artifacts(name, type).abi
  }
}

Network.networks = networks

module.exports = Network
