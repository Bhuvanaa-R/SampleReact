import axios from 'axios';

export const fetchData = async () => {
  try {
    const response = await axios.post(
      'https://demo-eu.demo1.pricefx.com/pricefx/demofx_bprasath/productmanager.fetchformulafilteredproducts', 
      {
        // Body content for the POST request (if required)
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Basic ' + btoa('demofx_bprasath/June-Mahesh:start123'), 
        },
      }
    );
    return response.data; 
  } catch (error) {
    console.error('Error fetching data:', error);
    return {}; 
  }
};
