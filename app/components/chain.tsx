
import { useRef, useState } from "react";
import Wallet from "./wallet";
import nacl from "tweetnacl";
import { derivePath } from "ed25519-hd-key";
import { mnemonicToSeedSync } from "bip39";
import bs58  from "bs58";

interface input{
    seedPhrase : string
}

export default function Chain({ seedPhrase }: input){
    const [wallets, setWallets] = useState([{id: 0, pub: '', pri: ''}]);
    const [isSol, setSol] = useState(false);
    const [isEth, setEth] = useState(false);
    const keyRef = useRef(0);
    
    const seed = mnemonicToSeedSync(seedPhrase);

    function clearWallets(){
        setWallets(wallets.filter(w => w.id === 0));
        setSol(false);
        setEth(false);
        keyRef.current = 0;
    }

    function addWallet(){
        keyRef.current = keyRef.current + 1;
        const walletCount = keyRef.current;
        const type = isSol? 501 : 60;
        
        const path = `m/44'/${type}'/${walletCount}'/0'`;
        const derivedSeed = derivePath(path, seed.toString('hex')).key;

        const keyPair = nacl.sign.keyPair.fromSeed(derivedSeed);

        const secret = keyPair.secretKey;
        const publicKey = keyPair.publicKey;

        const privateKeyBase58 = bs58.encode(secret);
        const publicKeyBase58 = bs58.encode(publicKey);
        console.log(publicKeyBase58);
        console.log(privateKeyBase58);

        setWallets([...wallets, {id: (walletCount), pub: publicKeyBase58, pri: privateKeyBase58}])
    }

    function deleteWallet(walletId: number) {
        setWallets(wallets.filter((w) => w.id !== walletId));
    }

    return (
        <div>
            <div className="flex gap-4">
                <button disabled={isEth} className="px-4 py-2 border-2 rounded-xl font-bold cursor-pointer hover:bg-gray-200" 
                style={{backgroundColor : isSol ? "green" : "", color: isSol ? "white": "black"}} onClick={() => setSol(true)}>Solana</button>

                <button disabled={isSol} className="mx-2 px-4 py-2 border-2 rounded-xl font-bold cursor-pointer hover:bg-gray-200" 
                style={{backgroundColor : isEth ? "green" : "", color: isEth ? "white": "black"}} onClick={() => setEth(true)}>Ethereum</button>
            </div>
            <div className="my-2">
                {
                    (isSol || isEth) && 
                    <div className="flex justify-end gap-2">
                        <button className="px-4 py-2 border-2 rounded-xl font-bold bg-gray-50 cursor-pointer hover:bg-gray-200" 
                        onClick={addWallet}>Add Wallet</button>
                        <button className="px-4 py-2 border-2 rounded-xl font-bold bg-red-500 text-white cursor-pointer hover:bg-red-700" 
                        onClick={clearWallets}>Clear Wallets</button>
                    </div>
                }
            </div>
            <div>
                {
                    (isSol || isEth) && wallets.filter(w => (w.id !== 0)).map(w => <Wallet
                        key={w.id}
                        walletKey={w.id}
                        pub={w.pub}
                        pri={w.pri}
                        onDelete={deleteWallet}
                    ></Wallet>)
                }
            </div>
        </div>
    );
}


