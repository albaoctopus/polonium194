import React from "react";
import Link from "next/link";
import {
  MediaRenderer,
  useActiveListings,
  useContract,
} from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { Marketplace } from "@thirdweb-dev/sdk";
import { BigNumber } from "ethers";

const WorldOne = () => {
  const router = useRouter();

  // Connect your marketplace smart contract here (replace this address)
  const { contract } = useContract(
    "0x1866EB69FcF76cFC166ff4519009Ed0064d12E2B", // Your marketplace contract address here
    "marketplace"
  );

  const { data: nfts, isLoading } = useActiveListings(contract);

  return (
    <div>
    <main className="p-5 ">
      {!isLoading ? (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {nfts &&
            nfts.map((nft) => {
              return (
                  <div key={nft.id} className="relative bg-gray-900 rounded-lg shadow-lg">
                  <MediaRenderer
                    src={nft.asset.animation_url || nft.asset.image} // Use the animation_url if available
                    height="fill"
                    width="fill"
                    controls={true} // Show media controls
                    className="rounded-xl mb-5 border-4 border-sky-700"
                  />
                    <div className="p-5 rounded-xl flex-row border-4 border-sky-700 flex items-center justify-between">
                      <span>
                        <p className="text-lg text-zinc-300 font-medium">{nft.asset.name}</p>
                        <p className="text-sm text-white">
                          Price: {nft.buyoutCurrencyValuePerToken.displayValue}{" "}
                          MATIC
                        </p>
                      </span>
                      <button
                        className="place-self-endtext-white bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-sky-300 dark:focus:ring-sky-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={async () => {
                          try {
                            await contract?.buyoutListing(
                              BigNumber.from(nft.id),
                              1
                            );
                          } catch (error) {
                            console.error(error);
                            alert(error);
                          }
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-2">
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-sky-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status">
            <span
              className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              >Loading...</span
            >
          </div>
         
         
        </div>
        )}
      </main>
    </div>
  );
};




    

    export default WorldOne


