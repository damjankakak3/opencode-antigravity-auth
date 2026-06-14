import { checkAccountsQuota } from './dist/plugin/quota.js';
import { AccountManager } from './dist/plugin/accounts.js';

async function main() {
  console.log("Loading AccountManager...");
  const manager = await AccountManager.loadFromDisk();
  const accounts = manager.getAccountsSnapshot();
  console.log(`Loaded ${accounts.length} accounts.`);
  
  // Check the first account
  const accountsToTest = accounts.slice(0, 1);
  console.log(`Checking quota for account: ${accountsToTest[0]?.email || 'unknown'}...`);
  
  const client = {
    // Mock minimal PluginClient
  };
  
  const results = await checkAccountsQuota(accountsToTest, client);
  console.log("\nResults:");
  console.log(JSON.stringify(results, null, 2));
}

main().catch(console.error);
