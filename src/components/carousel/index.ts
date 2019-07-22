import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BaseCarousel from "./carousel";
import carouselStyles, { CarouselClassNameContract } from "./carousel.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const Carousel = manageJss(carouselStyles)(BaseCarousel);
type Carousel = InstanceType<typeof Carousel>;

export { Carousel };
