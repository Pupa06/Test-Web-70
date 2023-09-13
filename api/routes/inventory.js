import express from "express";
import Inventory from "../models/Inventory.js";

const router = express.Router();

router.get('/inventory', async (req, res) => {
  try {
    const { lowQuantity } = req.query;
    let products;

    if (lowQuantity === 'true') {
      // Lấy sản phẩm có số lượng thấp hơn hoặc bằng 100
      products = await Inventory.find({ instock: { $lte: 100 } });
    } else {
      // Lấy tất cả sản phẩm nếu không có truy vấn về số lượng thấp
      products = await Inventory.find();
    }

    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi lấy danh sách sản phẩm trong kho hàng.' });
  }
});

export default router;