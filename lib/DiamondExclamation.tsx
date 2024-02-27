import * as React from 'react';
import type {SVGProps} from 'react';
const DiamondExclamation = (props: SVGProps<SVGSVGElement>) => (
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
            d="M14.01 6.94 9.06 1.99a1.5 1.5 0 0 0-2.12 0L1.99 6.94a1.5 1.5 0 0 0 0 2.12l4.95 4.95a1.5 1.5 0 0 0 2.12 0l4.95-4.95a1.5 1.5 0 0 0 0-2.12ZM10.121.928a3 3 0 0 0-4.242 0l-4.95 4.95a3 3 0 0 0 0 4.242l4.95 4.95a3 3 0 0 0 4.242 0l4.95-4.95a3 3 0 0 0 0-4.242l-4.95-4.95ZM9 10.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM8.75 5a.75.75 0 1 0-1.5 0v2.5a.75.75 0 1 0 1.5 0V5Z"
            clipRule="evenodd"
        />
    </svg>
);
export default DiamondExclamation;
