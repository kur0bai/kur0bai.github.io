import { Montserrat } from 'next/font/google';
import React from 'react'
import CustomLink from './CustomLink';
const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });

export const Contact = () => {
    return (
        <div className='lg:w-1/2 mx-auto px-4 lg:px-20 my-20' id="contact">
            <p
                className="my-6 text-gray-200 text-xl text-center"
                style={montserrat.style}>
                I am completely sure that together we can build real solutions to real problems.
                Let's discuss it and create a better world!
            </p>
            <div className='flex justify-center mt-10'>
                <CustomLink
                    type="button"
                    color="primary"
                    fullWidth={false}
                    href="mailto:devjesg@gmail.com"
                >
                    Get in Touch
                </CustomLink>
            </div>

        </div>
    )
}
