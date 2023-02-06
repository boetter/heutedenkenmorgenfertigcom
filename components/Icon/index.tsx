import React from "react";
import cn from "classnames";
import styles from "./Icon.module.sass";

type IconsType = {
    [key: string]: string;
};

const icons: IconsType = {
    "arrow-down-right":
        "M20.476 4.594a11.38 11.38 0 0 0-2.315 3.333c-.559 1.231-.88 2.537-.944 3.844s.129 2.587.57 3.769 1.119 2.242 1.997 3.121l-.031.031h0l-1.061 1.061h0l-.031.031c-.878-.878-1.939-1.557-3.121-1.997s-2.463-.634-3.769-.57-2.612.385-3.844.945a11.38 11.38 0 0 0-3.333 2.315L3.51 19.392c4.003-4.003 9.122-4.196 13.19-1.631L4.55 5.611 5.611 4.55l12.151 12.151c-2.566-4.068-2.372-9.188 1.631-13.191l1.084 1.084z",
    "arrow-up-right":
        "M4.594 3.51a11.38 11.38 0 0 0 3.333 2.315c1.231.559 2.537.88 3.844.944s2.587-.129 3.769-.57 2.242-1.119 3.121-1.997l.031.031h0l1.061 1.061h0l.031.031c-.878.878-1.557 1.939-1.997 3.121s-.634 2.463-.57 3.769.385 2.612.945 3.844a11.38 11.38 0 0 0 2.315 3.333l-1.084 1.084c-4.003-4.003-4.196-9.122-1.631-13.19L5.611 19.436 4.55 18.376 16.701 6.225C12.632 8.791 7.513 8.597 3.51 4.594L4.594 3.51z",
    arrows: "M6.071 7.561c.33-.84.5-1.741.5-2.651h1.066c0 4.06-2.826 6.644-6.483 7.091 3.657.447 6.483 3.031 6.483 7.091H6.571c0-.91-.17-1.81-.5-2.651s-.814-1.604-1.424-2.247a6.56 6.56 0 0 0-2.132-1.501A6.28 6.28 0 0 0 0 12.166v-.095-.139-.095a6.28 6.28 0 0 0 2.515-.527 6.56 6.56 0 0 0 2.132-1.501c.61-.643 1.094-1.407 1.424-2.247zm11.859 0c-.33-.84-.5-1.741-.5-2.651h-1.066c0 4.06 2.826 6.644 6.483 7.091-3.657.447-6.483 3.031-6.483 7.091h1.066c0-.91.17-1.81.5-2.651s.814-1.604 1.424-2.247a6.56 6.56 0 0 1 2.132-1.501A6.28 6.28 0 0 1 24 12.166v-.095-.139-.095a6.28 6.28 0 0 1-2.515-.527 6.56 6.56 0 0 1-2.132-1.501c-.61-.643-1.094-1.407-1.424-2.247z",
    "chevron-down":
        "M22.186 7.173l-.891-.937c-.234-.234-.609-.234-.797 0l-8.484 8.484-8.531-8.484c-.187-.234-.562-.234-.797 0l-.891.938c-.234.188-.234.563 0 .797l9.797 9.797c.234.234.563.234.797 0l9.797-9.797c.234-.234.234-.609 0-.797z",
    close: "M18.751 3.978l1.273 1.273L13.273 12l6.751 6.751-1.273 1.273L12 13.273l-6.749 6.751-1.273-1.273L10.728 12l-6.75-6.749 1.273-1.273L12 10.728l6.751-6.75z",
    eye: "M12 4c3.728 0 6.775 1.443 9.166 3.835a15.03 15.03 0 0 1 2.087 2.615h0l.161.261.073.123h0l.132.229.113.207.049.094h0l.085.17.067.143c.091.205.091.439 0 .644h0l-.067.143-.04.082h0l-.094.182-.054.1h0l-.122.218-.141.24-.161.261a15.03 15.03 0 0 1-2.087 2.615c-2.391 2.391-5.438 3.835-9.166 3.835s-6.775-1.443-9.166-3.835a15.03 15.03 0 0 1-2.087-2.615l-.234-.383h0l-.132-.229-.059-.106h0l-.103-.195-.045-.088h0l-.076-.156-.031-.068c-.091-.205-.091-.439 0-.644l.067-.143h0l.085-.17.049-.094h0l.113-.207h0l.064-.112.141-.24.161-.261a15.03 15.03 0 0 1 2.087-2.615C5.225 5.443 8.272 4 12 4zm0 1.585c-3.276 0-5.934 1.259-8.045 3.37-.744.744-1.364 1.542-1.866 2.339l-.441.762.031-.058.044.082.264.458h0l.101.164c.502.797 1.122 1.595 1.866 2.339 2.112 2.112 4.769 3.37 8.045 3.37s5.934-1.259 8.045-3.37c.744-.744 1.364-1.542 1.866-2.339l.441-.762h0l-.032.058-.043-.082-.264-.458h0l-.101-.164c-.502-.797-1.122-1.595-1.866-2.339-2.112-2.112-4.769-3.37-8.045-3.37zm0 1.96c2.459 0 4.452 1.993 4.452 4.452S14.459 16.45 12 16.45s-4.452-1.993-4.452-4.452S9.541 7.545 12 7.545zm0 1.585a2.87 2.87 0 0 0-2.867 2.867A2.87 2.87 0 0 0 12 14.864a2.87 2.87 0 0 0 2.867-2.867A2.87 2.87 0 0 0 12 9.13z",
    facebook:
        "M21.429 0H2.571C1.125 0 0 1.179 0 2.571v18.857C0 22.875 1.125 24 2.571 24h7.339v-8.143H6.536V12h3.375V9.107c0-3.322 1.982-5.196 4.982-5.196 1.5 0 3 .268 3 .268v3.268h-1.661c-1.661 0-2.196 1.018-2.196 2.089V12h3.696l-.589 3.857h-3.107V24h7.393C22.821 24 24 22.875 24 21.429V2.571A2.61 2.61 0 0 0 21.429 0z",
    instagram:
        "M12.027 5.812c-3.429 0-6.161 2.786-6.161 6.161 0 3.429 2.732 6.161 6.161 6.161 3.375 0 6.161-2.732 6.161-6.161a6.2 6.2 0 0 0-6.161-6.161zm0 10.179c-2.196 0-4.018-1.768-4.018-4.018 0-2.196 1.768-3.964 4.018-3.964 2.196 0 3.964 1.768 3.964 3.964 0 2.25-1.768 4.018-3.964 4.018zm7.821-10.393a1.44 1.44 0 1 0-2.893 0 1.44 1.44 0 1 0 2.893 0zm4.071 1.446c-.107-1.929-.536-3.643-1.929-5.036S18.884.187 16.955.08c-1.982-.107-7.929-.107-9.911 0-1.929.107-3.589.536-5.036 1.929C.616 3.402.187 5.116.08 7.045c-.107 1.982-.107 7.929 0 9.911.107 1.929.536 3.589 1.929 5.036 1.446 1.393 3.107 1.821 5.036 1.929 1.982.107 7.929.107 9.911 0 1.929-.107 3.643-.536 5.036-1.929 1.393-1.446 1.821-3.107 1.929-5.036.107-1.982.107-7.929 0-9.911zm-2.571 12c-.375 1.071-1.232 1.875-2.25 2.304-1.607.643-5.357.482-7.071.482-1.768 0-5.518.161-7.071-.482a4.06 4.06 0 0 1-2.304-2.304c-.643-1.554-.482-5.304-.482-7.071 0-1.714-.161-5.464.482-7.071a4.13 4.13 0 0 1 2.304-2.25c1.554-.643 5.304-.482 7.071-.482 1.714 0 5.464-.161 7.071.482 1.018.375 1.821 1.232 2.25 2.25.643 1.607.482 5.357.482 7.071 0 1.768.161 5.518-.482 7.071z",
    linkedin:
        "M22.286 0H1.661C.75 0 0 .804 0 1.768v20.518C0 23.25.75 24 1.661 24h20.625c.911 0 1.714-.75 1.714-1.714V1.768C24 .804 23.196 0 22.286 0zM7.232 20.571H3.696V9.161h3.536v11.411zM5.464 7.554c-1.179 0-2.089-.911-2.089-2.036s.911-2.089 2.089-2.089c1.125 0 2.036.964 2.036 2.089s-.911 2.036-2.036 2.036zm15.107 13.018h-3.589V15c0-1.286 0-3-1.821-3-1.875 0-2.143 1.446-2.143 2.946v5.625H9.482V9.161h3.375v1.554h.054c.482-.911 1.661-1.875 3.375-1.875 3.589 0 4.286 2.411 4.286 5.464v6.268z",
    twitter:
        "M21.558 7.088c.939-.704 1.785-1.55 2.442-2.536-.845.376-1.832.658-2.818.751 1.033-.611 1.785-1.55 2.16-2.724-.939.564-2.02.986-3.1 1.221a4.93 4.93 0 0 0-3.616-1.55 4.93 4.93 0 0 0-4.932 4.932c0 .376.047.751.141 1.127A14.31 14.31 0 0 1 1.644 3.142c-.423.704-.658 1.55-.658 2.489a4.85 4.85 0 0 0 2.207 4.086c-.798-.047-1.597-.235-2.254-.611v.047c0 2.395 1.691 4.368 3.945 4.838-.376.094-.845.188-1.268.188-.329 0-.611-.047-.939-.094.611 1.973 2.442 3.382 4.603 3.429-1.691 1.315-3.804 2.114-6.106 2.114-.423 0-.798-.047-1.174-.094 2.16 1.409 4.744 2.207 7.562 2.207 9.065 0 13.996-7.468 13.996-13.996v-.658z",
};

type IconProps = {
    className?: string;
    name: string;
    size?: number | string;
    fill?: string;
};

const Icon = ({ className, name, size, fill }: IconProps) => (
    <svg
        className={cn(styles.icon, className)}
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
    >
        <path fill={fill} d={icons[name]}></path>
    </svg>
);

export default Icon;
