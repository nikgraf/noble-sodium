## NobleSodium

A TypeScript library offering a Libsodium-compatible API built on top of [Noble Packages](https://paulmillr.com/noble/).

## Why this library?

Libsodium is a modern, easy-to-use software library implementing best practices in cryptography and used in [many applications](https://libsodium.gitbook.io/doc/faq). It even offers a JavaScript compile target leveraging WebAssembly. However, the use of WebAssembly has a few drawbacks:

- No code-splitting
- It's not supported in all environments (ReactNative)

Even Libsodium's author Frank Denis mentioned:

> libsodium.js was a nice contribution, but honestly, for crypto in JavaScript today, I'd rather use WebCrypto when possible, and Noble cryptography for everything else.

Source: [https://github.com/jedisct1/libsodium.js/issues/327#issuecomment-1793419292](https://github.com/jedisct1/libsodium.js/issues/327#issuecomment-1793419292)

That said, switching to Noble Packages isn’t without its challenges. Noble is more low level and therefor doesn't offer high level constructions like Sealed Boxes. Hence this library. It offers functions compatible with Libsodium but leverages Noble for the actual cryptography.

## Installation

```bash
npm install @serenity-kit/noble-sodium
```

## How to use

```ts
import { cryptoBoxKeyPair } from "@serenity-kit/noble-sodium";

const keypair = cryptoBoxKeyPair();
```

For more examples see the [tests](./test/).

## API changes compared to `libsodium-wrappers`

- Instead of accepting multiple parameters, objects are used. This is to avoid accidentally passing wrong parameters.
- Instead of using underscores, camelCase is used.
- TypeScript out of the box.

### Function mapping

- `cryptoBoxKeyPair` -> `crypto_box_keypair`
- `cryptoBoxEasy` -> `crypto_box_easy`
- `cryptoBoxOpenEasy` -> `crypto_box_open_easy`

- `cryptoSignKeyPair` -> `crypto_sign_keypair`
- `cryptoSignDetached` -> `crypto_sign_detached`
- `cryptoSignVerifyDetached` -> `crypto_sign_verify_detached`

- `cryptoBoxSeal` -> `crypto_box_seal`
- `cryptoBoxSealOpen` -> `crypto_box_seal_open`

## Notable findings

- `crypto_box_easy` does a hsalsa on the shared secret and then uses the result as key for the box
- Libsodium signing private key is: `[ private_key (32 bytes) ‖ public_key (32 bytes) ]`

## Performance compared to `libsodium-wrappers`

While `libsodium-wrappers` is faster, the performance difference is only a few x. See more on this blog post: [https://www.nikgraf.com/blog/choosing-a-cryptography-library-in-javascript-noble-vs-libsodium-js](https://www.nikgraf.com/blog/choosing-a-cryptography-library-in-javascript-noble-vs-libsodium-js)

## How is compatiblity with Libsodium verified?

In the tests functions from `noble-sodium` and `libsodium-wrappers` are used interchangeably to verify compatibility.

## License

MIT
