import Head from 'next/head'
import Navbar from '@components/Navbar';
import { useFishStore } from '@store/useStore';
import { useState, useEffect } from 'react';
import Code from '@components/Code';

export default function Fish() {

  const fishs = useFishStore((state) => state.fish);
  const addAFish = useFishStore((state) => state.addAFish);
  const removeAFish = useFishStore((state) => state.removeAFish);
  const removeAllFish = useFishStore((state) => state.removeAllFish);
  const [localFish, setLocalFish] = useState(0)
  useEffect(() => {
    setLocalFish(fishs)
  }, [fishs])

  return (
    <>
      <Head>
        <title>Default Zustand</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold">Fish Data 🐟</h1>

          <div className="my-8">
            <p className="dark:text-white my-2">{localFish} fishs around here</p>
            <button onClick={addAFish} className={`bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>one up</button>
            <button onClick={removeAFish} className={`bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>one down</button>
            <button onClick={removeAllFish} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove</button>
          </div>

          <Code name="store/useStore" code={`import create from 'zustand';
import { persist } from 'zustand/middleware';

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
)`} />

          <Code name="pages/fish" code={`import { useFishStore } from '@store/useStore';
import { useState, useEffect } from 'react';

export default function Fish() {

  const fishs = useFishStore((state) => state.fish);
  const addAFish = useFishStore((state) => state.addAFish);
  const removeAFish = useFishStore((state) => state.removeAFish);
  const removeAllFish = useFishStore((state) => state.removeAllFish);
  const [localFish, setLocalFish] = useState(0)
  useEffect(() => {
    setLocalFish(fishs)
  }, [fishs])

  return (
    <p>{localFish} fishs around here</p>
    <button onClick={addAFish}>one up</button>
    <button onClick={removeAFish}>one down</button>
    <button onClick={removeAllFish}>remove</button>   
  )
}`} />

        </div>
      </main >
    </>
  )
}