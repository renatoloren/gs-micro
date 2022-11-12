import { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);

  async function getVehicles() {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Authorization', 'Basic dXN1YXJpbzpzZW5oYQ==');

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };

      fetch('http://localhost:8080/veiculo', requestOptions, {
        credentials: 'include',
      })
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.log('error', error));

      // setVehicles(json);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <GlobalContext.Provider value={{ vehicles, getVehicles }}>
      {children}
    </GlobalContext.Provider>
  );
};
