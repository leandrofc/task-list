import React from 'react';
import Input from '../Input';
import { Button } from '../Button';
import Title from '../Title';
import { X } from "react-feather";
import type { ModalProps } from './index.types';

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleOverlayClick = () => {
    onClose();
  };

  return (
    <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/80"
        onClick={handleOverlayClick}
    >
        <div
            className="flex flex-col gap-4 bg-white w-full max-w-md p-6 py-16 m-3 rounded-xl relative"
            onClick={(e) => e.stopPropagation()}
        >
            <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-gray-800"
            >
                <X size={24} />
            </button>
            <div className="flex items-center justify-center">
                <Title text="Add new task" />
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <Input label="Task name" />
                <div className="flex justify-end">
                    <Button text="Add task" onClick={() => {}} />
                </div>
            </form>
        </div>
    </div>
  );
};

export default Modal;
