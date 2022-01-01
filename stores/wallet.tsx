import create from 'zustand';

interface State {
  isConnected: boolean;
  setConnectedFalse: () => void;
  toggleWalletConnection: () => void;
  items: Array<any>;
  getItems: () => Array<any>;
  addItem: (itemId: string, price: number) => void;
  removeItem: (itemId: string) => void;
}

const useStore = create<State>((set, get) => ({
  isConnected: false,
  setConnectedFalse: () => set((state) => ({ isConnected: false })),
  toggleWalletConnection: () => set((state) => ({ isConnected: !state.isConnected })),

  // this array of objs is the dummy user's inventory
  items: [
    {
      id: '6143e0ac92761eeee4bc18f4',
      price: 599,
      volume: 100,
      trendDirection: 1.1,
      trendStrength: 1.3,
    },
    // {id: '6143e0ac92761eeee4bc18f5', price: 13},
    // {id: '612e7223fee257a97be35343', price: 13},
    // {id: '6143e0ac92761eeee4bc18f6', price: 13},
    // {id: '6143e0ac92761eeee4bc18f7', price: 13},
    // {id: '612e7223fee257a97be3532f', price: 13},
    {
      id: '612e7223fee257a97be3531c',
      price: 20,
      volume: 458,
      trendDirection: -0.6,
      trendStrength: 0.2,
    },
    {
      id: '612e7223fee257a97be35324',
      price: 145,
      volume: 565,
      trendDirection: 2.5,
      trendStrength: 1.2,
    },
    {
      id: '612e7223fee257a97be35326',
      price: 377.31,
      volume: 500,
      trendDirection: 0.3,
      trendStrength: 0.9,
    },
    {
      id: '612e7223fee257a97be35321',
      price: 65.99,
      volume: 675,
      trendDirection: -0.8,
      trendStrength: 2.3,
    },
    {
      id: '612e7223fee257a97be35344',
      price: 20,
      volume: 200,
      trendDirection: 3.4,
      trendStrength: 1.6,
    },
  ],
  getItems: () => (get().isConnected ? get().items : []),
  addItem: (itemId, itemPrice) =>
    set((state) => ({ items: [{ id: itemId, price: itemPrice }, ...state.items] })),
  removeItem: (itemId) => set((state) => ({ items: state.items.filter((i) => i !== itemId) })),
}));

export default useStore;
