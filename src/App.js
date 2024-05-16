import './App.css';
import Navigation from './components/Navigation';
import Inputdata from './components/Inputdata';
import React ,{useState} from "react"
import Outputdata from './components/Outputdata';
import Controls from './components/Controls';
function App() {

  const [navSelect, setNavSelect] = useState('input')

  return (
    <main className="relative h-screen overflow-hidden bg-gray-100 rounded-2xl">
      <div className="flex items-start justify-between">
        <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
          <div className="h-full bg-white rounded-2xl ">
            <div className="flex items-center justify-center pt-6">
              <img className='w-12' src="/KSE.png" />
            </div>

            {/* Navigation  */}
            <Navigation navSelect={navSelect} setNavSelect={setNavSelect} />
          </div>
        </div>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          {navSelect == 'input' ? <Inputdata /> : (navSelect == 'output') ? <Outputdata /> : <Controls />}
        </div>
      </div>
    </main>

  );
}

export default App;
