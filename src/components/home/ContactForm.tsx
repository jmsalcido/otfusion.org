'use client';

import React, {useEffect, useState} from "react";
import {Input, Textarea} from "@nextui-org/input";
import {Button} from "@nextui-org/button";
import axios from "axios";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";

export const ContactForm = () => {

  const [formState, setFormState] = useState({name: '', email: '', message: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showFireworks, setShowFireworks] = useState(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('/api/sendEmail', formState);
      setSuccessMessage(response.data.message);
      setFormState({name: '', email: '', message: ''})
      setShowFireworks(true);
    } catch (error) {
      console.error(error);
      setErrorMessage('Something went wrong while sending the contact me message. Try again later');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (showFireworks) {
      const timer = setTimeout(() => {
        setShowFireworks(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [showFireworks]);

  if (successMessage) {
    return (
      <>
        <p>🎉🎉🎉 {successMessage}</p>
        {showFireworks && <Fireworks autorun={{ speed: 2 }} />}
      </>
    );
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <Input type="text" name="name" placeholder="Name"
             className="max-w-lg flex-1"
             required
             onChange={handleInputChange}/>
      <Input type="email" name="email" placeholder="Email"
             className="max-w-lg flex-1"
             required
             onChange={handleInputChange}/>
      <Textarea name="message" placeholder="Message"
                className="max-w-lg flex-1"
                required
                onChange={handleInputChange}/>
      <Button type="submit" isLoading={isLoading}>Submit</Button>
      {errorMessage && <p className={'text-red-600'}>{errorMessage}</p>}
    </form>
  )
}