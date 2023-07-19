import item from '../models/item-model.js';

export const get_items = async (req, res) => {
    try {
        const items = await item.find();
        res.json(items);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const get_item_by_id = async (req, res) => {
    try {
        const itm = await item.findById(req.params.id);
        res.json(itm);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const save_item = async (req, res) => {
    const itm = new item(req.body);
    try {
        const inserted_item = await itm.save();
        res.status(201).json(inserted_item);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const update_item = async (req, res) => {
    try {
        const updated_item = await item.updateOne({_id: req.params.id}, {$set: req.body});
        res.status(200).json(updated_item);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const delete_item = async (req, res) => {
    try {
        const deleted_item = await item.deleteOne({_id:req.params.id});
        res.status(200).json(deleted_item);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}