import { Cron } from "./lib/cron";

function main(): void {
    console.log('🏃 App Start 🏃');
    new Cron().start();
}

main();