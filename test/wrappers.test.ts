import * as sodium from "libsodium-wrappers";
import { expectTypeOf, it } from "vitest";
import {
  crypto_box_easy,
  crypto_box_keypair,
  crypto_box_open_easy,
  crypto_box_seal,
  crypto_box_seal_open,
  crypto_sign_detached,
  crypto_sign_keypair,
  crypto_sign_verify_detached,
} from "../src/wrappers";

it("should have identical type signatures as the original libsodium exports", async () => {
  expectTypeOf(crypto_box_easy).toEqualTypeOf<typeof sodium.crypto_box_easy>();
  expectTypeOf(crypto_box_keypair).toEqualTypeOf<
    typeof sodium.crypto_box_keypair
  >();
  expectTypeOf(crypto_box_open_easy).toEqualTypeOf<
    typeof sodium.crypto_box_open_easy
  >();
  expectTypeOf(crypto_box_seal).toEqualTypeOf<typeof sodium.crypto_box_seal>();
  expectTypeOf(crypto_box_seal_open).toEqualTypeOf<
    typeof sodium.crypto_box_seal_open
  >();
  expectTypeOf(crypto_sign_keypair).toEqualTypeOf<
    typeof sodium.crypto_sign_keypair
  >();
  expectTypeOf(crypto_sign_detached).toEqualTypeOf<
    typeof sodium.crypto_sign_detached
  >();
  expectTypeOf(crypto_sign_verify_detached).toEqualTypeOf<
    typeof sodium.crypto_sign_verify_detached
  >();
});
