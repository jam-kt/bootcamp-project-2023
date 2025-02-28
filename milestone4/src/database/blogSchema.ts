import mongoose from "mongoose";
import { Schema } from "mongoose";

// NOTE: IBlog and IComment use convention where I in front signifies that it is an interface
// make Comment interface (type)
export type IComment = {
    user: string;
    comment: string;
    time: Date;
}

// typescript type (can also be an interface)
export type IBlog = {
    title: string;
    slug: string; 
    date: Date;
    description: string;    // for preview
    content: string;        // for individual blog page
    imageSlug: string;
    comments: IComment[];   // array for comments
};

const commentSchema = new Schema<IComment>({
    user: { type: String, required: true },
    comment: { type: String, required: true },
    // the default is so that we do not have to define dates in DB
    // TODO: replace later with required date, this should have been created when putting comment into DB from site
    time: { type: Date, required: false, default: new Date() }
})
// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: true},
    description: { type: String, required: true },
    content: { type: String, required: true },
    imageSlug: { type: String, required: true },
    comments: [ { type: commentSchema, required: true }]
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;