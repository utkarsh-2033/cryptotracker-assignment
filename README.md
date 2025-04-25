# Crypto Price Tracker

A real-time cryptocurrency price tracking application built with React and Redux Toolkit. This application simulates WebSocket updates to display live cryptocurrency prices and market data.

## Features

- Real-time price updates (simulated)
- Responsive design with Material-UI
- Interactive 7-day price charts
- Color-coded percentage changes
- Mobile-friendly interface

## Tech Stack

- React
- Redux Toolkit
- Material-UI
- Recharts
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crypto-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
  ├── components/
  │   └── CryptoTable.jsx
  ├── store/
  │   ├── store.js
  │   └── cryptoSlice.js
  ├── services/
  │   └── websocketService.js
  ├── App.jsx
  └── main.jsx
```

## Architecture

- **Redux Store**: Manages the application state using Redux Toolkit
- **WebSocket Service**: Simulates real-time updates using setInterval
- **CryptoTable Component**: Displays the data in a responsive table format
- **Material-UI**: Provides the styling and responsive design

## Future Improvements

- Integrate real WebSocket API (e.g., Binance)
- Add sorting and filtering capabilities
- Implement localStorage for data persistence
- Add more detailed charts and analytics
- Include more cryptocurrencies

## License

MIT
