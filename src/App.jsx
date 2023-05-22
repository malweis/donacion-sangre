import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    getAndSetData();
  }, []);

  const getAndSetData = () => {
    axios.get('http://192.168.16.90:8000/api/solicitudes')
      .then(response => {
        console.log('API request succeeded');
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(error => {
        console.log('API request failed');
        console.log(error);
      });
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      const filtered = data.filter(record => record.creado_por === 50);
      setFilteredData(filtered);
    } else {
      getAndSetData();
      setFilteredData([]);
    }
  };
  
  

  const renderCards = () => {
    const records = isChecked ? filteredData : data;
    return records.map(record => (
      <Card key={record.ids} record={record} />
    ));
  };

  return (
    <div className="container">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Filter by User ID
      </label>
      {renderCards()}
    </div>
  );
};

export default App;
