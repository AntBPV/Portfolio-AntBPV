"use client";

import { useState } from "react";
import { contactConsts } from "./consts";
import ContactItem from "./ContactItem";
import useIsMobile from "./hooks/useIsMobile";
import { PreviousIcon, NextIcon } from "./icons";

export default function Contacts() {
  const [contactSelected, setContactSelected] = useState(contactConsts[0].id);
  const { isMobile } = useIsMobile();

  const actualContact = contactConsts.find(
    (contact) => contact.id === contactSelected
  );

  const handlePrevious = () => {
    setContactSelected((prev) => {
      const currentIndex = contactConsts.findIndex(
        (contact) => contact.id === prev
      );
      const newIndex =
        currentIndex <= 0 ? contactConsts.length - 1 : currentIndex - 1;
      return contactConsts[newIndex].id;
    });
  };

  const handleNext = () => {
    setContactSelected((prev) => {
      const currentIndex = contactConsts.findIndex(
        (contact) => contact.id === prev
      );
      const newIndex =
        currentIndex >= contactConsts.length - 1 ? 0 : currentIndex + 1;
      return contactConsts[newIndex].id;
    });
  };

  const desktopContent = (
    <div className="p-8">
      <section className="text-center mb-6">
        <h2 className="contact-title-txtSize font-title font-semibold color-body">
          {actualContact?.title}
        </h2>
      </section>
      <section className="flex justify-center gap-15 px-15 py-10">
        {contactConsts.map((contact) => (
          <ContactItem
            key={contact.id}
            {...contact}
            selected={contact.id === contactSelected}
            onClick={() => setContactSelected(contact.id)}
          />
        ))}
      </section>
      <section className="text-center mt-6 px-4">
        <a
          href={actualContact?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block color-body font-title font-semibold py-2 px-6 contact-txtSize"
          aria-label={actualContact?.title}
        >
          {actualContact?.link}
        </a>
      </section>
    </div>
  );

  const mobileContent = (
    <div className="p-6">
      <section className="text-center mb-3">
        <h2 className="contact-title-txtSize-m font-title font-semibold color-body">
          {actualContact?.title}
        </h2>
      </section>
      <section className="flex justify-center items-center py-6 px-2">
        <button
          onClick={handlePrevious}
          className="p-2"
          aria-label="Previous contact"
        >
          <PreviousIcon size={24} className="color-body" />
        </button>

        <div className="flex-1 flex flex-col items-center justify-center mx-4">
          {actualContact && (
            <ContactItem
              key={actualContact.id}
              {...actualContact}
              selected
              onClick={() => setContactSelected(actualContact.id)}
            />
          )}
        </div>
        <button onClick={handleNext} className="p-2" aria-label="Next contact">
          <NextIcon size={24} className="color-body" />
        </button>
      </section>
      <section className="text-center mt-4">
        <a
          href={actualContact?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block color-body font-semibold py-2 px-6 contact-txtSize-m font-title"
          aria-label={actualContact?.title}
        >
          {actualContact?.link}
        </a>
      </section>
    </div>
  );

  return (
    <main
      className="max-w-screen mx-auto overflow-hidden m-4 my-20 transition-all p-5"
      id="contact"
    >
      <div className="mb-10 flex flex-col items-center justify-center">
        <h2
          className={`${
            isMobile ? "about-txtSize-m text-center" : "about-txtSize"
          } font-title font-semibold color-primary`}
        >
          Reach out to me
        </h2>
        <p
          className={`font-title color-body text-center ${
            isMobile ? "card-txtSize font-semibold" : "card-title-txtSize-m"
          }`}
        >
          {`Let’s talk about how can we work together!`}
        </p>
      </div>
      <div className="bg-card rounded-custom border-contact">
        {isMobile ? mobileContent : desktopContent}
      </div>
    </main>
  );
}
