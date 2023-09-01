exports.create = async (req, res) => {
    res.send("Comment created successfully!");
};


exports.read = async (req, res) => {
    res.send("Comment fetched successfully!");
};


exports.delete = async (req, res) => {
    res.send("Comment deleted successfully!");
};


exports.update = async (req, res) => {
    res.send("Comment updated successfully!");
};