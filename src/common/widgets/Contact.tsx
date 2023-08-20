"use client";

import { Section, SubHead } from "@/common/components/Section";
import { SendMessageButton } from "@/common/components/Buttons";
import { useForm } from "react-hook-form";
import React from "react";
import { TextAreaField, TextField } from "@/common/components/Fields";
import { sendMessage } from "@/shared/utils";
import { toast } from "react-toastify";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit = (data: FormValues) => {
    sendMessage({
      senderName: data.name,
      senderEmail: data.email,
      senderMessage: data.message,
    }).then((data) => {
      if (data.code === 200) {
        toast.success("Message sent", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        toast.error("Failed to send message", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    });
  };

  return (
    <Section
      color="bg-bittersweet"
      title="Contact"
      content={
        <div className="w-full mt-12">
          <SubHead dividerColor="bg-bittersweet" title="Get in touch" />
          <form
            className="w-full flex flex-col gap-4 sm:w-fit bg-lavender rounded-tr-3xl rounded-bl-3xl rounded-br-3xl p-8 mt-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              {...register("name", {
                required: { value: true, message: "Name is required." },
              })}
              id={"name"}
              title={"Name"}
              type={"text"}
              placeholder={"John"}
              error={errors.name}
            />
            <TextField
              {...register("email", {
                required: { value: true, message: "Email is required." },
                pattern: { value: /.+@.+/, message: "Invalid Email" },
              })}
              id={"email"}
              title={"Email"}
              type={"email"}
              placeholder={"john@mail.com"}
              error={errors.email}
            />
            <TextAreaField
              {...register("message", {
                required: { value: true, message: "Message is required." },
              })}
              id={"message"}
              title={"Message"}
              type={"text"}
              placeholder={"Enter any additional messages..."}
              error={errors.message}
            />
            <div className="flex justify-end">
              <SendMessageButton />
            </div>
          </form>
        </div>
      }
    />
  );
};

export default Contact;
