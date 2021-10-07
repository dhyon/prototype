import create from 'zustand';

const useStore = create((set) => ({
  isConnected: false,
  toggleWalletConnection: () => set((state) => ({isConnected: !state.isConnected})),

  items: [
    '612e7223fee257a97be3531c',
    '612e7223fee257a97be35324',
    '612e7223fee257a97be35326',
    '612e7223fee257a97be35321',
  ],
  addItem: (itemId) => set((state) => ({ items: [itemId, ...state.items] })),
  removeItem: (itemId) => set((state) => ({ items: state.items.filter((i) => i !== itemId) })),
}));

export default useStore;
