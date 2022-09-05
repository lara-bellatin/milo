import Log from "../models/Log";

async function getLogs() {
  return await Log.query();
}

async function editLogDescription(id: string, newDescription: string) {
  console.log(newDescription);
  return await Log.query().findById(id);
}


export default {
  getLogs,
  editLogDescription,
}