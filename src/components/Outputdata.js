import React,{useEffect,useState} from 'react'
import {FIREBASE_DB} from "../firebaseinit"
import { onValue, ref } from "firebase/database";
const Outputdata = () => {
    const [CO2, setCO2] = useState([])
    const [CO, setCO] = useState([])
    const [C2H5OH, setC2H5OH] = useState([])
    const [H2, setH2] = useState([])
    const [CH4, setCH4] = useState([])
    const [NH3, setNH3] = useState([])
    const [NO2, setNO2] = useState([])
    const [temp, setTemp] = useState([])
    const [humid, setHumid] = useState([])

    useEffect(() => {
        // Create a new Date object
        let currentDate = new Date();

        // GRequest Data
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth() + 1; 
        let day = currentDate.getDate();
        let dateString = year + "/" + month + "/" + day;

        let query = ref(FIREBASE_DB, "dataOut/CO2/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setCO2(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/CO/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setCO(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/C2H5OH/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setC2H5OH(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/H2/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setH2(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/CH4/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setCH4(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/NH3/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setNH3(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/NO2/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setNO2(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/Temperature/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setTemp(Object.values(data));
          }
        });

        query = ref(FIREBASE_DB, "dataOut/Humidity/" + dateString);
        onValue(query, (snapshot) => {
          const data = snapshot.val();
    
          if (snapshot.exists()) {
            console.log(Object.values(data))
            setHumid(Object.values(data));
          }
        });

      }, []);

  return (
    <div className="h-screen pt-2 pb-24 pl-2 pr-2 overflow-auto md:pt-0 md:pr-0 md:pl-0">
            <div className="flex flex-col flex-wrap sm:flex-row ">

              {/* COLUMN 1 */}
              <div className="w-full xl:w-1/3">

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-blue-100 rounded-xl">
                            
                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            CO<sub>2</sub>
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {CO2.length > 0 ? CO2[CO2.length-1]:0}
                          </span>
                          /10000 <span className='text-xs'>ppm</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((CO2.length > 0 ? CO2[CO2.length-1]:0))/10000*100}%] h-full text-xs text-center text-white bg-sky-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-orange-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            C<sub>2</sub>H<sub>5</sub>OH
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                            {C2H5OH.length > 0 ? C2H5OH[C2H5OH.length-1]:0}
                          </span>
                          /500 <span className='text-xs'>ppm</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((C2H5OH.length > 0 ? C2H5OH[C2H5OH.length-1]:0))/500*100}%] h-full text-xs text-center text-white bg-orange-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-emerald-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            CH<sub>4</sub>
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {CH4.length > 0 ? CH4[CH4.length-1]:0}
                          </span>
                          /10000 <span className='text-xs'>ppm</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((CH4.length > 0 ? CH4[CH4.length-1]:0))/10000*100}%] h-full text-xs text-center text-white bg-emerald-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>

              {/* COLUMN 2 */}
              <div className="w-full sm:w-[${Math.round((CO2.length > 0 ? CO2[CO2.length-1]:0))/10000*100}%] xl:w-1/3">

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-red-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            CO
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {CO.length > 0 ? CO[CO.length-1]:0}
                          </span>
                          /1000 <span className='text-xs'>ppm</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((CO.length > 0 ? CO[CO.length-1]:0))/1000*100}%] h-full text-xs text-center text-white bg-red-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-amber-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            H<sub>2</sub>
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {H2.length > 0 ? H2[H2.length-1]:0}
                          </span>
                          /1000 <span className='text-xs'>ppm</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((H2.length > 0 ? H2[H2.length-1]:0))/1000*100}%] h-full text-xs text-center text-white bg-amber-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-teal-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            NH<sub>3</sub>
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {NH3.length > 0 ? NH3[NH3.length-1]:0}
                          </span>
                          /500 <span className='text-xs'>ppm</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((NH3.length > 0 ? NH3[NH3.length-1]:0))/500*100}%] h-full text-xs text-center text-white bg-teal-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>

              {/* COLUMN 3 */}
              <div className="w-full sm:w-[${Math.round((CO2.length > 0 ? CO2[CO2.length-1]:0))/10000*100}%] xl:w-1/3">

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-rose-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            NO<sub>2</sub>
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {NO2.length > 0 ? NO2[NO2.length-1]:0}
                          </span>
                          /10 <span className='text-xs'>ppm</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((NO2.length > 0 ? NO2[NO2.length-1]:0))/10*100}%] h-full text-xs text-center text-white bg-rose-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-indigo-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            Temperature
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {temp.length > 0 ? temp[temp.length-1]:0}
                          </span>
                          /100 <span className='text-xs'>°C</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((temp.length > 0 ? temp[temp.length-1]:0))/100*100}%] h-full text-xs text-center text-white bg-indigo-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

                <div className="mb-4 mx-2">
                  <div className="w-full p-4 bg-white shadow-lg rounded-2xl ">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <span className="relative p-2 bg-cyan-100 rounded-xl">

                        </span>
                        <div className="flex flex-col">
                          <span className="ml-2 font-bold text-black text-md ">
                            Humidity
                          </span>
                        </div>
                      </div>
  
                    </div>
                    
                    <div className="block m-auto">
                      <div>
                        <span className="inline-block text-xl text-gray-500 ">
                           
                          <span className="font-bold text-gray-700 ">
                          {humid.length > 0 ? humid[humid.length-1]:0}
                          </span>
                          /100 <span className='text-xs'>%</span>
                        </span>
                      </div>
                      <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                        <div className={`w-[${Math.round((humid.length > 0 ? humid[humid.length-1]:0))/100*100}%] h-full text-xs text-center text-white bg-cyan-500 rounded-full`}>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>

              
            </div>
          </div>
  )
}

export default Outputdata