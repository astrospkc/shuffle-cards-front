import React from 'react'
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



const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className='top-0 flex w-full h-fit p-4 bg-gradient-to-tr from-purple-950 to-black shadow-lg shadow-gray-800 mb-5 justify-between'>
            <div className='border-2 border-gray-700 p-2 rounded-3xl '>
                user's name

            </div>
            <div className='flex flex-row items-center gap-2'>

                <div className='' >
                    points: <span>0</span>
                </div>
                <div className='border-2 border-gray-700 p-2 rounded-3xl hover:cursor-pointer hover:bg-gray-700'>

                    <Button onClick={onOpen}>leaderboard</Button>
                    <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInBottom'>
                        <ModalOverlay bg='blackAlpha.300'
                            backdropFilter='blur(10px) hue-rotate(90deg)' />
                        <ModalContent>
                            <ModalHeader>Track of points</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody>
                                <ModalBody>name of the users,</ModalBody>
                                <ModalBody>total game played,</ModalBody>
                                <ModalBody>points won</ModalBody>

                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={onClose}>
                                    Close
                                </Button>

                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </div>
            </div>

        </div>
    )
}

export default Header
