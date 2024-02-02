import { Strings } from "./lib/constant/strings";
import { CronManager } from "./lib/manager/cron_manager";
import { paserListener } from "./lib/manager/serial_manager"

function main(): void {
    console.log(Strings.APP_RUN_TEXT);

    paserListener();
    new CronManager().start();
}

main();

