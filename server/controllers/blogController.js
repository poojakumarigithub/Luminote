import fs from 'fs';
import imagekit from '../configs/imageKit.js';
import Blog from '../models/Blog.js';
export const addBlog = async (req, res) => {
    try {
        const {title , subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;
        //check if all fields avail
        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "Please fill all the fields"});
        }
        const fileBuffer = fs.readFileSync(imageFile.path);
        //upload image to imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "blogImages",
        })

        //optimize image url
        const optimizedImageUrl = imagekit.url({
            path: response.filePath,
            transformation: [
                {width: '1280'}, // Resize to 1280px width
                {quality: "auto"},// Automatically adjust quality
                {format: "webp"} // Convert to WebP format
            ]
        });

        const image = optimizedImageUrl;

        //save blog to db
        await Blog.create({title, subTitle, description, category, image, isPublished});

        res.json({success: true, message: "Blog added successfully"});

    } catch (error) {
        res.json({success: false, message: error.message});
    }
}