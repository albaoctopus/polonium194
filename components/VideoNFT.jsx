import React, { useState, useEffect } from 'react';
import { useContract, useNFT } from '@thirdweb/react-sdk';

const VideoNFT = ({ nft }) => {
  const [videoUrl, setVideoUrl] = useState('');

  const { contract } = useContract(
    "0x03AD0345b7Da6806Ce975d07627A0c64c7C41BFE", // Your marketplace contract address here
    "marketplace"
  );


  useEffect(() => {
    // Get the video URL from the NFT metadata
    const contract = useContract(nft.contractAddress);
    const metadata = contract.getNFTMetadata(nft.tokenId);
    const videoUrl = metadata.videoUrl;

    // Set the video URL state
    setVideoUrl(videoUrl);
  }, [nft.contractAddress, nft.tokenId]);

  // Render the video tag
  return (
    <video src={videoUrl} controls></video>
  );
};

export default VideoNFT;