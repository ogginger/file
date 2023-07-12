import test from "./lib/test"
import * as file from "./file"

async function main() {
    await test( file.tests );
}

main().catch(( error ) => {
    console.log( error );
})