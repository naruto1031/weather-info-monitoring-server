import { Strings } from "./lib/constant/strings";
import { Cron } from "./lib/cron";

function main(): void {
    console.log(Strings.APP_RUN_TEXT);
    new Cron().start();
}

main();

