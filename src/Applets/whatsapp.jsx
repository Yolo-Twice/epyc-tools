import Header from "../components/header"
import { useState } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';


export default function Whatsapp() {
    const [phone, setPhone] = useState("");
    function handleClick() {
        const link = "https://wa.me/" + (phone.startsWith('+') ? phone.slice('+'.length) : phone)
        window.open(link, '_blank')

    }


    return (<>
        <Header />
        <p className="m-12 mx-auto max-w-[30rem]">
            Send messages to any phone number on WhatsApp without the need to save the contact in your address book.
        </p>
        <div className="flex flex-col gap-y-6 p-6 mt-6 max-w-[24rem] mx-auto">

            <PhoneInput
                defaultCountry="IN"
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                className="flex border border-gray-300  px-3 py-2"
            />

            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow transition duration-200" onClick={handleClick}>
                Chat
            </button>
        </div>

    </>)
}