
import { GenerateToken } from "./components/generateToken"

export default function Home() {
    return (
        <div className="bg-gray-100 w-screen min-h-screen">
            <div className="w-[80vw] mx-auto pt-2">
                <div>
                    <h1 className="text-2xl font-bold">Welcome to Web Wallet</h1>
                    <div className="text-5xl font-extrabold flex justify-center mt-16 mb-4">Unlock Your Digital Identity.</div>
                    <div className="text-xl flex justify-center">Generate Secure Public & Private Keys with Ease.</div>
                    <div className="text-xl flex justify-center mb-6">Your wallet, your keys—powered by your seed phrase</div>
                </div>
                <GenerateToken />
            </div>
        </div>
    );
}
