"use client";

import toast from "react-hot-toast";
import NavbarUI from "../auth/components/navbar";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const Order = ({ service, authorId }) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  async function createOffer(event) {
    event.preventDefault();

    const offerPrice = event.target.offerPrice.value;

    const res = await fetch("/api/offers", {
      method: "POST",
      body: JSON.stringify({ serviceId: service.id, offerPrice, authorId }),
    });

    if (!res.ok) {
      toast.error("Gagal membuat penawaran");
      return;
    }

    toast.success("Berhasil membuat penawaran");
    router.push("/");
  }

  return (
    <main className="space-y-20">
      <NavbarUI />
      <section className="max-w-5xl m-auto space-y-6">
        <div>
          <h1>{service.title}</h1>
          <h4>{service.price}</h4>
        </div>
        <p>{service.description}</p>
        <Button onClick={onOpen}>Order</Button>
      </section>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <form onSubmit={createOffer}>
                  <Input label="Harga penawaran" placeholder="Harga penawaran" name="offerPrice" type="number" />
                  <Button type="submit">Buat Penawaran</Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </main>
  );
};
