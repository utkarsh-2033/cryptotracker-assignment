import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  assets: [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      price: 50000,
      change1h: 2.5,
      change24h: 5.2,
      change7d: 12.3,
      marketCap: 950000000000,
      volume24h: 25000000000,
      circulatingSupply: 19000000,
      maxSupply: 21000000,
      chartData: [45000, 47000, 46000, 48000, 49000, 48500, 50000]
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
      price: 3000,
      change1h: 1.8,
      change24h: 3.5,
      change7d: 8.2,
      marketCap: 350000000000,
      volume24h: 15000000000,
      circulatingSupply: 120000000,
      maxSupply: null,
      chartData: [2800, 2850, 2900, 2950, 2980, 2990, 3000]
    },
    {
      id: 3,
      name: 'Tether',
      symbol: 'USDT',
      logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png',
      price: 1,
      change1h: 0.1,
      change24h: 0.2,
      change7d: 0.3,
      marketCap: 80000000000,
      volume24h: 50000000000,
      circulatingSupply: 80000000000,
      maxSupply: null,
      chartData: [1, 1, 1, 1, 1, 1, 1]
    },
    {
      id: 4,
      name: 'Binance Coin',
      symbol: 'BNB',
      logo: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
      price: 400,
      change1h: 1.2,
      change24h: 2.8,
      change7d: 6.5,
      marketCap: 60000000000,
      volume24h: 2000000000,
      circulatingSupply: 150000000,
      maxSupply: 170000000,
      chartData: [380, 385, 390, 395, 398, 399, 400]
    },
    {
      id: 5,
      name: 'Cardano',
      symbol: 'ADA',
      logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
      price: 1.2,
      change1h: 0.8,
      change24h: 1.5,
      change7d: 3.2,
      marketCap: 40000000000,
      volume24h: 1000000000,
      circulatingSupply: 33000000000,
      maxSupply: 45000000000,
      chartData: [1.1, 1.15, 1.18, 1.2, 1.19, 1.21, 1.2]
    }
  ]
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAsset: (state, action) => {
      const { id, updates } = action.payload;
      const asset = state.assets.find(asset => asset.id === id);
      if (asset) {
        Object.assign(asset, updates);
      }
    }
  }
});

export const { updateAsset } = cryptoSlice.actions;
export default cryptoSlice.reducer; 