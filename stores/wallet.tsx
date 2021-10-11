import create from 'zustand';

interface State {
  isConnected: boolean,
  toggleWalletConnection: () => void,
  items: Array<string>,
  getItems: () => Array<string>,
  addItem: (itemId: string) => void,
  removeItem: (itemId: string) => void,
}

const useStore = create<State>((set, get) => ({
  isConnected: false,
  setConnectedFalse: () => set(state => ({ isConnected: false })),
  toggleWalletConnection: () => set((state) => ({isConnected: !state.isConnected})),

  // this array of ids is the dummy user's inventory
  items: [
    '6143e0ac92761eeee4bc18f4',
    '6143e0ac92761eeee4bc18f5',
    '612e7223fee257a97be35343',
    '6143e0ac92761eeee4bc18f6',
    '6143e0ac92761eeee4bc18f7',
    '612e7223fee257a97be3532f',
    '612e7223fee257a97be3531c',
    '612e7223fee257a97be35324',
    '612e7223fee257a97be35326',
    '612e7223fee257a97be35321',
    '612e7223fee257a97be35344',
  ],
  getItems: () => (get().isConnected ? get().items : [] ),
  addItem: (itemId) => set((state) => ({ items: [itemId, ...state.items] })),
  removeItem: (itemId) => set((state) => ({ items: state.items.filter((i) => i !== itemId) })),
}));

export default useStore;
