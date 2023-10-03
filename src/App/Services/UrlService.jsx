
import globalInstance from "../Utils/Axios/GlobalInstance";

const urlService = {
    getPaginated,
    getOne,
    getCount,
    createOne,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany,
};

async function getPaginated() {
    return await globalInstance.post("/urls/paginated", {}); 
}

function getOne(id) {
    
}

function getCount() {

}

function createOne(params) {
    
}

function updateOne(id, params) {
    
}

function updateMany(id, params) {
    
}

function deleteOne(id) {
    
}

function deleteMany(params) {
    
}

export default urlService;
