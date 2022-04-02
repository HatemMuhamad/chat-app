import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const modal = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "200px",
        opacity: 1,
        transition: { delay: 0.5 }
    }
}

const CreateRoomModal = () => {
    return (
        <AnimatePresence exitBeforeEnter>
                <motion.div className='modal'
                variants={modal}
                initial="hidden"
                animate="visible"
                >
                <p>Create a new room!</p>
                <input type="text" />
                    <Link to="/">
                        <button className='createroom__btn'>Create Room</button>
                    </Link>
                </motion.div>
        </AnimatePresence>
    )
}

export default CreateRoomModal;