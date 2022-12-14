import Head from 'next/head'
import Navbar from '@components/Navbar';
import { useRepoStore } from '@store/useStore';
import Code from '@components/Code';

export default function Repo() {

  const repo = useRepoStore(state => state.repo)
  const loading = useRepoStore(state => state.loading)
  const hasErrors = useRepoStore(state => state.hasErrors)
  const fetchRepo = useRepoStore(state => state.fetchRepo)
  const resetRepo = useRepoStore(state => state.resetRepo)
  // useEffect(() => {
  //   fetchRepo(`${process.env.API_URL}/api/users/vercel`)
  // }, [])
  function handleFetchRepo(param) {
    fetchRepo(param)
  }

  return (
    <>
      <Head>
        <title>Repo Data 🧑‍💻</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="dark:bg-neutral-900 min-h-screen pb-8">

        <Navbar />

        <div className="max-w-5xl px-4 mx-auto pt-4 class">
          <h1 className="dark:text-white text-2xl font-semibold">Repo Data 🧑‍💻</h1>

          <div className="my-8 dark:text-white">
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
          </div>

          <Code name="store/useStore" code={`import create from 'zustand';
import axios from "axios";

export const useRepoStore = create((set) => ({
  repo: {},
  loading: false,
  hasErrors: false,
  fetchRepo: async (param = 'nextjs') => {
    const url = '\${process.env.API_URL}/api/repos/\${param}'
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
}));`} />

          <Code name="pages/repo" code={`import { useRepoStore } from '@store/useStore';

export default function Repo() {

  const repo = useRepoStore(state => state.repo)
  const loading = useRepoStore(state => state.loading)
  const hasErrors = useRepoStore(state => state.hasErrors)
  const fetchRepo = useRepoStore(state => state.fetchRepo)
  const resetRepo = useRepoStore(state => state.resetRepo)
  // useEffect(() => {
  //   fetchRepo('nuxtjs')
  // }, [])
  function handleFetchRepo(param) {
    fetchRepo(param)
  }

  return (
    <p>Loading : {loading ? 'true' : 'false'}</p>
    <p>hasErrors : {hasErrors ? 'true' : 'false'}</p>
    <p>Name : {repo.name}</p>
    <p>Full Name : {repo.full_name}</p>
    <p>Language : {repo.language}</p>
    <p>Homepage : {repo.homepage ? <a>{repo.homepage}</a> : "-"}</p>
    <p>Description : {repo.description}</p>
    <p>Repo URL : {repo.repo_url ? <a>{repo.repo_url}</a> : "-"}</p>
    <p>License : {repo.license}</p>
    <p>Owner : {repo.owner}</p>
    <button onClick={() => handleFetchRepo()}>Fetch repo</button>
    <button onClick={() => handleFetchRepo('react')}>Fetch react</button>
    <button onClick={resetRepo}>Reset repo</button>
  )
}`} />

        </div>
      </main >
    </>
  )
}
