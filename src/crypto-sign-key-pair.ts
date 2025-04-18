import { ed25519 } from "@noble/curves/ed25519";
import type { KeyPair } from "./types.js";

export function cryptoSignKeyPair(): KeyPair {
  const privateKey = ed25519.utils.randomPrivateKey();
  const publicKey = ed25519.getPublicKey(privateKey);
  const sodiumPrivateKey = new Uint8Array([...privateKey, ...publicKey]);
  return { keyType: "ed25519", publicKey, privateKey: sodiumPrivateKey };
}
