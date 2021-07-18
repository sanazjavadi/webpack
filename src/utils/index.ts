export const cx = (...classNames: any[]) =>
    classNames.filter(Boolean).join(" ");





/**
 * @return Object || Boolean
 */

 export const findErrors = result => {
    const errors = [];

    if (result) {
        if (result.data) {
            if (result.data && result.status === 404) {
                return false;
            }
            if (!result.data.status) {
                if (result.data.error) {
                    if (result.data.error.code === 401) {
                        toast.error("شما باید دوباره وارد شوید");
                        return false;
                    }
                }
            }
            if (result.data.errors) {
                console.log("SERVER ERROR");
                console.log(result.data?.message);

                for (const err in result.data.errors) {
                    errors.push(err);
                }

                return { errors };
            }

            return false;
        }

        // result.data not Exist
        console.log("SERVER ERROR");
        console.log(result);

        return false;
    }

    return false;
};
