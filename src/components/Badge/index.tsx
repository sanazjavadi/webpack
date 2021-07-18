// import * as React from "react";
// // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import { faCheck } from "@fortawesome/free-solid-svg-icons";

// import { cx } from "@Utils/index";
// import styles from "./styles.module.scss";

// interface IBadge {
//     /**
//      * The visual style of the badge
//      *
//      * @type {('primary'|'secondary'|'success'|'danger'|'warning'|'info'|'light'|'dark')}
//      */
//     variant?:
//         | "primary"
//         | "secondary"
//         | "success"
//         | "danger"
//         | "warning"
//         | "info"
//         | "light"
//         | "dark";
//     /**
//      * Border radius of badge container
//      *
//      * @type {('sm'|'md'|'lg')}
//      */
//     rounded?: string;
//     /**
//      * This Badge have fixed width and heigth for
//      * avatar
//      */
//     avatarBadge?: boolean;
//     /**
//      * Custom classNames will be overwrite to Badge
//      *
//      */
//     classNames?: Object;
// }

// const Badge: React.FC<IBadge> = ({
//     variant = "primary",
//     rounded = 6,
//     children,
//     avatarBadge,
//     classNames,
// }) => {
//     const customClassNames = cx(
//         classNames,
//         styles.badge,
//         styles[`badge-${variant}`],
//         avatarBadge && styles["image-badge"]
//     );

//     const radiusType: any = {
//         sm: 6,
//         md: 12,
//         lg: "100%",
//     };

//     const customStyles = {
//         borderRadius: `${
//             radiusType[rounded] ? radiusType[rounded] : radiusType.sm
//         }px`,
//     };

//     const child = React.Children.count(children);

//     return (
//         <div style={customStyles} className={customClassNames}>
//             {child > 0 ? (
//                 children
//             ) : (
//                 <FontAwesomeIcon className={styles.icon} icon={faCheck} />
//             )}
//         </div>
//     );
// };

// export default Badge;

import React from 'react';
import styles from './badge.module.scss'


function Badge({children}) {
    

    return (
        <span className={styles.badge}>
            {children}
        </span>
    )
}


export default Badge