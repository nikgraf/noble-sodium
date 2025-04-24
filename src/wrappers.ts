import { cryptoBoxEasy } from "./crypto-box-easy.js";
import { cryptoBoxKeyPair } from "./crypto-box-key-pair.js";
import { cryptoBoxOpenEasy } from "./crypto-box-open-easy.js";
import { cryptoBoxSealOpen } from "./crypto-box-seal-open.js";
import { cryptoBoxSeal } from "./crypto-box-seal.js";
import { cryptoSignDetached } from "./crypto-sign-detached.js";
import { cryptoSignKeyPair } from "./crypto-sign-key-pair.js";
import { cryptoSignVerifyDetached } from "./crypto-sign-verify-detached.js";

export type Uint8ArrayOutputFormat = "uint8array";

export type StringOutputFormat = "text" | "hex" | "base64";

export type KeyType = "curve25519" | "ed25519" | "x25519";

export interface KeyPair {
  keyType: KeyType;
  privateKey: Uint8Array;
  publicKey: Uint8Array;
}

export interface StringKeyPair {
  keyType: KeyType;
  privateKey: string;
  publicKey: string;
}

export function crypto_box_easy(
  message: string | Uint8Array,
  nonce: Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | null
): Uint8Array;
export function crypto_box_easy(
  message: string | Uint8Array,
  nonce: Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat: StringOutputFormat
): string;
export function crypto_box_easy(
  message: string | Uint8Array,
  nonce: Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | StringOutputFormat | null
): Uint8Array | string {
  if (typeof message === "string") {
    throw new Error("string message not supported");
  }
  if (
    outputFormat === "hex" ||
    outputFormat === "base64" ||
    outputFormat === "text"
  ) {
    throw new Error("StringOutputFormat not supported");
  }
  return cryptoBoxEasy({
    message,
    nonce,
    publicKey,
    privateKey,
  });
}

export function crypto_box_keypair(
  outputFormat?: Uint8ArrayOutputFormat | null
): KeyPair;
export function crypto_box_keypair(
  outputFormat: StringOutputFormat
): StringKeyPair;
export function crypto_box_keypair(
  outputFormat?: Uint8ArrayOutputFormat | StringOutputFormat | null
): KeyPair | StringKeyPair {
  if (
    outputFormat === "hex" ||
    outputFormat === "base64" ||
    outputFormat === "text"
  ) {
    throw new Error("StringOutputFormat not supported");
  }
  return cryptoBoxKeyPair();
}

export function crypto_box_open_easy(
  ciphertext: string | Uint8Array,
  nonce: Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | null
): Uint8Array;
export function crypto_box_open_easy(
  ciphertext: string | Uint8Array,
  nonce: Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat: StringOutputFormat
): string;
export function crypto_box_open_easy(
  ciphertext: string | Uint8Array,
  nonce: Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | StringOutputFormat | null
): Uint8Array | string {
  if (typeof ciphertext === "string") {
    throw new Error("string ciphertext not supported");
  }
  if (
    outputFormat === "hex" ||
    outputFormat === "base64" ||
    outputFormat === "text"
  ) {
    throw new Error("StringOutputFormat not supported");
  }
  return cryptoBoxOpenEasy({
    ciphertext,
    nonce,
    publicKey,
    privateKey,
  });
}

export function crypto_box_seal(
  message: string | Uint8Array,
  publicKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | null
): Uint8Array;
export function crypto_box_seal(
  message: string | Uint8Array,
  publicKey: Uint8Array,
  outputFormat: StringOutputFormat
): string;
export function crypto_box_seal(
  message: string | Uint8Array,
  publicKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | StringOutputFormat | null
): Uint8Array | string {
  if (typeof message === "string") {
    throw new Error("string message not supported");
  }
  if (
    outputFormat === "hex" ||
    outputFormat === "base64" ||
    outputFormat === "text"
  ) {
    throw new Error("StringOutputFormat not supported");
  }
  return cryptoBoxSeal({
    message,
    publicKey,
  });
}

export function crypto_box_seal_open(
  ciphertext: string | Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | null
): Uint8Array;
export function crypto_box_seal_open(
  ciphertext: string | Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat: StringOutputFormat
): string;
export function crypto_box_seal_open(
  ciphertext: string | Uint8Array,
  publicKey: Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | StringOutputFormat | null
): Uint8Array | string {
  if (typeof ciphertext === "string") {
    throw new Error("string ciphertext not supported");
  }
  if (
    outputFormat === "hex" ||
    outputFormat === "base64" ||
    outputFormat === "text"
  ) {
    throw new Error("StringOutputFormat not supported");
  }
  return cryptoBoxSealOpen({
    ciphertext,
    privateKey,
    publicKey,
  });
}

export function crypto_sign_keypair(
  outputFormat?: Uint8ArrayOutputFormat | null
): KeyPair;
export function crypto_sign_keypair(
  outputFormat: StringOutputFormat
): StringKeyPair;
export function crypto_sign_keypair(
  outputFormat?: Uint8ArrayOutputFormat | StringOutputFormat | null
): KeyPair | StringKeyPair {
  if (
    outputFormat === "hex" ||
    outputFormat === "base64" ||
    outputFormat === "text"
  ) {
    throw new Error("StringOutputFormat not supported");
  }
  return cryptoSignKeyPair();
}

export function crypto_sign_detached(
  message: string | Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | null
): Uint8Array;
export function crypto_sign_detached(
  message: string | Uint8Array,
  privateKey: Uint8Array,
  outputFormat: StringOutputFormat
): string;
export function crypto_sign_detached(
  message: string | Uint8Array,
  privateKey: Uint8Array,
  outputFormat?: Uint8ArrayOutputFormat | StringOutputFormat | null
): Uint8Array | string {
  if (typeof message === "string") {
    throw new Error("string message not supported");
  }
  if (
    outputFormat === "hex" ||
    outputFormat === "base64" ||
    outputFormat === "text"
  ) {
    throw new Error("StringOutputFormat not supported");
  }
  return cryptoSignDetached({
    message,
    privateKey,
  });
}

export function crypto_sign_verify_detached(
  signature: Uint8Array,
  message: string | Uint8Array,
  publicKey: Uint8Array
): boolean {
  if (typeof message === "string") {
    throw new Error("string message not supported");
  }
  return cryptoSignVerifyDetached({
    signature,
    message,
    publicKey,
  });
}
