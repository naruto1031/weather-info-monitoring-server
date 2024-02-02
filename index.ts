import { Strings } from "./lib/constant/strings";
import { CronManager } from "./lib/manager/cron_manager";
import { SerialManager } from "./lib/manager/serial_manager"

function main(): void {
    console.log(Strings.APP_RUN_TEXT);

    new SerialManager().paserListener();
    new CronManager().start();
}

main();

