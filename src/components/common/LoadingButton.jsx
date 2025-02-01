import React from 'react'
import CustomButton from './CustomButton'

export default function LoadingButton() {
    return (
        <CustomButton
            className="w-24"
            type="button"
            disabled
        >
            <span
                className="spinner-border spinner-border-sm "
                role="status"
                aria-hidden="true"
            ></span>
            {/* <span className="sr-only">Loading...</span> */}
        </CustomButton>
    )
}
