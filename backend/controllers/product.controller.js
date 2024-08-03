import Product from "../models/product.model.js";
import Category from "../models/category.model.js";

const postproduct = async (req, res) => {
  try {
    const { name, category, price, description } = req.body;
    const image = req.file.path;

    const findObj = await Category.findOne({name : category})


    const newProduct = new Product({
      name,
      image,
      category : findObj._id,
      price,
      description,
    });

    await newProduct.save();
    res.status(201).json({ message: "Created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error post product" });
    console.log(error);
  }
};

const getproduct = async (req, res) => {
  try {
      const productList = await Product.find()
      res.status(200).json({productList})
  } catch (error) {
    res.status(500).json({ message: "Error get product" });
    console.log(error);
  }
}

export { postproduct, getproduct };
