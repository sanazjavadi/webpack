/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { instance } from '.';

export const getVendorService = (page) => {

    return instance
        .get(`/restaurant/vendors-list?page=${page}&page_size=20&lat=35.774&long=51.418`)
        .then((res) => {
            return res.data.data;
        })
        .catch((err) => {
            return err.response || err;
        });
};


