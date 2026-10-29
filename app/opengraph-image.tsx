import { ImageResponse } from "next/og";

export const alt =
  "Joaquin Vizcarra, movement disorders neurologist and clinical AI researcher at the University of Cincinnati";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#fcfcfa",
          color: "#262b26",
          padding: "56px 72px",
          display: "flex",
          flexDirection: "column",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: 3,
            color: "#585f55",
          }}
        >
          JOAQUIN A. VIZCARRA, MD, MSTR
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 96,
            lineHeight: 1,
            letterSpacing: -5,
            marginTop: 32,
          }}
        >
          <span>Joaquin</span>
          <span style={{ color: "#315b78" }}>Vizcarra</span>
        </div>
        <div style={{ display: "flex", fontSize: 29, marginTop: 30 }}>
          Movement disorders neurologist. Clinical AI researcher.
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid #d9dcd2",
            paddingTop: 24,
            marginTop: "auto",
            fontSize: 21,
            color: "#585f55",
          }}
        >
          <span>Assistant Professor · University of Cincinnati</span>
          <span>joaquinvizcarra.com</span>
        </div>
      </div>
    ),
    size,
  );
}
