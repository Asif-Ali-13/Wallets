import { Trash } from 'lucide-react';

interface walletInterface{
    walletKey: number,
    pub: string,
    pri: string
}

export default function Wallet({ walletKey, pub, pri }: walletInterface){
    return (
        <div className="border-2 my-4 py-2 px-2 rounded-lg bg-gray-100">
            <div className='flex justify-between'>
                <div className='text-2xl font-bold'>Wallet {walletKey}</div>
                <Trash className='cursor-pointer hover:bg-red-300 rounded-sm'/>
            </div>
            <div className='bg-gray-200 rounded-lg p-2'>
                <div className='mb-2'>
                    <span className='font-bold text-lg'>Public Key</span>
                    <div>
                        {pub}
                    </div>
                </div>
                <div>
                <span className='font-bold text-lg'>Private Key</span>
                    <div>
                        {pri}
                    </div>
                </div>
            </div>
        </div>
    );
}
