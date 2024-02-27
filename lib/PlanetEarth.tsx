import * as React from 'react';
import type {SVGProps} from 'react';
const PlanetEarth = (props: SVGProps<SVGSVGElement>) => (
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
            d="M8 13.5c1.63 0 3.094-.709 4.101-1.835A2.501 2.501 0 0 1 10.25 9.25V9a.75.75 0 0 0-.75-.75 2.25 2.25 0 0 1 0-4.5.75.75 0 0 0 .75-.75v-.02a5.502 5.502 0 0 0-7.471 3.287A2.25 2.25 0 0 1 4.75 8.5c0 .414.336.75.75.75a2.25 2.25 0 0 1 1.265 4.11c.397.092.81.14 1.235.14Zm-3.491-1.25H5.5a.75.75 0 0 0 0-1.5A2.25 2.25 0 0 1 3.25 8.5a.75.75 0 0 0-.744-.75 5.489 5.489 0 0 0 2.003 4.5Zm8.241-2h.27A5.48 5.48 0 0 0 13.5 8c0-1.665-.74-3.158-1.91-4.166A2.25 2.25 0 0 1 9.5 5.25a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 11.75 9v.25a1 1 0 0 0 1 1ZM8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Z"
            clipRule="evenodd"
        />
    </svg>
);
export default PlanetEarth;
