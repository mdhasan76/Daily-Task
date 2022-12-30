import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const UpdateTask = () => {
    const data = useLoaderData();

    //update
    const handleUpdate = (e) => {
        e.preventDefault();
        // setLoading(true)
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const updateData = {
            title: title,
            description: description

        }
        fetch(`https://daily-task-server-nu.vercel.app/updatetask/${data._id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ updateData })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Update successful")
                }
            })
    }
    return (
        <section>
            <div className="min-h-[89vh] bg-gradient-to-bl from-indigo-500 via-purple-500 to-cyan-500 flex items-center">
                <div className="max-w-2xl w-full mx-auto bg-white">
                    <div className="w-full shadow-2xl">
                        <form className='p-8' onSubmit={handleUpdate}>
                            <div className='mb-3'>
                                <label className="label pb-0">
                                    <span className="label-text text-lg font-semibold">Add Title</span>
                                </label>
                                <div>
                                    <input type="text" name="title" placeholder='task title' className="p-3 block border-b-2 outline-0 border-0 focus:border-slate-500 focus:border-b-4 font-medium text-lg w-full" defaultValue={data.title} />
                                </div>
                            </div>
                            <div>
                            </div>
                            <div className="mt-3">
                                <label className="label py-2 block">
                                    <span className="label-text text-lg font-semibold">Add Text</span>
                                </label>
                                <div>
                                    <textarea className="p-3 w-full border-slate-500 text-lg mb-2" name="description" placeholder='write your task description' rows="5" defaultValue={data.description}></textarea>
                                </div>
                            </div>
                            <div className="form-control">
                                <button className="text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-green-500 p-3 mt-2 w-full">
                                    Update Task</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateTask;