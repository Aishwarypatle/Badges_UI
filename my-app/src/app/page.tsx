import SearchBox from "./Components/SearchBox";


export default function Home() {
  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
            <div className='w-2/4 h-2/4'>
                <SearchBox />
            </div>
        </div>
    </>
  )
}
