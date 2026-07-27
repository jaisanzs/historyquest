import { C } from "../theme.js";
// Tiny pixel icons for the reactor buttons. viewBox 0 0 16 16.
export default function Icon({ name, size = 26, color = C.ink }) {
  const p = (x, y, w, h, f) => <rect key={`${x}-${y}-${w}-${h}`} x={x} y={y} width={w} height={h} fill={f} />;
  let body = null;
  if (name === "spray") body = [p(5,4,6,10,color), p(6,2,4,2,color), p(4,3,1,2,color), p(2,2,1,1,color), p(3,1,1,1,color), p(6,7,4,1,"#fff")];
  else if (name === "up") body = [p(7,4,2,9,color), p(5,6,2,2,color), p(9,6,2,2,color), p(3,8,2,2,color), p(11,8,2,2,color)];
  else if (name === "uv") body = [p(6,6,4,4,color), p(7,1,2,2,color), p(7,13,2,2,color), p(1,7,2,2,color), p(13,7,2,2,color), p(3,3,2,2,color), p(11,3,2,2,color), p(3,11,2,2,color), p(11,11,2,2,color)];
  else if (name === "ozone") body = [p(2,7,4,4,color), p(7,4,4,4,color), p(12,7,4,4,"#c96f6f"), p(6,10,1,1,"#c96f6f"), p(9,10,1,1,"#c96f6f")];
  else if (name === "crystal") body = [p(7,1,2,2,color), p(5,3,6,2,color), p(3,5,10,4,color), p(5,9,6,3,color), p(7,12,2,2,color)];
  else if (name === "xray") body = [p(1,3,4,10,color), p(6,7,2,2,"#c07f2c"), p(9,7,2,2,"#c07f2c"), p(12,7,2,2,"#c07f2c"), p(6,4,1,1,"#c07f2c"), p(6,10,1,1,"#c07f2c")];
  else if (name === "capture") body = [p(2,2,12,12,color), p(4,4,2,2,"#fff"), p(8,4,2,2,"#fff"), p(4,8,2,2,"#fff"), p(8,8,2,2,"#fff"), p(11,6,1,1,"#fff")];
  else if (name === "compute") body = [p(4,4,8,8,color), p(6,6,4,4,"#fff"), p(1,6,2,1,color), p(1,9,2,1,color), p(13,6,2,1,color), p(13,9,2,1,color), p(6,1,1,2,color), p(9,1,1,2,color)];
  else if (name === "flame") body = [p(7,2,1,2,"#e0a24e"), p(6,4,3,2,"#e0a24e"), p(5,6,5,4,"#e0662e"), p(6,10,3,2,"#c07f2c")];
  else if (name === "pipe") body = [p(2,7,8,3,color), p(9,5,2,2,color), p(9,10,2,2,color), p(11,7,3,3,color)];
  else if (name === "cube") body = [p(5,2,4,4,"#f0ece0"), p(2,8,4,4,"#e9dcc0"), p(9,8,4,4,"#e9dcc0"), p(5,2,4,1,"#fff"), p(2,8,4,1,"#fff"), p(9,8,4,1,"#fff")];
  else if (name === "lock") body = [p(4,7,8,7,color), p(6,4,1,3,color), p(9,4,1,3,color), p(6,4,4,1,color), p(7,9,2,3,"#fff")];
  else if (name === "leaf") body = [p(7,3,1,10,"#4f6f34"), p(4,4,3,3,"#7fa650"), p(9,5,3,3,"#7fa650"), p(3,8,3,2,"#7fa650"), p(10,9,3,2,"#7fa650")];
  else if (name === "boll") body = [p(5,4,6,5,"#f2eee2"), p(3,6,3,3,"#f2eee2"), p(10,6,3,3,"#f2eee2"), p(6,10,4,3,"#7a5a2e"), p(7,9,2,1,"#5b3a26")];
  else body = [p(6,6,4,4,color)];
  return (
    <svg viewBox="0 0 16 16" width={size} height={size} shapeRendering="crispEdges" style={{ imageRendering: "pixelated", display: "block" }}>
      {body}
    </svg>
  );
}
