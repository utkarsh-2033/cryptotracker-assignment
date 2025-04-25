import { store } from '../store/store';
import { updateAsset } from '../store/cryptoSlice';

class WebSocketService {
  constructor() {
    this.interval = null;
  }

  start() {
    this.interval = setInterval(() => {
      this.generateRandomUpdates();
    }, 2000);
  }

  stop() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }

  generateRandomUpdates() {
    const assets = store.getState().crypto.assets;
    
    assets.forEach(asset => {
      const priceChange = (Math.random() - 0.5) * 0.02; // Random change between -1% and 1%
      const newPrice = asset.price * (1 + priceChange);
      
      const updates = {
        price: newPrice,
        change1h: (Math.random() - 0.5) * 4,
        change24h: (Math.random() - 0.5) * 8,
        change7d: (Math.random() - 0.5) * 15,
        volume24h: asset.volume24h * (1 + (Math.random() - 0.5) * 0.1)
      };

      store.dispatch(updateAsset({ id: asset.id, updates }));
    });
  }
}

export const websocketService = new WebSocketService(); 