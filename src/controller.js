let items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
];

export const getItem = (req, res) => {
    res.status(200).json(items);
};

export const createItem = (req, res) => {
    const newItem = {
        id: items.length + 1,
        name: req.body.name
    };
    items.push(newItem);
    res.status(201).json(newItem);
};

export const updateItem = (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemToUpdate = items.find(i => i.id === itemId);

    if (!itemToUpdate) {
        return res.status(404).json({ message: 'Item not found' });
    }

    itemToUpdate.name = req.body.name || itemToUpdate.name;
    res.status(200).json(itemToUpdate);
};

export const deleteItem = (req, res) => {
    const itemId = parseInt(req.params.id, 10);
    const itemIndex = items.findIndex(i => i.id === itemId);

    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }

    items.splice(itemIndex, 1);
    res.status(200).json({ message: 'Item has been deleted' });
};
