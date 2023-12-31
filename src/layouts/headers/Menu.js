import Link from "next/link";
import { Fragment } from "react";

export const Home = () => (
  <Fragment>
    <li>
      <Link href="/">Home One</Link>
    </li>
    
  </Fragment>
);
export const Pages = () => (
  <Fragment>
    <li>
      <Link href="/pricing">Daftar Harga</Link>
    </li>
    <li>
      <Link href="/faq">Help &amp; FAQ</Link>
    </li>
    <li>
      <Link href="/gallery">Our Gallery</Link>
    </li>
    <li>
      <Link href="/appointments">Appointment</Link>
    </li>
  </Fragment>
);
export const Services = () => (
  <Fragment>
    <li>
      <Link href="/service">Service One</Link>
    </li>
  </Fragment>
);
export const Doctor = () => (
  <Fragment>
    <li>
      <Link href="/doctor">Doctor</Link>
    </li>
    <li>
      <Link href="/doctor-details">Doctor Details</Link>
    </li>
  </Fragment>
);
export const Blog = () => (
  <Fragment>
    <li>
      <Link href="/blog-standard">Blog Standard</Link>
    </li>
    <li>
      <Link href="/blog-details">Blog Details</Link>
    </li>
  </Fragment>
);
export const Shop = () => (
  <Fragment>
    <li>
      <Link href="/shop">Shop</Link>
    </li>
    <li>
      <Link href="/product-details">Shop Details</Link>
    </li>
  </Fragment>
);
