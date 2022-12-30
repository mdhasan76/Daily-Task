import { useQuery } from '@tanstack/react-query';
import { Button, Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../route/AuthProvider';

const MyTask = () => {
    const { user } = useContext(AuthContext)
    const query = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/mytask?email=${user?.email}`);
            const output = await res.json();
            return output;
        }
    })
    const { data = [], refetch } = query;

    //Delete Task
    const deleteTask = (id) => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }

    //Complate Task
    const complateTask = (id) => {
        fetch(`http://localhost:5000/complatetask/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ isComplate: true })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success("Task Complate")
                    refetch()
                }
            })
    }


    return (
        <section>
            {
                data.lenght !== 0 ? <div className='p-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
                    {data.map(task =>

                        <Card key={task._id} className='max-w-xl mx-auto'>
                            <p className='text-lg font-semibold py-2'>{task.title}
                            </p>
                            {/* <p>Date: <strong>29-12-22</strong></p> */}
                            <p>{task.description}</p>
                            <div className='flex [&_button]:mr-2'>
                                <Button onClick={() => complateTask(task._id)}>Complate</Button>
                                <Button onClick={() => deleteTask(task._id)}>Delete</Button>
                                <Button disabled>see more</Button>
                            </div>
                        </Card>)}

                </div>
                    :
                    <div>
                        <h2 className='text-3xl flex min-h-[90vh] items-center justify-center font-medium'>No Task added yet</h2>
                    </div>
            }
        </section>
    );
};

export default MyTask;