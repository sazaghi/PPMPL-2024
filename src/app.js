import express from 'express'; // Ensure you are using ESM import
import { getItem, createItem, updateItem, deleteItem } from './controller.js'; // Import named exports

const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/item', getItem); // Use the imported function directly
app.post('/api/item', createItem);
app.put('/api/item/:id', updateItem); // Ensure the id is passed
app.delete('/api/item/:id', deleteItem); // Ensure the id is passed

app.listen(port, () => {
    console.log(`API berjalan di : ${port}`);
});

export default app; // Default export for the app
