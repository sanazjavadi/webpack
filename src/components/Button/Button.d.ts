import React from "react";

declare namespace IButton {
    export interface IProps {
        /**
         * If `true`, the button will show a spinner.
         */
        isLoading?: boolean;
        /**
         * If `true`, the button will be styled in it's active state.
         */
        isActive?: boolean;
        /**
         * If `true`, the button will be disabled.
         */
        isDisabled?: boolean;
        /**
         * The label to show in the button when `isLoading` is true
         * If no text is passed, it only shows the spinner
         */
        loadingText?: string;
        /**
         * If `true`, the button will take up the full width of its container.
         */
        isFullWidth?: boolean;
        /**
         * The html button type to use.
         */
        type?: "button" | "reset" | "submit";
        /**
         * If added, the button will show an icon before the button's label.
         */
        leftIcon?: React.ReactElement;
        /**
         * If added, the button will show an icon after the button's label.
         */
        rightIcon?: React.ReactElement;
        /**
         * The space between the button icon and label.
         */
        iconSpacing?: SystemProps["marginRight"];
        /**
         * Replace the spinner component when `isLoading` is set to `true`
         */
        spinner?: React.ReactElement;
        /**
         * Select Html Tag
         */
        as?: React.ReactElement;
        className?: any;
        variant?: "danger" | "primary" | "bg-none" | "info" | "success";
        /**
         * Custom Styles will be merged
         */
        styles?: any;
        children?: any;
        onClickHandler?: () => void;
    }
}
export { IButton };
