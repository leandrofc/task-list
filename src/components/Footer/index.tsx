import { useState } from "react";
import { Button } from "../Button";
import Modal from "../Modal";

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col gap-6">
            <Button
                text="Add new task"
                onClick={() => setIsModalOpen(true)}
                variant="primary"
            />
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>

    )
}

export default Footer;