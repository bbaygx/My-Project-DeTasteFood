import { useContext, useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";


const GlobalContext = createContext();

export const GlobalProvider = () => {
    return useContext(GlobalContext);
}

const AuthContext = ({children}) => {

  const [searchItemValue, setSearchItemValue] = useState('')
  const [getdataKuliner, setDataKuliner] = useState([]);
  const [getLocation, setLocation] = useState('')


  return (
    <>
        <GlobalContext.Provider value={{searchItemValue, setSearchItemValue, getdataKuliner, setDataKuliner, getLocation, setLocation}}>
            {children}
        </GlobalContext.Provider>
    </>
  )
}

export default AuthContext