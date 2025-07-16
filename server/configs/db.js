import mangoose from 'mongoose';


const connectDB = async () => {
    try {
        mangoose.connection.on("connected", console.log("DB connected successfully"));
        await mangoose.connect(`${process.env.MONGODB_URI}/luminote`);
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;