import mongoose from "mongoose";
import chalk from "chalk";

mongoose.set('returnOriginal', false)


const url = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/apiProject'
mongoose.connect(url)

mongoose.connection.on("disconnected", () => {
  console.log(chalk.bold("disconnected from MongoDB"))
})

mongoose.connection.on("error", (err) => {
  console.log(chalk.red(`MongoDB connection Error: ${err}`))
})

export default mongoose.connection