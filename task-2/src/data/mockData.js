export const initialMessages = [
    {id: 1, sender: 'bot', text: 'Hello!👋\n How can I help you today.', time: '10:30 AM'},
    {id: 2, sender: 'user', text: 'Hi! How are you?', time: '10:30 AM' },
    {id: 3, sender: 'bot', text: 'I am just a program but I am doing great!😊\nHow can I assist you with today', time: '10:30 AM'}
];

export const mockResponses = {
    'hi': 'Hello! How can I help you learn React today?',
    'hello': 'Hey there! Ready to build awesome UIs?',
    'what is react': 'React is a JavaScript library used to build user interfaces, especially for single page applications. Its lets you create reusable UI components.',
    'tailwind': 'Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center, and rotate-90 that can be composed to build any, directly in your markup.',
    'framer motion': 'Framer Motion is a simple yet powerful motion library for React to create smooth animations.',
    'default': "That's an interesting question! Since I'm a simulated AI chatbot, I don't have a real backend connected yet, but your layout and interactions are working great!🚀"
}

export const chatHistory = [
    {id: 1, title: 'How are you?', time: '10:30 AM', active: true},
    {id: 2, title: 'What is React?', time: 'Yesterday', active: false},
    {id: 3, title: 'Explain JavaScript', time: 'Yesterday', active: false},
    {id: 4, title: 'Tailwind CSS', time: '2 days ago', active: false},
    {id: 5, title: 'Framer Motion', time: '3 days ago', active: false},
];