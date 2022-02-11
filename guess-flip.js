import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2), {
    call: true
});
// if(args.call == 'heads' || args.call == 'tails'){
//     console.log(flipACoin(args.call));   
// }
// else if(args.call == null || args.call == ''){
//     console.error('Error: no input\nUsage: node guess-flip --call=[heads|tails]');
//     // 
// }
// else{
//     console.error('Expected: Usage: node guess-flip --call=[heads|tails]')
//     // Error: invalid input\nUsage: node guess-flip --call=[heads|tails]
// }

try{
    console.log(flipACoin(args.call))
}
catch (e) {
    console.log(e)
}

