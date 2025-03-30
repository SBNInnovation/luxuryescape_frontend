"use client"
import { postQuote } from '@/services/form';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Input, Textarea } from '@nextui-org/react'
import { useMutation } from '@tanstack/react-query';
import React, { useState, useEffect } from 'react'
import { toast } from 'sonner';

interface modalProps {
    isOpen: boolean;
    onClose: () => void;
    Title: string | undefined;
    type: string
    tourId?: string
    trekId?: string
}

const QuoteModal: React.FC<modalProps> = ({ isOpen, onClose, Title, type, tourId, trekId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState("");

    const {mutate: postQuoteMutation} = useMutation({
        mutationFn: (data: any) => postQuote(data),
        onSuccess: () => {
            toast.success("Quote request sent successfully");
            setName("");
            setEmail("");
            setNumber("");
            setMessage("");
            onClose();
        },
        onError: () => {
            toast.error("Failed to send quote request");
        }
    })

    console.log(tourId)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Create data object, setting the opposing ID to null
        const data = {
            name,
            email,
            number,
            message,
            type,
            tourName: Title,
            tourId: tourId || null,
            trekId: trekId || null
        }
        
        postQuoteMutation(data);
    }

    return (
        <Modal isOpen={isOpen} onOpenChange={onClose} size='2xl'>
            <ModalContent>
                {() => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            Get Quote Form: {Title}
                        </ModalHeader>
                        <ModalBody>
                            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                                <p>Please fill out the form below:</p>
                                <Input 
                                    label="Name" 
                                    placeholder="Enter your name" 
                                    fullWidth 
                                    radius='sm'
                                    isRequired
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <Input 
                                    label="Email" 
                                    placeholder="Enter your email" 
                                    fullWidth 
                                    radius='sm'
                                    isRequired
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <Input 
                                    label="Number" 
                                    placeholder="Enter your phone number" 
                                    fullWidth 
                                    radius='sm'
                                    isRequired
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                />
                                <Textarea
                                    label="Message"
                                    placeholder="Enter your message"
                                    fullWidth
                                    radius='sm'
                                    isRequired
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    minRows={4}
                                />
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose} className='rounded-sm'>
                                Close
                            </Button>
                            <Button 
                                color="primary" 
                                className='rounded-md'
                                onClick={(e) => handleSubmit(e as any)}
                            >
                                Submit
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    );
};

export default QuoteModal;