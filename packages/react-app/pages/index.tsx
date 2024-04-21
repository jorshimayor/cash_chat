import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import ChatBox from "./ChatBox";
import HomePage from "../components/HomePage";
import FirstPage from "../components/FirstPage";
import Chat from "./Chat";

export default function Home() {
  const [userAddress, setUserAddress] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const { address, isConnected } = useAccount();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isConnected && address) {
      setUserAddress(address);
    }
  }, [address, isConnected]);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <HomePage />
    </>
  );
}
