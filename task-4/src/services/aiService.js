export const fetchSummary = async (text) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('API Key missing! Please add your valid Gemini API Key in .env file.');
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Summarize the following text concisely while keeping key information:\n\n${text}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    if (data.error) {
      console.error('API Error:', data.error);
      throw new Error(data.error.message || 'API request fail ho gayi.');
    }

    if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
      return data.candidates[0].content.parts[0].text;
    } else {
      throw new Error('Summary generate nahi ho saka. Dubara try karein.');
    }
  } catch (err) {
    console.error('Fetch Error:', err);
    throw err;
  }
};

