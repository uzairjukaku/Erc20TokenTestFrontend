import { ethers } from "ethers";
import artifacts from "./../../../artifacts/contracts/OceanCoin.sol/OceanCoin.json";

export default async function Transfer(address) {
  try {
    if (ethers.isAddress(address)) {
      const transferAmount = ethers.parseEther("100");
      const Provider = new ethers.getDefaultProvider("sepolia");
      const signer = new ethers.Wallet(
        "ff03933af0f453020076b8a81c56d4582c76f777b34eb31fb1a148db75acfe5f",
        Provider
      );

      const abi = artifacts.abi;
      const contract = new ethers.Contract(
        "0x4f14c41ad004c2ed0f18B60e99d65b611514BEaa",
        abi,
        signer
      );

      const transfered = await contract.transfer(address, transferAmount);

      return 1;
    } else {
      return -1;
    }
  } catch (error) {
    return 0;
  }
}
