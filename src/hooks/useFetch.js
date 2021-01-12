import axios from 'axios';
import {useEffect, useState} from 'react';

export function useFetch(url, config) {
  const [data, setData] = useState(null);

  async function fetchData() {
    const {data: serverData} = await axios.get(url, config);

    setData(serverData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {data, fetchData};
}
