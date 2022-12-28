import { Button, Card, Modal } from 'flowbite-react';
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx"

const ComplateTask = () => {

    const [show, setShow] = useState(false)
    return (
        <section>
            <div className='p-5 grid gap-5 md:grid-cols-2'>
                <Card className='max-w-xl mx-auto'>
                    <p className='text-lg font-semibold py-2'>Friend wedding Invitation
                    </p>
                    <p>Date: <strong>29-12-22</strong></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <div className='flex [&_button]:mr-2'>
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
                <Card className='max-w-xl mx-auto'>
                    <p className='text-lg font-semibold py-2'>Friend wedding Invitation
                    </p>
                    <p>Date: <strong>29-12-22</strong></p>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    <div className='flex [&_button]:mr-2'>
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
            </div>
        </section>
    );
};

export default ComplateTask;