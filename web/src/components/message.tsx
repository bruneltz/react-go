import { ArrowUp } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { reactToMessage } from "../http/react-to-message";
import { useParams } from "react-router-dom";
import { removeReactToMessage } from "../http/remove-react-to-message";

interface MessageProps {
    messageId: string
    text: string
    amountOfReactions: number
    answered?: boolean
}

export function Message({messageId, text, amountOfReactions, answered = false} : MessageProps) {
    const { roomId } = useParams()
    const [hasReacted, setHasReacted] = useState(false)

    async function handleReact() {
        if (!roomId)
            return

        try {
            await reactToMessage({ roomId, messageId });
            setHasReacted(true);
        } catch {
            toast.error("Erro ao reagir à mensagem");
        }
    }

    async function handleRemoveReact() {
        if (!roomId)
            return

        try {
            await removeReactToMessage({ roomId, messageId });
            setHasReacted(false);
        } catch {
            toast.error("Erro ao reagir à mensagem");
        }
    }

    return (
        <li data-answered={answered}
            className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none">
            {text}

            {hasReacted ? (
                <button
                    onClick={handleRemoveReact}
                    className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500" type="button">
                    <ArrowUp className="size-4"></ArrowUp>
                    Curtir pergunta ({amountOfReactions})
                </button>
            ) : (
                <button
                    onClick={handleReact}
                    className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300"
                    type="button">
                    <ArrowUp className="size-4"></ArrowUp>
                    Curtir pergunta ({amountOfReactions})
                </button>
            )}
        </li>
    )
}