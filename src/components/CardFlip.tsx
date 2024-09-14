// src/CardFlip.js
import { useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from '@chakra-ui/react'



const CardFlip = ({ card_id, cardname, pic, msg, title, handleFn }) => {

    const [flipped, setFlipped] = useState(false);
    // const randomIndices = Array.from({ length: cardName.length }, () => Math.floor(Math.random() * cardName.length))
    // console.log(randomIndices)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const handleClick = () => {
        console.log("card-id ", card_id)
        handleFn(card_id)
        setFlipped(true)
        setTimeout(() => {
            setFlipped(false)
        }, 3000);

    }



    return (

        <div className="flex items-center justify-center  ">

            <div

                className={`relative fe w-64 h-80 transition-transform duration-700 transform ${flipped ? 'rotate-y-180' : ''}`}
                onClick={handleClick}
            >

                <div className={`absolute w-full h-full rounded-lg flex flex-col items-center justify-center transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`} onClick={onOpen}>
                    {/* Front of the Card */}
                    <div className={`absolute w-full h-full rounded-lg bg-gradient-to-r from-blue-600 to-emerald-900 flex flex-col items-center justify-center ${flipped ? 'hidden' : 'block'}`}>
                        <h1 className="font-bold text-2xl p-3">TURN THE GAME</h1>
                        <p className="text-center p-4 text-black">let's flip </p>
                    </div>

                    {/* Back of the Card */}
                    <div className={`absolute w-full h-full rounded-lg bg-white flex flex-col items-center justify-center bg-gradient-to-tr from-red-950 to-violet-950 ${flipped ? 'block' : 'hidden'}`}>
                        <h1 className="font-bold text-2xl text-black">{cardname}</h1>
                        <p className="text-center p-4 text-black">{pic}</p>

                    </div>
                </div>
                {flipped && <Modal isOpen={isOpen} onClose={onClose} isCentered={true}>
                    <ModalOverlay />
                    <ModalContent bg='black'>
                        <ModalHeader color='gray'>{title.toUpperCase()}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <ModalBody color='white'>{msg}</ModalBody>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={onClose}>
                                Close
                            </Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>}


            </div>





        </div>
    );
};

export default CardFlip;