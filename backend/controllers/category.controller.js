import Category from '../models/category.model.js'

const postcategory = async (req, res) => {
  try {
    const { name } = req.body;
    const isExists = await Category.findOne({ name });
    if (isExists) {
      return res.status(403).json({ message: "Category already exist" });
    }

    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json({ message: "Created successfully", newCategory });
  } catch (error) {
    res.status(500).json({ message: "Error post category" });
    console.log(error);
  }
};


const getcategory = async (req, res) => {
    try {

        const categoryList = await Category.find()
        res.status(200).json({categoryList})
        
    } catch (error) {
        res.status(500).json({ message: "Error get category" });
    console.log(error);
    }
}

export {postcategory, getcategory}