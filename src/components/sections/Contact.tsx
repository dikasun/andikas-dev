import {Section, SubHead} from "@/components/sections/Section";
import {TextAreaField, TextField} from "@/components/Fields";
import {SendMessageButton} from "@/components/Buttons";

const Contact = () => {
    return (
        <Section color="bg-sky-blue" title="Contact" content={
            <div className="w-full mt-12">
                <SubHead dividerColor="bg-sky-blue" title="Get in touch"/>
                <div
                    className="w-full flex flex-col gap-4 sm:w-fit bg-lavender rounded-tr-3xl rounded-bl-3xl rounded-br-3xl p-8 mt-4">
                    <TextField id="Username" title="Name" placeholder="John" type={'text'}/>
                    <TextField id="UserEmail" title="Email" placeholder="john@mail.com" type={'email'}/>
                    <TextAreaField id="UserMessage" title="Message" placeholder="Enter any additional messages..."
                                   type={'text'}/>
                    <div className="flex justify-end">
                        <SendMessageButton href={"/"}/>
                    </div>
                </div>
            </div>
        }/>
    );
}

export default Contact;