exports.create = async (req, res) => {
    res.send("Message created successfully!");
};


exports.read = async (req, res) => {
    res.send("Message fetched successfully!");
};


exports.delete = async (req, res) => {
    res.send("Message deleted successfully!");
};


exports.update = async (req, res) => {
    res.send("Message updated successfully!");
};