import Head from 'next/head'
import Navbar from '@components/Navbar';
import {
  useCountStore,
  useBearStore,
  useLionStore,
  useSharkStore,
  useFishStore,
  useFruitStore,
  useUserStore,
  useNameStore,
  usePokemonStore,
  useStudentStore,
  useRepoStore
} from '@store/useStore';
import { useState, useEffect, useRef } from 'react';

export default function Home() {

  const count = useCountStore((state) => state.count);
  const incrementCount = useCountStore((state) => state.increment);
  const incrementByAmount = useCountStore((state) => state.incrementByAmount);
  const decrementCount = useCountStore((state) => state.decrement);
  const decrementByAmount = useCountStore((state) => state.decrementByAmount);
  const resetCount = useCountStore((state) => state.reset);

  const bears = useBearStore((state) => state.bears);
  const increaseBear = useBearStore((state) => state.increasePopulation);
  const decreaseBear = useBearStore((state) => state.decreasePopulation);
  const removeBears = useBearStore((state) => state.removeAllBears);

  const lions = useLionStore((state) => state.lion);
  const increaseLion = useLionStore((state) => state.increasePopulation);
  const decreaseLion = useLionStore((state) => state.decreasePopulation);
  const removeLions = useLionStore((state) => state.removeAllLions);

  const sharks = useSharkStore((state) => state.shark);
  const increaseShark = useSharkStore((state) => state.increasePopulation);
  const decreaseShark = useSharkStore((state) => state.decreasePopulation);
  const removeSharks = useSharkStore((state) => state.removeAllSharks);

  const fishs = useFishStore((state) => state.fish);
  const addAFish = useFishStore((state) => state.addAFish);
  const removeAFish = useFishStore((state) => state.removeAFish);
  const removeAllFish = useFishStore((state) => state.removeAllFish);
  const [localFish, setLocalFish] = useState(0)
  useEffect(() => {
    setLocalFish(fishs)
  }, [fishs])

  const fruits = useFruitStore((state) => state.fruits);
  const addFruit = useFruitStore((state) => state.addFruit);
  const removeFruit = useFruitStore((state) => state.removeFruit);
  const removeAllFruits = useFruitStore((state) => state.removeAllFruits);
  const restoreAllFruits = useFruitStore((state) => state.restoreAllFruits);
  const inputFruitRef = useRef()
  function handleAddFruit() {
    const value = inputFruitRef.current.value
    if (value !== "") addFruit(value)
    else alert("fruit name cannot empty !")
    inputFruitRef.current.value = "";
  }

  const user = useUserStore(state => state.user)
  const fetch = useUserStore(state => state.fetch)
  const resetUser = useUserStore(state => state.reset)
  // useEffect(() => {
  //   fetch('http://localhost:3000/api/users/vercel')
  // }, [])
  function handleFetch() {
    fetch(`${process.env.API_URL}/api/users/vercel`)
  }

  const inputNameRef = useRef()
  const name = useNameStore(state => state.name)
  const setName = useNameStore(state => state.setName)
  const resetName = useNameStore(state => state.resetName)
  function handleChangeName() {
    const value = inputNameRef.current.value
    if (value !== "") setName(value)
    else alert("name cannot empty !")
    inputNameRef.current.value = ''
  }

  const pokemonNameRef = useRef()
  const pokemons = usePokemonStore(state => state.pokemons)
  const addPokemon = usePokemonStore(state => state.addPokemon)
  const removePokemon = usePokemonStore(state => state.removePokemon)
  const removeAllPokemons = usePokemonStore(state => state.removeAllPokemons)
  const restoreAllPokemons = usePokemonStore(state => state.restoreAllPokemons)
  const [localPokemon, setLocalPokemon] = useState([])
  useEffect(() => {
    setLocalPokemon(pokemons)
  }, [pokemons])
  function handleAddPokemon() {
    const value = pokemonNameRef.current.value
    if (value !== "") addPokemon(value)
    else alert("pokemon name cannot empty !")
    pokemonNameRef.current.value = ''
  }
  function handleRemovePokemon(id) {
    removePokemon(id)
  }

  const studentNameRef = useRef()
  const [editedId, setEditedId] = useState()
  const [editedName, setEditedName] = useState()
  const [showEdit, setShowEdit] = useState(false)
  const students = useStudentStore(state => state.students)
  const addStudent = useStudentStore(state => state.addStudent)
  const removeStudent = useStudentStore(state => state.removeStudent)
  const removeAllStudents = useStudentStore(state => state.removeAllStudents)
  const updateStudent = useStudentStore(state => state.updateStudent)
  const restoreAllStudents = useStudentStore(state => state.restoreAllStudents)
  function handleAddStudent() {
    const value = studentNameRef.current.value
    if (value !== "") addStudent(value)
    else alert("student name cannot empty !")
    studentNameRef.current.value = ''
  }
  function handleEditStudent(id, name) {
    setEditedId(id)
    setEditedName(name)
    setShowEdit(true)
  }
  function handleUpdateStudent() {
    if (editedName === "") {
      alert("student name cannot empty !")
    }
    else {
      updateStudent(editedId, editedName)
      setShowEdit(false)
      setEditedId('')
      setEditedName('')
    }
  }
  function handleRemoveStudent(id) {
    removeStudent(id)
  }

  const repo = useRepoStore(state => state.repo)
  const loading = useRepoStore(state => state.loading)
  const hasErrors = useRepoStore(state => state.hasErrors)
  const fetchRepo = useRepoStore(state => state.fetchRepo)
  const resetRepo = useRepoStore(state => state.resetRepo)
  // useEffect(() => {
  //   fetchRepo('http://localhost:3000/api/repos/vercel')
  // }, [])
  function handleFetchRepo(param) {
    fetchRepo(param)
  }

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
          <h1 className="dark:text-white text-2xl font-semibold pb-4">Default Zustand</h1>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Count Data 🎰</h1>
            <p className="dark:text-white my-2">{count} count</p>
            <button onClick={incrementCount} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">increment 1</button>
            <button onClick={() => incrementByAmount(5)} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">increment 5</button>
            <button onClick={decrementCount} className="bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">decrement 1</button>
            <button onClick={() => decrementByAmount(5)} className="bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">decrement 5</button>
            <button onClick={resetCount} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">reset</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Count, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will reset to 0</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Name Data 😀</h1>
            <p className="dark:text-white my-2">Name : {name}</p>
            <div className="mb-2">
              <input ref={inputNameRef} className="px-1.5 mr-2 h-7 border border-gray-300 dark:border-neutral-700 rounded bg-gray-100 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              <button onClick={handleChangeName} className={`bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>change name</button>
            </div>
            <button onClick={resetName} className={`bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>reset name</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Name, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will reset to John Doe</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Bears Data 🐻</h1>
            <p className="dark:text-white my-2">{bears} bears around here</p>
            <button onClick={increaseBear} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">increase</button>
            <button onClick={decreaseBear} className="bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">decrease</button>
            <button onClick={removeBears} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Bear, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will reset to 1</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Lions Data 🦁</h1>
            <p className="dark:text-white my-2">{lions} lions around here</p>
            <button onClick={increaseLion} disabled={lions === 5} className={`${lions === 5 && 'cursor-not-allowed'} bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>increase</button>
            <button onClick={decreaseLion} disabled={lions === 0} className={`${lions === 0 && 'cursor-not-allowed'} bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>decrease</button>
            <button onClick={removeLions} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Lion, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will reset to 2</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Sharks Data 🦈</h1>
            <p className="dark:text-white my-2">{sharks} sharks around here</p>
            <button onClick={increaseShark} className={`${sharks === 5 && 'cursor-not-allowed'} bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>increase</button>
            <button onClick={decreaseShark} className={`${sharks === 0 && 'cursor-not-allowed'} bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>decrease</button>
            <button onClick={removeSharks} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Shark, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will reset to 3</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Fishs Data 🐟</h1>
            <p className="dark:text-white my-2">{localFish} fishs around here</p>
            <button onClick={addAFish} className={`bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>increase</button>
            <button onClick={removeAFish} className={`bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>decrease</button>
            <button onClick={removeAllFish} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Fish, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will be same as the last value</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">this is example how to use zustand persist to save state to localStorage</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we see in Application &gt; Local Storage, it will show &apos;fish-storage&apos; with current fish value</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Fruits Data 🍏 🍌 🍊</h1>
            <ul className="dark:text-white my-2">
              {fruits.map(fruit =>
                <li key={fruit + 1}>{fruit}</li>
              )}
            </ul>
            <span className="mt-2 dark:text-white">{fruits.length} fruits available</span>
            <p className="dark:text-white my-2">Add a new fruit</p>
            <div className="mb-2">
              <input ref={inputFruitRef} className="px-1.5 mr-2 h-7 border border-gray-300 dark:border-neutral-700 rounded bg-gray-100 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              <button onClick={handleAddFruit} className={`bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>add fruit</button>
            </div>
            <button onClick={removeFruit} className={`bg-red-500 hover:bg-red-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>remove last</button>
            <button onClick={removeAllFruits} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove all</button>
            <button onClick={restoreAllFruits} className="bg-teal-500 hover:bg-teal-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">restore all</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Fruit, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will reset to [apple 🍏, banana 🍌, orange 🍊]</p>
          </div>

          <div className="my-10 dark:text-white">
            <h1 className="text-lg font-medium mb-2">User Data 👨🏻‍💻</h1>
            <p>Name : {user.name}</p>
            <p>Bio : {user.bio}</p>
            <p>Type : {user.type}</p>
            <p>Public users : {user.repos}</p>
            <p>Blog : {user.blog}</p>
            <p>Location : {user.location}</p>
            <p>Email : {user.email}</p>
            <button onClick={handleFetch} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mt-2 mr-2">Fetch user</button>
            <button onClick={resetUser} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">Reset user</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /User, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">this example how to fetch and save the data to state using zustand</p>
          </div>

          <div className="my-10 dark:text-white">
            <h1 className="text-lg font-medium mb-2">Repo Data 🧑‍💻</h1>
            <p>Loading : {loading ? 'true' : 'false'}</p>
            <p className="mb-2">hasErrors : {hasErrors ? 'true' : 'false'}</p>
            <p>Name : {repo.name}</p>
            <p>Full Name : {repo.full_name}</p>
            <p>Language : {repo.language}</p>
            <p>Homepage : {repo.homepage ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={repo.homepage} target="_blank" rel="noreferrer">{repo.homepage}</a> : "-"}</p>
            <p>Description : {repo.description}</p>
            <p>Repo URL : {repo.repo_url ? <a className="text-blue-500 hover:text-blue-600 transition-all cursor-pointer" href={repo.repo_url} target="_blank" rel="noreferrer">{repo.repo_url}</a> : "-"}</p>
            <p>License : {repo.license}</p>
            <p>Owner : {repo.owner}</p>
            <button onClick={() => handleFetchRepo()} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mt-2 mr-2">Fetch repo</button>
            <button onClick={() => handleFetchRepo('react')} className="bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mt-2 mr-2">Fetch react</button>
            <button onClick={resetRepo} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">Reset repo</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Repo, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">this example how to fetch using axios and save the data to state using zustand</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Pokemon Data 🐞 🦖 🐙 🐉 🐧</h1>
            <ul className="dark:text-white my-2 space-y-2">
              {localPokemon.map(pokemon =>
                <li key={pokemon.id}>
                  {pokemon.name}
                  <button onClick={() => handleRemovePokemon(pokemon.id)} className={`bg-red-500 hover:bg-red-600 font-medium transition-all cursor-pointer text-white rounded px-1.5 text-sm ml-2`}>X</button>
                </li>
              )}
            </ul>
            <span className="mt-2 dark:text-white">{localPokemon.length} pokemons found</span>
            <p className="dark:text-white my-2">Add a new pokemon</p>
            <div className="mb-2">
              <input ref={pokemonNameRef} className="px-1.5 mr-2 h-7 border border-gray-300 dark:border-neutral-700 rounded bg-gray-100 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              <button onClick={handleAddPokemon} className={`bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>add pokemon</button>
            </div>
            <button onClick={removeAllPokemons} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove all</button>
            <button onClick={restoreAllPokemons} className="bg-teal-500 hover:bg-teal-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">restore all</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Pokemon, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we refreshed the page, the value will be same as the last value</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">this is example how to use zustand persist to save state to localStorage</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">if we see in Application &gt; Local Storage, it will show &apos;pokemon-storage&apos; with current pokemon value</p>
          </div>

          <div className="my-10">
            <h1 className="text-lg font-medium mb-2 dark:text-white">Student Data 🧑🏻‍🎓</h1>
            <ul className="dark:text-white my-2 space-y-2">
              {students.map(student =>
                <li key={student.id}>
                  {student.name}
                  <button onClick={() => handleEditStudent(student.id, student.name)} className={`bg-yellow-500 hover:bg-yellow-600 font-medium transition-all cursor-pointer text-white rounded text-sm ml-2`}>✏️</button>
                  <button onClick={() => handleRemoveStudent(student.id)} className={`bg-red-500 hover:bg-red-600 font-medium transition-all cursor-pointer text-white rounded px-1.5 text-sm ml-2`}>X</button>
                </li>
              )}
            </ul>
            <span className="mt-2 dark:text-white">{students.length} students found</span>
            <p className="dark:text-white my-2">Add a new student</p>
            <div className="mb-2">
              <input ref={studentNameRef} className="px-1.5 mr-2 h-7 border border-gray-300 dark:border-neutral-700 rounded bg-gray-100 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
              <button onClick={handleAddStudent} className={`bg-blue-500 hover:bg-blue-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>add student</button>
            </div>
            {showEdit &&
              <>
                <p className="dark:text-white my-2">Edit student</p>
                <div className="mb-4">
                  <input value={editedName} onChange={(e) => setEditedName(e.target.value)} className="px-1.5 mr-2 h-7 border border-gray-300 dark:border-neutral-700 rounded bg-gray-100 dark:bg-neutral-800 dark:text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
                  <button onClick={handleUpdateStudent} className={`bg-violet-500 hover:bg-violet-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>Update student</button>
                  <button onClick={() => setShowEdit(false)} className={`bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2`}>Cancel</button>
                </div>
              </>
            }
            <button onClick={removeAllStudents} className="bg-orange-500 hover:bg-orange-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">remove all</button>
            <button onClick={restoreAllStudents} className="bg-teal-500 hover:bg-teal-600 transition-all cursor-pointer text-white rounded py-1 px-2 text-sm mr-2">restore all</button>
            <p className="text-gray-500 dark:text-gray-300 mt-2 text-sm">try change here and visit /Student, the value will be same</p>
            <p className="text-gray-500 dark:text-gray-300 text-sm">this example how to add, edit and remove data to state using zustand</p>
          </div>

          {/* <Code name="pages/index" code={``} /> */}

        </div>
      </main >
    </>
  )
}
