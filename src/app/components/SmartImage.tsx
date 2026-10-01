'use client';

import Image, { type ImageProps } from 'next/image';
import { useEffect, useRef, useState } from 'react';

type SmartImageProps = ImageProps & {
    /** Extra classes for the wrapper that holds the shimmer (non-`fill` images only). */
    wrapperClassName?: string;
    /** Use the light shimmer on pale backgrounds. */
    tone?: 'dark' | 'light';
};

/**
 * next/image with a shimmering placeholder that fades out once the bitmap is
 * decoded, so a slow image shows a deliberate loading state instead of a hole
 * in the layout.
 */
export default function SmartImage({
    className = '',
    wrapperClassName = '',
    tone = 'dark',
    onLoad,
    ...props
}: SmartImageProps) {
    const [loaded, setLoaded] = useState(false);
    const ref = useRef<HTMLImageElement>(null);

    // A cached image can finish decoding before React hydrates, so its `load`
    // event never reaches us. Without this check the placeholder would sit on
    // top of a perfectly good image forever.
    useEffect(() => {
        if (ref.current?.complete) setLoaded(true);
    }, []);

    const shimmer = (
        <span
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 transition-opacity duration-500 skeleton ${tone === 'light' ? 'skeleton-light' : ''
                } ${loaded ? 'opacity-0' : 'opacity-100'}`}
        />
    );

    const image = (
        <Image
            {...props}
            ref={ref}
            className={`media-fade ${className}`}
            data-loaded={loaded}
            onLoad={(event) => {
                setLoaded(true);
                onLoad?.(event);
            }}
            // Never leave the shimmer spinning forever on a broken source.
            onError={() => setLoaded(true)}
        />
    );

    // `fill` images already sit inside a positioned parent, so the shimmer can
    // simply overlay them without introducing a wrapper that would break layout.
    if (props.fill) {
        return (
            <>
                {image}
                {shimmer}
            </>
        );
    }

    return (
        <span className={`relative block overflow-hidden ${wrapperClassName}`}>
            {image}
            {shimmer}
        </span>
    );
}
