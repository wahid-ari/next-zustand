import create from 'zustand';
import { persist } from 'zustand/middleware';
import axios from "axios";


export const useCountStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  incrementByAmount: (amount) =>
    set((state) => ({ count: state.count + amount })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  decrementByAmount: (amount) =>
    set((state) => ({ count: state.count - amount })),
  reset: () => set({ count: 0 }),
}));


export const useNameStore = create((set) => ({
  name: 'John Doe',
  setName: (param) => set({ name: param }),
  resetName: () => set({ name: 'John Doe' })
}))


export const useBearStore = create((set) => ({
  bears: 1,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))


export const useLionStore = create((set) => ({
  lion: 2,
  increasePopulation: () => set((state) => ({ lion: state.lion + 1 })),
  decreasePopulation: () => set((state) => ({ lion: state.lion - 1 })),
  removeAllLions: () => set({ lion: 0 }),
}))


export const useSharkStore = create((set) => ({
  shark: 3,
  increasePopulation: () => set((state) => ({
    shark: state.shark < 5 ? state.shark + 1 : 5
  })),
  decreasePopulation: () => set((state) => ({
    shark: state.shark > 0 ? state.shark - 1 : 0
  })),
  removeAllSharks: () => set({ shark: 0 }),
}))


export const useFishStore = create(
  persist(
    (set, get) => ({
      fish: 4,
      addAFish: () => set({ fish: get().fish + 1 }),
      removeAFish: () => set({ fish: get().fish - 1 }),
      removeAllFish: () => set({ fish: 0 }),
    }),
    {
      name: 'fish-storage',
      getStorage: () => localStorage,
    }
  )
)


export const useFruitStore = create(set => ({
  fruits: ['apple 🍏', 'banana 🍌', 'orange 🍊'],
  addFruit: (fruit) => {
    set(state => ({
      fruits: [...state.fruits, fruit]
    }));
  },
  removeFruit: () => {
    set(state => ({
      fruits: state.fruits.slice(0, -1)
    }));
  },
  removeAllFruits: () => set({ fruits: [] }),
  restoreAllFruits: () => set({ fruits: ['apple 🍏', 'banana 🍌', 'orange 🍊'] })
}));


export const useUserStore = create((set) => ({
  user: {},
  fetch: async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    set({ user: json })
  },
  reset: () => set({ user: {} })
}))


export const useRepoStore = create((set) => ({
  repo: {},
  loading: false,
  hasErrors: false,
  fetchRepo: async (param = 'nextjs') => {
    const url = `${process.env.API_URL}/api/repos/${param}`
    set(() => ({ loading: true }));
    try {
      const response = await axios.get(url);
      set((state) => ({ repo: (state.repo = response.data), loading: false }));
    } catch (err) {
      set(() => ({ hasErrors: true, loading: false }));
    }
  },
  resetRepo: () => set({
    repo: {},
    loading: false,
    hasErrors: false,
  })
}));


export const usePokemonStore = create(
  persist(
    (set, get) => ({
      pokemons: [
        { id: 1, name: "🐞 Bulbasaur" },
        { id: 2, name: "🦖 Ivysaur" },
        { id: 3, name: "🐙 Venusaur" },
        { id: 4, name: "🐉 Charmander" },
        { id: 5, name: "🐧 Charmeleon" }
      ],
      addPokemon: (name) =>
        set((state) => ({
          pokemons: [
            ...state.pokemons,
            { name: name, id: Math.random() * 100 },
          ]
        })),
      removePokemon: (id) =>
        set((state) => ({
          pokemons: state.pokemons.filter((pokemon) => pokemon.id !== id),
        })),
      removeAllPokemons: () => set({ pokemons: [] }),
      restoreAllPokemons: () => set({
        pokemons: [
          { id: 1, name: "🐞 Bulbasaur" },
          { id: 2, name: "🦖 Ivysaur" },
          { id: 3, name: "🐙 Venusaur" },
          { id: 4, name: "🐉 Charmander" },
          { id: 5, name: "🐧 Charmeleon" }
        ]
      })
    }),
    {
      name: 'pokemon-storage',
      getStorage: () => localStorage,
    }
  )
);


export const useStudentStore = create(set => ({
  students: [
    { id: '1', name: 'Aaron Saunders' },
    { id: '2', name: 'Andrea Saunders' },
    { id: '3', name: 'Bill Smith' },
    { id: '4', name: 'John Chambers' },
    { id: '5', name: 'Joe Johnson' }
  ],
  addStudent: (name) =>
    set(state => ({
      students: [
        ...state.students,
        {
          name: name,
          id: Math.random() * 100 + '',
        }
      ]
    })),
  removeStudent: (id) =>
    set(state => ({
      students: state.students.filter(student => student.id !== id)
    })),
  updateStudent: (id, name) =>
    set(state => ({
      students: state.students.map(item => {
        if (item.id === id) {
          return {
            ...item,
            name: name
          };
        } else {
          return item;
        }
      })
    })),
  removeAllStudents: () => set({ students: [] }),
  restoreAllStudents: () => set({
    students: [
      { id: '1', name: 'Aaron Saunders' },
      { id: '2', name: 'Andrea Saunders' },
      { id: '3', name: 'Bill Smith' },
      { id: '4', name: 'John Chambers' },
      { id: '5', name: 'Joe Johnson' }
    ]
  })
}));