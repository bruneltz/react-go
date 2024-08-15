interface ReactToMessageRequest {
    roomId: string,
    messageId: string
}

export async function reactToMessage({ roomId, messageId }: ReactToMessageRequest) {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`, {
        method: 'PATCH',
        body: JSON.stringify({
            messageId
        })
    })

    const data: { count: number } = await response.json()

    return { count: data.count }
}