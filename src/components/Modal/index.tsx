import React, { useEffect, useRef, useState } from 'react';
import Input from '../Input';
import { Button } from '../Button';
import Title from '../Title';
import { X } from "react-feather";
import type { ModalProps } from './index.types';
import { useTaskList } from '../../context/taskListContext';

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return null;

  const [title, setTitle] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const { addTask } = useTaskList();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    if (!trimmedTitle) return;

    addTask(trimmedTitle);
    setTitle('');
    onClose();
  };

  const handleOverlayClick = () => {
    onClose();
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
                <Input
                    label="Task name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    ref={inputRef}
                />
                <div className="flex justify-end">
                    <Button
                        text="Add task"
                        type="submit"
                    />
                </div>
            </form>
        </div>
    </div>
  );
};

export default Modal;
