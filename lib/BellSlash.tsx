import * as React from 'react';
import {SVGProps} from 'react';
const BellSlash = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M3.74 4.8 1.97 3.03a.75.75 0 0 1 1.06-1.06l11 11a.75.75 0 1 1-1.06 1.06l-.957-.956c-.68.154-1.367.269-2.057.344a2 2 0 0 1-3.912 0 18.134 18.134 0 0 1-2.12-.359l-.822-.19a2.067 2.067 0 0 1-.997-3.474L2.3 9.2c.457-.457.769-1.04.895-1.673L3.741 4.8Zm6.996 6.997a16.632 16.632 0 0 1-6.476-.2l-.82-.189a.567.567 0 0 1-.274-.953l.194-.193a4.774 4.774 0 0 0 1.305-2.44l.35-1.747 5.721 5.722Zm.599-3.975c.028.14.061.277.101.412l3.025 3.024a2.068 2.068 0 0 0-.566-1.863L13.7 9.2a3.274 3.274 0 0 1-.895-1.673l-.62-3.096a4.27 4.27 0 0 0-6.96-2.408L6.292 3.09a2.77 2.77 0 0 1 4.424 1.637l.619 3.095Z"
            clipRule="evenodd"
        />
    </svg>
);
export default BellSlash;
