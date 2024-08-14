interface RemoveReactToMessageRequest {
    roomId: string,
    messageId: string
}

export async function removeReactToMessage({roomId, messageId} : RemoveReactToMessageRequest) {
    const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms/${roomId}/messages/${messageId}/react`, {
        method: 'DELETE',
        body: JSON.stringify({
            messageId
        })
    })

    const data: { count: number } = await response.json()

    return { count: data.count }
}