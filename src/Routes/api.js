const express = require("express");
const router = express.Router();

// blogController.js
const blogController = require("../Controllers/blogController.js");
router.get("/blog/create", blogController.create);
router.get("/blog/read", blogController.read);
router.get("/blog/delete", blogController.delete);
router.get("/blog/update", blogController.update);

// blogDetailsController.js
const blogDetailsController = require("../Controllers/blogDetailsController.js");
router.get("/blogdetails/create", blogDetailsController.create);
router.get("/blogdetails/read", blogDetailsController.read);
router.get("/blogdetails/delete", blogDetailsController.delete);
router.get("/blogdetails/update", blogDetailsController.update);

// commentController.js
const commentController = require("../Controllers/commentController.js");
router.get("/comment/create", commentController.create);
router.get("/comment/read", commentController.read);
router.get("/comment/delete", commentController.delete);
router.get("/comment/update", commentController.update);

// messageController.js
const messageController = require("../Controllers/messageController.js");
router.get("/message/create", messageController.create);
router.get("/message/read", messageController.read);
router.get("/message/delete", messageController.delete);
router.get("/message/update", messageController.update);

// portfolioController.js
const portfolioController = require("../Controllers/portfolioController.js");
router.get("/portfolio/create", portfolioController.create);
router.get("/portfolio/read", portfolioController.read);
router.get("/portfolio/delete", portfolioController.delete);
router.get("/portfolio/update", portfolioController.update);

// productController.js
const productController = require("../Controllers/productController.js");
router.get("/product/create", productController.create);
router.get("/product/read", productController.read);
router.get("/product/delete", productController.delete);
router.get("/product/update", productController.update);

// profitController.js
const profitController = require("../Controllers/profitController.js");
router.get("/profit/create", profitController.create);
router.get("/profit/read", profitController.read);
router.get("/profit/delete", profitController.delete);
router.get("/profit/update", profitController.update);

// projectController.js
const projectController = require("../Controllers/projectController.js");
router.get("/project/create", projectController.create);
router.get("/project/read", projectController.read);
router.get("/project/delete", projectController.delete);
router.get("/project/update", projectController.update);

// serviceController.js
const serviceController = require("../Controllers/serviceController.js");
router.get("/service/create", serviceController.create);
router.get("/service/read", serviceController.read);
router.get("/service/delete", serviceController.delete);
router.get("/service/update", serviceController.update);

// titleController.js
const titleController = require("../Controllers/titleController.js");
router.get("/title/create", titleController.create);
router.get("/title/read", titleController.read);
router.get("/title/delete", titleController.delete);
router.get("/title/update", titleController.update);

module.exports = router;
