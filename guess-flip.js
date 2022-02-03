import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
    call: true
});
if(args.call == 'heads' || args.call == 'tails' || args.call != null){
    console.log(flipACoin(args.call));   
}
else{
    console.error("Error: no input\nUsage: node guess-flip --call=[heads|tails]");
}

