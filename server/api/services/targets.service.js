const Target = require('../../models/Target')


const getLastTarget = async () => {
    return Target.find({}).sort({ _id: -1 }).limit(1)
}

const postOne = async (rowData) => {
    let data
    try {
        data = Target.create(rowData, { runValidators: true })
    } catch (err) {
        throw err
    }
    return data
}

const updateOne = async (id, rowData) => {

    let data
    try {
        data = Target.findByIdAndUpdate({ _id: id }, rowData, { runValidators: true })
    } catch (err) {
        throw err
    }
    return data
}

module.exports = {
    getLastTarget,
    updateOne,
    postOne
}