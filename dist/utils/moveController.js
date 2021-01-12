"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../const");
class MoveController {
    constructor(carouselDiv, sized, marginBlock) {
        this.count = 0;
        this.offset = 0;
        this.prevOffset = 0;
        this.end = false;
        this.calculateResize(carouselDiv, sized, marginBlock);
    }
    calculateResize(carouselDiv, sized, marginBlock) {
        this.sized = sized;
        this.widthCarousel = carouselDiv.clientWidth;
        this.fullWidth = Object.values(sized).reduce((pre, current) => {
            return pre + current + (marginBlock * 2);
        }, 0);
    }
    calculate(side, countChildren, marginBlock) {
        if (side === const_1.sideEnum.RIGHT && this.count < countChildren && !this.end) {
            const widthItem = this.sized[this.count];
            const offsetAndSlider = Math.abs(this.offset) + this.widthCarousel + widthItem + (marginBlock * 2);
            if (offsetAndSlider >= this.fullWidth) {
                this.offset = -(this.fullWidth - this.widthCarousel);
                this.end = true;
            }
            else {
                this.offset = this.offset - (widthItem + (marginBlock * 2));
                this.prevOffset = this.offset;
            }
            this.count++;
            return this.offset;
        }
        if (side === const_1.sideEnum.LEFT && this.count > 0) {
            const widthItem = this.sized[this.count - 1];
            if (this.end) {
                this.offset = this.prevOffset;
                this.end = false;
            }
            else {
                this.offset = this.offset + (widthItem + (marginBlock * 2));
            }
            this.count--;
            this.prevOffset = this.offset;
            return this.offset;
        }
        return this.offset;
    }
}
exports.MoveController = MoveController;
//# sourceMappingURL=moveController.js.map