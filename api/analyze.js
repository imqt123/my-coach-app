export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

    const { name } = req.body;
    const apiKey = process.env.ANTHROPIC_API_KEY;

    // DEMO MODE: If no API key is set in Vercel, this high-end placeholder will show.
    if (!apiKey) {
        return res.status(200).json({
            text: `Analyzing neural pathways for ${name}... [ENCRYPTED DATA DETECTED]. Your psychological profile suggests a major breakthrough is pending. Please configure the secure neural bridge (API Key) to reveal the full 24-hour protocol.`
        });
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-5-sonnet-20240620",
                max_tokens: 1024,
                messages: [{
                    role: "user",
                    content: `Analyze user ${name} using the 'Invisible Employee' framework. Provide a 3-paragraph, elite psychological diagnostic for a 5,000 MNT investment. Paragraph 1: The current block. Paragraph 2: The Protocol change. Paragraph 3: The 24-hour result.`
                }]
            })
        });

        const data = await response.json();
        res.status(200).json({ text: data.content[0].text });
    } catch (error) {
        res.status(500).json({ error: 'System Error' });
    }
}
