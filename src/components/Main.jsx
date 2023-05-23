import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Card from './Card';
import { GET_SOLICITUDES } from '../graphql/queries';

const Main = () => {
  const { loading, error, data } = useQuery(GET_SOLICITUDES);
  const [filteredData, setFilteredData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (data) {
      setFilteredData(data.solicitudes);
    }
  }, [data]);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      const filtered = data.solicitudes.filter(record => record.creado_por === 50);
      setFilteredData(filtered);
    } else {
      setFilteredData(data.solicitudes);
    }
  };

  const renderCards = () => {
    const records = isChecked ? filteredData : data?.solicitudes || [];
    return records.map(record => (
      <Card key={record.id} record={record} />
    ));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="w-screen h-full bg-red-600 grid place-items-center gap-6 p-8">
      <label>
        <div className="flex" id="checks">
          <input
            type="checkbox"
            id="choose-me"
            className="peer hidden"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="choose-me"
            className="select-none cursor-pointer rounded-lg border-2 border-gray-200
              py-3 px-6 font-bold text-gray-200 transition-colors duration-200 ease-in-out
              peer-checked:bg-white peer-checked:text-gray-900 peer-checked:border-gray-200"
          >
            Ver mis donaciones
          </label>
        </div>
      </label>
      {renderCards()}
    </div>
  );
};

export default Main;
