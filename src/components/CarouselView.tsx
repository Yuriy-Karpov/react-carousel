import * as React from 'react';

interface ICarouselView {
    children: React.ReactNode;
    refCarousel: React.RefObject<HTMLDivElement>;
    refSlideBox: React.RefObject<HTMLDivElement>;
    leftButton: React.ReactNode;
    rightButton: React.ReactNode;
    isRelative: boolean;
    onTouchMove: any; //затипизировать
}

export const CarouselView = React.memo((
    {
        children,
        refCarousel,
        refSlideBox,
        leftButton,
        rightButton,
        isRelative,
        onTouchMove
    }: ICarouselView) => {
    return (
        <div className={`rj-carousel${isRelative ? ' rj-carousel_relative' : ''}`}>
            <div ref={refCarousel} className="rj-carousel__wrap">
                <div ref={refSlideBox}
                     className="rj-carousel__slide-box"
                     onTouchMove={onTouchMove}
                     onTouchStart={onTouchMove}
                     onTouchEnd={onTouchMove}
                     onTouchCancel={onTouchMove}
                >
                    {children}
                </div>
            </div>
            {leftButton}
            {rightButton}
        </div>
    )
});
