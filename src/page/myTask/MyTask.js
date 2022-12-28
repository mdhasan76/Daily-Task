import { Button, Card } from 'flowbite-react';
import React from 'react';

const MyTask = () => {
    return (
        <section>
            <div className='p-5 grid gap-5 md:grid-cols-2'>
                <Card className='max-w-xl mx-auto'>
                    <p className='text-lg font-semibold py-2'>Friend wedding Invitation
                    </p>
                    <p>Date: <strong>29-12-22</strong></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <div className='flex [&_button]:mr-2'>
                        <Button>Complate</Button>
                        <Button>Delete</Button>
                        <Button>see more</Button>
                    </div>
                </Card>
                <Card className='max-w-xl mx-auto'>
                    <p className='text-lg font-semibold py-2'>Friend wedding Invitation
                    </p>
                    <p>Date: <strong>29-12-22</strong></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <div className='flex [&_button]:mr-2'>
                        <Button>Complate</Button>
                        <Button>Delete</Button>
                        <Button>see more</Button>
                    </div>
                </Card>
            </div>
        </section>
    );
};

export default MyTask;