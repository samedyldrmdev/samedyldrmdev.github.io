import { Great_Vibes } from "next/font/google";
import Link from "next/link"

const greatvibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });


export default function Footer(){
    return <div className="w-full bottom-0 py-2 bg-background">
<div className="mx-auto flex justify-between items-center px-10">
<p>© 2024 Abdülsamed YILDIRIM.  All rights reserved.</p>
<Link href="https://www.lyntechdigital.com"><p className="hover:text-slate-300">LynTech<span className="font-bold">Digital</span></p></Link>

</div>
    </div>
}