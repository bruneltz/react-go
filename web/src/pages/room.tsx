import { Share2 } from 'lucide-react'
import { Suspense } from "react"
import { useParams } from "react-router-dom"
import { toast } from "sonner"
import amaLogo from '../assets/ama-logo.svg'
import { CreateMessageForm } from "../components/create-message-form"
import { Messages } from "../components/messages"

export function Room() {
    const { roomId } = useParams()

    function handleShareRoom() {
        const url = window.location.href.toString()

        if (navigator.share != undefined && navigator.canShare()) {
            navigator.share({ url })
        } else {
            navigator.clipboard.writeText(url)
            toast.info("Room copied to clipboard.")
        }
    }

    return (
        <div className="mx-auto  max-w-[640px] flex gap-6 py-10 px-4 flex-col">
            <div className="flex gap-3 px-3 items-center">
                <img src={amaLogo} alt='AMA' className='h-5'></img>
                <span className="text-zinc-500 text-sm truncate">Room code: <span className="text-zinc-300">{roomId}</span></span>

                <button
                    onClick={handleShareRoom}
                    className="ml-auto bg-zinc-800 text-zinc-300 px-3 py-1.5 gap-1.5 flex items-center rounded-lg  font-medium text-sm transition-colors hover:bg-zinc-700"
                    type="submit">Share<Share2 className="size-3" /></button>
            </div>

            <div className="h-px w-full bg-zinc-900"></div>

            <CreateMessageForm></CreateMessageForm>

            <Suspense fallback={<p>Loading...</p>}>
                <Messages></Messages>
            </Suspense>
        </div>
    )
}