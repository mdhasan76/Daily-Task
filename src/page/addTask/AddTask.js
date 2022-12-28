import React from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const AddTask = () => {
    return (
        <section>
            <div className="min-h-[89vh] bg-gradient-to-bl from-indigo-500 via-purple-500 to-cyan-500 flex items-center">
                <div className="max-w-2xl w-full mx-auto bg-white">
                    <div className="w-full shadow-2xl">
                        <form className='p-8'>
                            <div className='mb-3'>
                                <label className="label pb-0">
                                    <span className="label-text text-lg font-semibold">Add Title</span>
                                </label>
                                <div>
                                    <input type="text" name="title" placeholder='task title' className="p-3 block border-b-2 outline-0 border-0 focus:border-slate-500 focus:border-b-4 font-medium text-lg w-full" />
                                </div>
                            </div>
                            <div>
                                <label className="label pb-0">
                                    <AiOutlineCloudUpload className='inline-block text-lg font-medium mr-2' />
                                    <span className="label-text text-lg font-semibold">Upload Media</span>
                                </label>
                                <div>
                                    <input type="file" name="img" className="p-3 block border-b-2 border-slate-500 outline-0 font-medium text-lg w-full" />
                                </div>
                            </div>
                            {/* <div>
                                <div class="max-w-xl">
                                    <label
                                        class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                                        <span class="flex items-center space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                            </svg>
                                            <span class="font-medium text-gray-600">
                                                Drop files to Attach, or
                                                <span class="text-blue-600 underline">browse</span>
                                            </span>
                                        </span>
                                        <input type="file" name="file_upload" class="hidden" />
                                    </label>
                                </div>
                            </div> */}
                            <div className="mt-3">
                                <label className="label py-2 block">
                                    <span className="label-text text-lg font-semibold">Add Text</span>
                                </label>
                                <div>
                                    <textarea className="p-3 w-full border-slate-500 text-lg mb-2" placeholder='write your task description' rows="5"></textarea>
                                </div>
                            </div>
                            <div className="form-control">
                                <button className="text-white border-none rounded-full bg-gradient-to-bl from-indigo-500 to-green-500 p-3 mt-2 w-full">Add Task</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddTask;