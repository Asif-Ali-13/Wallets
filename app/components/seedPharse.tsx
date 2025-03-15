import { generateMnemonic } from "bip39";
import Chain from "@/app/components/chain";

export function SeedPharse(){
    const s = generateMnemonic();
    const words = s.split(" ");

    return (
        <div>
            <div>
                <div className="flex gap-4 my-2 align-middle items-center mx-auto">
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[0]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[1]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[2]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[3]}</div>
                </div>
                <div className="flex gap-4 my-2 align-middle items-center">
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[4]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[5]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[6]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[7]}</div>
                </div>
                <div className="flex gap-4 my-2 align-middle items-center">
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[8]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[9]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[10]}</div>
                    <div className="px-2 py-2 border-1 bg-gray-50 rounded-xl w-[200px] ">{words[11]}</div>
                </div>
            </div>
            <div className="text-2xl font-bold mt-8 mb-4 items-start">Choose a blockchain to get started.</div>
            <Chain seedPhrase={s}></Chain>
        </div>
    );
}


