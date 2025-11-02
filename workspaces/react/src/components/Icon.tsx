import { clsx } from 'clsx';

export interface IconProps extends React.SVGAttributes<SVGSVGElement> {
    /** The icon ID from the icons.svg sprite */
    icon: string;
    /** Whether to flip the icon horizontally */
    flipX?: boolean;
    /** Whether to flip the icon vertically */
    flipY?: boolean;
    /** The path to the icons.svg file */
    iconPath?: string;
}

export const Icon: React.FC<IconProps> = ({ icon, flipX, flipY, iconPath = '/icons.svg', ...props }) => (
    <svg
        {...props}
        className={clsx(
            'shale-v1-icon',
            {
                'shale-v1-icon-flip-x': flipX,
                'shale-v1-icon-flip-y': flipY,
            },
            props?.className
        )}
    >
        <use xlinkHref={`${iconPath}#icon-${icon}`} />
    </svg>
);
