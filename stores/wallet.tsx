import create from 'zustand';

interface State {
  isConnected: boolean,
  toggleWalletConnection: () => void,
  items: Array<string>,
  addItem: (itemId: string) => void,
  removeItem: (itemId: string) => void,
}

const useStore = create<State>((set) => ({
  isConnected: false,
  toggleWalletConnection: () => set((state) => ({isConnected: !state.isConnected})),

  // this array of ids is the dummy user's inventory
  items: [
    '612e7223fee257a97be3532f',
    '612e7223fee257a97be3531c',
    '612e7223fee257a97be35324',
    '612e7223fee257a97be35326',
    '612e7223fee257a97be35321',
  ],
  addItem: (itemId) => set((state) => ({ items: [itemId, ...state.items] })),
  removeItem: (itemId) => set((state) => ({ items: state.items.filter((i) => i !== itemId) })),
}));

export default useStore;
