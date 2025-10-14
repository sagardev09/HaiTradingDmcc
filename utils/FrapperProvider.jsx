"use client";

import { FrappeApp } from "frappe-js-sdk";

const mgnauth = new FrappeApp("https://hsn.m-fractal.com", {
  useToken: false,
});

export { mgnauth };
