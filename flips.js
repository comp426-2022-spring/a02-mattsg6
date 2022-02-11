import { coinFlips, countFlips} from "./modules/coin.mjs";
import minimist from "minimist";


const args = minimist(process.argv.slice(2), {
    number: true
});
let val = args.number
let arr = coinFlips(val)
console.log(arr);
console.log(countFlips(arr))