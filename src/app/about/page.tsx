import React from "react";
import Header from "../components/Header";

function page() {
  return (
    <div className="bg-[#080808] h-full ">
      <Header></Header>

      <div className="flex flex-col gap-10 justify-center p-14">
        <h1 className="text-slate-100 text-4xl">Ocean Coin</h1>
        <p className="text-slate-500">
          Ocean Coin is a decentralized digital currency that operates on the
          Ethereum blockchain. As a decentralized cryptocurrency, Ocean Coin
          provides users with a secure and transparent method for conducting
          transactions and participating in the digital economy.
        </p>

        <h2 className="text-slate-100 text-4xl">Key Features</h2>
        <ul className="text-slate-500">
          <li>
            <strong>Decentralization:</strong> Ocean Coin operates on a
            decentralized network, meaning that no single entity has control
            over the currency or its transactions. This ensures transparency,
            security, and censorship resistance.
          </li>
        </ul>

        <h2 className="text-slate-100 text-4xl">Purpose</h2>
        <p className="text-slate-500">
          The primary purpose of Ocean Coin is to provide users with a reliable
          and efficient medium of exchange within its decentralized ecosystem.
          By leveraging blockchain technology, Ocean Coin aims to facilitate
          peer-to-peer transactions, smart contracts, and decentralized
          applications.
        </p>

        <h2 className="text-slate-100 text-4xl">Unique Aspects</h2>
        <p className="text-slate-500">
          One of the unique aspects of Ocean Coin is its commitment to
          decentralization and community governance. Unlike traditional
          currencies, which are controlled by central authorities, Ocean Coin
          empowers its users to participate in decision-making processes and
          shape the future of the ecosystem.
        </p>

        <h2 className="text-slate-100 text-4xl">Get Involved</h2>
        <p className="text-slate-500">
          To get involved with Ocean Coin and join its decentralized community,
          you can start by acquiring Ocean Coins through cryptocurrency
          exchanges or participating in token sales. Additionally, you can
          contribute to the development of the ecosystem by engaging in
          discussions, proposing improvements, and building decentralized
          applications on the Ocean Coin platform.
        </p>
      </div>

      <footer>
        <p>
          For more information and updates, visit the official{" "}
          <a href="https://sepolia.etherscan.io/token/0x4f14c41ad004c2ed0f18B60e99d65b611514BEaa">
            Ocean Coin
          </a>{" "}
          website.
        </p>
      </footer>
    </div>
  );
}

export default page;
