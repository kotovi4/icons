import * as React from 'react';
import {SVGProps} from 'react';
const MicrophoneSlash = (props: SVGProps<SVGSVGElement>) => (
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
            d="M9.5 7V3.5a1.5 1.5 0 1 0-3 0V4L5.129 2.629A3.001 3.001 0 0 1 11 3.5V7c0 .44-.095.858-.265 1.235L9.5 7ZM3.03 1.97a.75.75 0 0 0-1.06 1.06L5 6.06V7a3 3 0 0 0 3.825 2.885l1.156 1.157A4.5 4.5 0 0 1 3.5 7v-.25a.75.75 0 0 0-1.5 0V7c0 3.06 2.29 5.585 5.25 5.954v1.796a.75.75 0 0 0 1.5 0v-1.796a5.962 5.962 0 0 0 2.336-.807l1.884 1.883a.75.75 0 1 0 1.06-1.06l-11-11Zm9.896 8.456A5.972 5.972 0 0 0 14 7v-.25a.75.75 0 0 0-1.5 0V7c0 .858-.24 1.66-.657 2.343l1.083 1.083Z"
            clipRule="evenodd"
        />
    </svg>
);
export default MicrophoneSlash;