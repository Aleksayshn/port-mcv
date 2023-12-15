const CHATID = '20445149';
const BOTTOKEN = '6754297723:AAFS9hKh7GFvBETZKGz4_sdB4bKPGU2Ld-k';

export const sendMessageToTelegram = async (text) => {
    const apiUrl = `https://api.telegram.org/bot${BOTTOKEN}/sendMessage`;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: CHATID,
            text: text,
        }),
    };

    try {
        fetch(apiUrl, requestOptions);
        // const response = await fetch(apiUrl, requestOptions);
        // const data = await response.json();
        // console.log("Response from Telegram API:", data);
    } catch (error) {
        console.error("Error when sending a message in Telegram:", error);
    }
};

