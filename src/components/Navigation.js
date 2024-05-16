import React from 'react'

const Navigation = ({navSelect, setNavSelect}) => {
  return (
    <nav className="mt-6">
              <div>
                <a onClick={()=>setNavSelect('input')} className={`flex items-center justify-start w-full p-4 my-2 font-thi uppercase transition-colors duration-200 ${navSelect == 'input' ? 'text-blue-500 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100' : ' hover:text-blue-500 text-gray-500'}`} href="#">
                  <span className="mx-4 text-sm font-normal">
                    Input Data
                  </span>
                </a>
                <a onClick={()=>setNavSelect('output')} className={`flex items-center justify-start w-full p-4 my-2 font-thi uppercase transition-colors duration-200 ${navSelect == 'output' ? 'text-blue-500 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100' : ' hover:text-blue-500 text-gray-500'}`} href="#">
                  <span className="mx-4 text-sm font-normal">
                    Output Data
                  </span>
                </a>
                <a onClick={()=>setNavSelect('control')} className={`flex items-center justify-start w-full p-4 my-2 font-thi uppercase transition-colors duration-200 ${navSelect == 'control' ? 'text-blue-500 border-r-4 border-blue-500 bg-gradient-to-r from-white to-blue-100' : ' hover:text-blue-500 text-gray-500'}`} href="#">
                  <span className="mx-4 text-sm font-normal">
                    Controls
                  </span>
                </a>
              </div>
            </nav>
  )
}

export default Navigation