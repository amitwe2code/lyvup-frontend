import React from 'react'
import { toast } from 'react-toastify';

export default function Toast(response) {
    if (response.status === 200) {
        toast.success(response.data.message, {
          autoClose: 2000,
        });
    }
    if(response.status===400) {
      toast.warning(response.data.message, {
        position:'top-right',
        autoClose: 2000,
      });
  }
}
