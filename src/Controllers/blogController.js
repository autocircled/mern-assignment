exports.create = async (req, res) => {
    res.send("Blog created successfully!");
};


exports.read = async (req, res) => {
    res.send("Blog fetched successfully!");
};


exports.delete = async (req, res) => {
    res.send("Blog deleted successfully!");
};


exports.update = async (req, res) => {
    res.send("Blog updated successfully!");
};