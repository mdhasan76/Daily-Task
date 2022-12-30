import { useQuery } from '@tanstack/react-query';
import { Button, Card, Modal } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { RxCross2 } from "react-icons/rx"
import { AuthContext } from '../../route/AuthProvider';

const ComplateTask = () => {
    const { user } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const { data = [] } = useQuery({
        queryKey: ["complatetask"],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mycomplatetask?email=${user?.email}`);
            const output = await res.json();
            return output
        }
    })
    return (
        <section>
            {
                data.length > 0 ? <div className='p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3 '>
                    {
                        data.map(task =>
                            <Card imgSrc={`${task.img}`} key={task._id} className={`max-w-xl mx-auto 
                            `}>
                                <p className={`text-lg font-semibold py-2`}>{task.title}
                                </p>
                                {/* <p>Date: <strong>29-12-22</strong></p> */}
                                <p>{task.description}</p>
                                <div className='flex flex-wrap  [&_button]:mr-2 [&_button]:mb-2'>
                                    <Button>Not Complate</Button>
                                    <Button>Delete</Button>

                                    <div>
                                        <>
                                            <Button onClick={() => setShow(!show)}>
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
                                                        <textarea className='w-full' placeholder='write somthing'></textarea>
                                                        <Button className='mt-2' onClick={() => setShow(!show)}>
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