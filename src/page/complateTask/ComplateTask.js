import { useQuery } from '@tanstack/react-query';
import { Button, Card, Modal } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { RxCross2 } from "react-icons/rx"
import { AuthContext } from '../../route/AuthProvider';

const ComplateTask = () => {
    const { user } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const [comment, setComment] = useState("")
    const { data = [], refetch } = useQuery({
        queryKey: ["complatetask"],
        queryFn: async () => {
            const res = await fetch(`https://daily-task-server-nu.vercel.app/mycomplatetask?email=${user?.email}`);
            const output = await res.json();
            return output
        }
    })

    //Delete Task
    const deleteTask = (id) => {
        const doDelete = window.confirm("Do you Want to delete this task?");
        if (doDelete) {
            fetch(`https://daily-task-server-nu.vercel.app/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    refetch()
                })
        }


    }

    //Complate Task
    const complateTask = (id) => {
        fetch(`https://daily-task-server-nu.vercel.app/complatetask/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ isComplate: false })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Task Complate")
                    refetch()
                }
            })
    }

    //handle comment by closing modal
    const saveCommentInDb = (id) => {
        console.log(comment, id)
    }

    //handle comment
    const handleComment = (e) => {
        setComment(e.target.value)
    }

    return (
        <section>
            {
                data.length > 0 ? <div className='p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        data.map(task =>
                            <Card style={{ background: ` url(${task.img}) no-repeat top center `, backgroundSize: "cover" }} key={task._id} className={`max-w-xl mx-auto 
                            `}>
                                <p className={`text-lg font-semibold py-2`}>{task.title}
                                </p>
                                {/* <p>Date: <strong>29-12-22</strong></p> */}
                                <p>{task.description}</p>
                                <div className='flex flex-wrap  [&_button]:mr-2 [&_button]:mb-2'>
                                    <Button onClick={() => complateTask(task._id)} className="text-white border-none rounded-lg bg-gradient-to-b from-indigo-500 to-green-500 ">Not Complate</Button>
                                    <Button className="text-white border-none rounded-lg bg-gradient-to-b from-indigo-500 to-green-500 " onClick={() => deleteTask(task._id)}>Delete</Button>

                                    <div>
                                        <>
                                            <Button className="text-white border-none rounded-lg bg-gradient-to-b from-indigo-500 to-green-500 " onClick={() => setShow(!show)}>
                                                Add Comment
                                            </Button>
                                            <Modal
                                                show={show}

                                            >
                                                <Modal.Body>
                                                    <div className='flex justify-end pb-3'>
                                                        <RxCross2 className='text-2xl' onClick={() => setShow(!show)} />
                                                    </div>
                                                    <form>
                                                        <p className='text-lg font-semibold py-2'>Add comment</p>
                                                        <textarea className='w-full' placeholder='write somthing' name="comment" id="comment" onChange={handleComment} ></textarea>
                                                        <Button className="text-white border-none rounded-lg bg-gradient-to-b from-indigo-500 to-green-500 mt-2" onClick={() => {
                                                            saveCommentInDb(task._id)
                                                            setShow(!show)
                                                        }
                                                        }>
                                                            Submit
                                                        </Button>
                                                    </form>
                                                </Modal.Body>
                                            </Modal>
                                        </>
                                    </div>
                                </div>
                            </Card>
                        )
                    }
                </div> :
                    <div>
                        <h2 className='text-3xl flex min-h-[90vh] items-center justify-center font-medium'>No Task added yet</h2>
                    </div>
            }
        </section>
    );
};

export default ComplateTask;