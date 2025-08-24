# Codespace EVM

This is a ready-to-run Ethereum Virtual Machine (EVM) dev setup for **GitHub Codespaces** using Hardhat.

## Quick Start

1. Open this repo in a GitHub Codespace.
2. Wait for dependencies to install automatically.
3. The local Hardhat node (EVM) will auto-start on port 8545.

### Commands

- Start node manually:
  ```bash
  npm run node
  ```

- Compile contracts:
  ```bash
  npm run compile
  ```

- Deploy contract:
  ```bash
  npm run deploy
  ```

- Run tests:
  ```bash
  npm run test
  ```

### Notes

- The node runs on `http://127.0.0.1:8545` (forwarded in Codespaces).
- Uses Hardhat Toolbox and Solidity 0.8.24.
- `Counter.sol` is a demo contract that can be incremented or set.
- You can connect external wallets/tools (like Remix or ethers.js) using the provided RPC URL.

---

Enjoy your one-click Ethereum dev environment 🚀
