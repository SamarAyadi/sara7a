import mongoose from "mongoose";

export function dbConnection() {
  return mongoose
    .connect(process.env.DB_CONNECTION)
    .then(() => {
      console.log("database connected success");
    })
    .catch((err) => {
      console.log("database error", err);
    });
}
