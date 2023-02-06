import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";

type LogoProps = {
    className?: string;
    dark?: boolean;
};

const Logo = ({ className, dark }: LogoProps) => (
    <Link className={cn(className, styles.logo)} href="/">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="334"
            height="119"
            fill={dark ? "#0FA053" : "#fff"}
            viewBox="0 0 334 119"
        >
<path fill-rule="nonzero" d="M0 0v56.6h333.9V0H0Zm19 9.2v5h-4.6v10h10.3v-15h12v5H32v27.3h4.6v4.9H20v-5h4.7V29.9H14.4v16.6h-12v-5h4.7V14.2H2.5V9.2H19Zm154.8 0v32.3h4.6v4.9H167l-.1-.4a37 37 0 0 0-.4-1.4l-.6.4c-1.2 1-3 1.6-4.7 1.8-1 .2-3 .1-4-.1-1.9-.4-3.3-1.2-4.5-2.5-2.2-2.4-3.2-5.8-3.2-10.9 0-3.5.4-5.8 1.6-8a10.4 10.4 0 0 1 9.6-5.6l2.5.1c.9.3 2 .9 2.6 1.3l.6.4v-7.4h-4.6V9.2h12Zm73 0v37.2h-23.5v-9.5l-.1-9.9c-.2-.5-.7-1-1.3-1.2-.7-.2-2.5-.2-3.5 0l-3.3 1.2-1 .5v14h4.6v4.9h-16.6v-5h4.7V25H202v-5h11.4l.1.5a57.6 57.6 0 0 1 .4 2.3l.9-.6c1.6-1 3.5-1.9 5.3-2.3.9-.2 1-.3 2.8-.3 1.7 0 2 0 2.7.2 1.2.4 2 .8 2.8 1.7a6 6 0 0 1 1.6 2.6c.4 1.3.5 1.7.5 9.8v7.6h8.9V14h-4.7V9.2h12Zm-144 2.6V20h6v5h-6v7.4c0 6.6.1 7.6.2 7.9.3.7 1 .9 2.5.7l4-.9v5.6l-.8.3a24.2 24.2 0 0 1-7.8.8c-2.8-.5-4.3-1.9-5-4.5-.3-.7-.3-.7-.3-9V25h-4.7v-5h4.7v-8.2h7.3Zm-51.2 8c4 .6 6.6 2.8 8 6.8.6 1.9.8 3.8.8 6.9v2.1H45v.4c0 .5.4 1.8.7 2.4.3.8 1.3 1.8 2 2 .8.5 1.5.6 2.9.6a30 30 0 0 0 8-1.3c.2 0 .2 1 .2 2.9v2.9h-.3L57 46c-4.1 1-8.5 1.1-11.6.2-3.5-1-6-3.6-7-7.4a18 18 0 0 1-.5-5.6c0-2.8.1-3.9.7-5.8a10.5 10.5 0 0 1 8.3-7.6c1.3-.2 3.7-.3 4.8 0Zm72 0c4 .6 6.6 2.8 8 6.8.6 1.9.8 3.8.8 6.9v2.1H117v.4c0 .5.3 1.8.7 2.4.3.8 1.3 1.8 2 2 .8.5 1.5.6 2.9.6a30 30 0 0 0 8-1.3c.1 0 .2 1 .2 2.9v2.9h-.3l-1.6.5c-4.1 1-8.5 1.1-11.6.2-3.5-1-6-3.6-7-7.4a18 18 0 0 1-.5-5.6c0-2.8.1-3.9.7-5.8a10.5 10.5 0 0 1 8.3-7.6c1.3-.2 3.7-.3 4.8 0Zm68.8 0c4 .6 6.6 2.8 8 6.8.6 1.9.8 3.8.8 6.9v2.1h-15.4v.4c0 .5.3 1.8.7 2.4.3.8 1.3 1.8 2 2 .8.5 1.5.6 2.9.6a30 30 0 0 0 8-1.3c.1 0 .2 1 .2 2.9v2.9h-.3l-1.6.5c-4.1 1-8.5 1.1-11.6.2-3.5-1-6-3.6-7-7.4a18 18 0 0 1-.5-5.6c0-2.8.1-3.9.7-5.8a10.5 10.5 0 0 1 8.3-7.6c1.3-.2 3.7-.3 4.8 0Zm85.5 0c4 .6 6.6 2.8 8 6.8.5 1.9.8 3.8.8 6.9v2.1h-15.4v.4c0 .5.3 1.8.6 2.4.4.8 1.3 1.8 2 2 1 .5 1.6.6 3 .6a30 30 0 0 0 8-1.3c.1 0 .2 1 .2 2.9v2.9h-.3l-1.6.5c-4.1 1-8.5 1.1-11.6.2-3.5-1-6-3.6-7-7.4a18 18 0 0 1-.6-5.6c0-2.8.2-3.9.7-5.8a10.5 10.5 0 0 1 8.4-7.6c1.2-.2 3.6-.3 4.8 0Zm33.3 0c1.2.4 2 .8 2.8 1.7a6 6 0 0 1 1.6 2.6c.4 1.3.4 1.7.4 9.8v7.6h4.7v4.9h-12V27c-.2-.5-.7-1-1.3-1.2-.7-.2-2.5-.2-3.5 0l-3.3 1.2-1 .5v14h4.6v4.9h-16.6v-5h4.7V25h-4.7v-5H299v.5a57.6 57.6 0 0 1 .5 2.3l.9-.6c1.8-1.2 4-2 6-2.5 1-.2 3.8-.1 4.8.1ZM72.8 29.5c0 10.1 0 9.9.5 10.6.6 1 2.5 1 4.8.3l1.8-.8 1.1-.5V25h-3.6v-5h10.9v21.5H93v4.9H81.5l-.3-1.3c0-.7-.2-1.3-.2-1.3l-.5.3c-1 .9-2.6 1.8-4 2.2-1.2.4-2 .5-3.4.5-2.6 0-4.6-.7-5.8-2.1-.6-.7-1.2-2-1.5-3-.2-.7-.2-.8-.3-8.7v-8H61v-5h12v9.5ZM263.5 20v5H259.2l-1.9 3.3-1.9 3.3 2.4 5 2.4 4.9h4.2v4.9h-10.1l-3.3-7.2a210 210 0 0 1-3.2-7.3l3-6 3-5.9h9.7Zm69.4 18.6a4790 4790 0 0 0-3.7 16.5l-2.7.1H324v-.4l.8-16.3 4.1-.1h4.1v.2Z"/><path fill-rule="nonzero" d="M160.3 25.3c-2.6.7-3.7 3.3-3.5 8.8 0 2.7.3 4 .9 5.3.7 1.4 1.9 2 4 2 1.4 0 2.8-.4 4.3-1.4l.5-.3V26.5l-.3-.1c-.4-.4-1.3-.8-2.1-1-.7-.2-1-.2-2-.2l-1.8.1Zm-112-.9c-1.5.3-2.4 1.3-2.8 3-.2.7-.5 2.4-.5 3.2v.5h8.3v-2c-.4-2.6-1.1-4-2.4-4.5-.5-.2-2-.3-2.7-.2Zm71.9 0c-1.4.3-2.3 1.3-2.7 3-.2.7-.5 2.4-.5 3.2v.5h8.3v-.6l-.1-1.4c-.3-2.6-1-4-2.3-4.5-.5-.2-2.1-.3-2.7-.2Zm68.8 0c-1.4.3-2.3 1.3-2.7 3-.2.7-.5 2.4-.5 3.2v.5h8.3v-2c-.4-2.6-1.2-4-2.4-4.5-.5-.2-2.1-.3-2.7-.2Zm85.5 0c-1.4.3-2.3 1.3-2.8 3-.2.7-.4 2.4-.4 3.2v.5h8.3v-.6l-.1-1.4c-.3-2.6-1-4-2.4-4.5-.5-.2-2-.3-2.6-.2Zm-264 36.2v57.7H110l-.8-.2c-2.5-.7-4-1.8-4.9-3.7a7 7 0 0 1-.4-1.2c-.2-.8-.2-2.4 0-3a6.7 6.7 0 0 1 2.2-3.3l.6-.5-.5-.5c-.6-.5-1-1.3-1.3-2V101a6 6 0 0 1 2.6-3.3l.6-.4-.5-.3-.8-.9a8.4 8.4 0 0 1-2-6.5c.3-4.5 3.2-7.2 8.5-8a22 22 0 0 1 5.6.2c.8.2 1.2.2 5.9.2h5v5.2h-4.2l.2.2c.4.5.7 1.2.9 1.7.3.9.3 2.9 0 4-1 4.2-4.7 6.3-10.7 6.3-1.5 0-2.9-.1-4-.4l-.4-.1-.5.5c-.7.6-.8 1.1-.7 1.7.2.4.6.7 1.3.9l4.8.3c6.1.4 7.1.5 8.7 1.1 2 .7 3.1 2 3.7 3.9.1.5.2 1 .2 2.3a9 9 0 0 1-1.2 5.2 8.2 8.2 0 0 1-5 3.1l-1.2.3H302l-.9-.1c-2.5-.7-4-1.8-4.9-3.7a7 7 0 0 1-.4-1.2c-.2-.8-.1-2.4 0-3a6.7 6.7 0 0 1 2.2-3.3l.6-.5-.5-.5c-.6-.5-1-1.3-1.2-2-.2-.8-.2-2.2 0-2.9a6 6 0 0 1 2.5-3.3l.6-.4-.4-.3-1-.9a8.4 8.4 0 0 1-2-6.5c.5-4.5 3.4-7.2 8.6-8a22 22 0 0 1 5.6.2c.9.2 1.2.2 6 .2h4.9v5.2h-4.1l.1.2 1 1.7c.2.9.2 2.9 0 4-1.1 4.2-4.8 6.3-10.7 6.3-1.6 0-3-.1-4-.4l-.5-.1-.5.5c-.6.6-.8 1.1-.6 1.7 0 .4.5.7 1.2.9l4.8.3c6.1.4 7.2.5 8.7 1.1 2 .7 3.1 2 3.7 3.9.1.5.2 1 .2 2.3a9 9 0 0 1-1.2 5.2 8.2 8.2 0 0 1-5 3.1l-1.1.3h20.3V60.7H10.5Zm279 9.4c1 .5 1.9 1.5 2.3 2.6.3.8.2 2.3 0 3a4.3 4.3 0 0 1-7.5 1.2 4 4 0 0 1-.9-2.6 4.5 4.5 0 0 1 3-4.4c.3-.1.8-.2 1.4-.1 1 0 1 0 1.7.3Zm-73.8.8c1 0 2 .2 3 .4l.6.2V77h-.2c-.4-.2-1.8-.4-2.7-.4-1.7-.2-2.6 0-3.2.8-.4.6-.5 1.3-.5 3V82h5.6v5h-5.6v16.4h5.6v5h-17.5v-5h4.6V87h-4.6V82h4.6v-2c0-2.2.1-3.2.5-4.4 1-3 3.5-4.7 7.2-4.9h2.6Zm57.4 3V82h6v5h-6v7.4c0 6.6 0 7.5.2 7.8.2.7 1 1 2.4.7l4-.8V103.4h4.4V87h-4.7V82h12v21.4h4.6v5h-16.6v-.3c0-.3 0-.3-.2-.2l-3 .7c-1.7.3-4.5.3-6 0-2.1-.6-3.5-2-4.1-4.3-.2-.7-.2-.8-.3-9v-8.4h-4.2v1.8l-1.1-.2a9.9 9.9 0 0 0-3.5 0 8 8 0 0 0-2.5 1.2l-.5.4v13.3h5.6v5H242v-5h4.7V87H242V82h11.4v.2l.3 1.5.2 1.2.4-.6a4.9 4.9 0 0 1 2.8-2.5c1-.3 2.5-.3 3.7 0 .6.1 1.2.2 3 .2h2v-8.3h7.3ZM35 81.7l1.3.5a6 6 0 0 1 2.2 2.3l.4.6.7-.5c1.9-1.7 3.9-2.7 5.8-3 1-.2 3-.2 4 0a6 6 0 0 1 4.9 4.7c.3 1.5.4 2.5.4 10v7h4.6v5H47.4v-9.6c0-9.6 0-9.6-.2-10-.4-.8-1-1-2.1-1.2a10 10 0 0 0-4.8 1.3l-.6.3v14.2h4.1v5H32.4v-9.7c0-9.6 0-9.7-.3-10-.4-.8-1-1-2.5-1-1.3 0-2.5.2-3.9 1l-1 .4v14.3h4.1v5h-16v-5h4.6V87h-4.6V82h11.9v2.5l.6-.5c1.4-1 3.3-2 5-2.3 1.1-.2 3.8-.1 4.7.1Zm40.4 0c5.4 1.2 8.2 4.6 8.9 10.8.2 1.4 0 5.1-.2 6.5-.9 5.2-3.5 8.2-8.1 9.3-1.5.4-4.6.5-6.5.3-1.1-.1-2.7-.5-3.6-1a10 10 0 0 1-5-4.6c-1.3-2.7-1.9-7.1-1.3-11 .7-5.2 3.2-8.5 7.5-9.9a17.1 17.1 0 0 1 2.8-.6 43 43 0 0 1 5.5.2Zm28-.1.9.1.3.1v6.8l-1.1-.2a9.9 9.9 0 0 0-3.5 0 8 8 0 0 0-2.5 1.2l-.5.4v13.3h5.6v5H85v-5h4.7V87H85V82h11.4v.2l.3 1.5.2 1.2.3-.6a4.9 4.9 0 0 1 2.9-2.5c.5-.2.9-.2 1.7-.2h1.6Zm40.4 0c4 .7 6.6 2.9 7.9 6.8.6 2 .9 4 .9 7v2.1H137v.3c0 .6.4 1.8.7 2.5.4.8 1.3 1.7 2 2 .9.5 1.6.6 3 .6a30 30 0 0 0 8-1.3l.1 2.9v2.8l-.2.1-1.7.5c-4 1-8.4 1.1-11.5.2-3.6-1-6-3.6-7-7.4a18 18 0 0 1-.6-5.6c0-2.8.1-4 .7-5.8a10.5 10.5 0 0 1 8.4-7.7c1.2-.2 3.6-.2 4.8 0Zm33.2.1c1.3.4 2 .8 2.8 1.6a6 6 0 0 1 1.6 2.6c.5 1.4.5 1.7.5 9.8v7.6h4.6v5h-11.9v-9.6l-.1-9.8c-.1-.5-.7-1-1.3-1.2-.6-.2-2.5-.2-3.4 0-1 .2-2.2.6-3.4 1.2l-1 .5v14h4.6v4.9h-16.5v-5h4.6V87h-4.6V82h11.3l.1.5a57.5 57.5 0 0 1 .5 2.2l.8-.5c1.9-1.2 4-2.1 6-2.5 1-.2 3.9-.1 4.8.1Zm55.3-.1c4 .7 6.6 2.9 8 6.8.6 2 .8 4 .8 7v2.1h-15.4v.3c0 .6.4 1.8.7 2.5.4.8 1.3 1.7 2 2 .8.5 1.5.6 2.9.6a30 30 0 0 0 8-1.3c.2 0 .2 1 .2 2.9v2.8l-.3.1-1.6.5c-4.1 1-8.5 1.1-11.6.2-3.5-1-6-3.6-7-7.4a18 18 0 0 1-.5-5.6c0-2.8.1-4 .7-5.8a10.5 10.5 0 0 1 8.3-7.7c1.3-.2 3.7-.2 4.8 0ZM329 99.9c.8.2 1.4.6 2 1.3 1 .9 1.4 2 1.4 3.4 0 2.2-1.3 4-3.3 4.6-.7.2-2 .2-2.6 0a4.8 4.8 0 0 1 0-9.3 6 6 0 0 1 2.5 0Z"/><path fill-rule="nonzero" d="M70.1 87c-2.4.6-3.4 3-3.4 8 0 2.8.3 4.5 1 6 1 2 2.8 2.9 5.2 2.5 1.4-.2 2.5-1 3.2-2.5.8-1.6 1-3.4 1-6.5a14 14 0 0 0-.7-4.7c-.5-1.7-1.3-2.5-2.7-2.9a10 10 0 0 0-3.6 0Zm70.2-.6c-1.3.3-2.2 1.2-2.7 3-.2.7-.5 2.4-.5 3.2v.4h8.3v-1.9c-.3-2.6-1.1-4.1-2.4-4.6-.5-.2-2-.2-2.7-.1Zm88.6 0c-1.4.3-2.3 1.2-2.7 3-.2.7-.5 2.4-.5 3.2v.4h8.3v-1.9c-.4-2.6-1.1-4.1-2.4-4.6-.5-.2-2-.2-2.7-.1ZM115 86c-.3 0-.8.3-1.1.4-1.5.7-2.2 2-2.2 4 0 3 1.4 4.4 4.3 4.4 1.3 0 2.2-.3 3-1 .8-.8 1.1-1.8 1.1-3.4 0-1.5-.3-2.5-1-3.3-.7-.7-1.6-1-2.9-1.1H115Zm191.8 0-1.1.4c-1.4.7-2.1 2-2.1 4 0 3 1.4 4.4 4.2 4.4 1.4 0 2.2-.3 3-1 .8-.8 1.1-1.8 1.1-3.4 0-1.5-.2-2.5-1-3.3-.7-.7-1.5-1-2.8-1.1h-1.3Zm-195.9 22.2c-.4 1-.5 1.4-.4 2.4 0 1 .3 1.5.9 2 .9.9 1.8 1 4.4 1 4 0 6-.5 6.6-2 .4-.8.2-2.1-.3-2.6-.3-.4-1.3-.7-2.6-.9l-8.2-.5-.4.6Zm191.9 0c-.5 1-.5 1.4-.5 2.4s.3 1.5.9 2c.9.9 1.8 1 4.4 1 4.1 0 6-.5 6.6-2 .4-.8.3-2.1-.2-2.6-.4-.4-1.4-.7-2.7-.9l-8.2-.5-.3.6Z"/>

        </svg>
    </Link>
);

export default Logo;
