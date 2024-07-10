import { fetchData } from './ex4';
import axios from 'axios';

// Mocking axios
jest.mock('axios');

test('fetchData récupère les données météorologiques avec succès', async () => {
    const data = {
        main: {
            temp: 293.15,
            humidity: 56
        }
    };
    
    axios.get.mockResolvedValue({ data });

    const result = await fetchData();
    expect(result).toEqual(data);
});