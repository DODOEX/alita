import * as anchor from '@coral-xyz/anchor';
import { PublicKey } from '@solana/web3.js';

export const POOL_SEED = Buffer.from(anchor.utils.bytes.utf8.encode('pool'));

export async function getPoolAddress(
  baseToken: PublicKey,
  quoteToken: PublicKey,
  programId: PublicKey,
): Promise<[PublicKey, number]> {
  return await PublicKey.findProgramAddress(
    [baseToken.toBuffer(), quoteToken.toBuffer(), POOL_SEED],
    programId,
  );
}
