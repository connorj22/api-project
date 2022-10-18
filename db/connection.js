import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set('returnOriginal', false)

mongoose.connect("mongodb://127.0.0.1:27017/apiProject").catch((err) =>
{ console.log(`error ${err.message}`) })

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("disconnected from MongoDB"))
})

mongoose.connection.on("error", () => {
  console.log(chalk.red(`MongoDB connection Eroor: ${err}`))
})

export default mongoose.connection