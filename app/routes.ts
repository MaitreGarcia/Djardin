import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/Home.tsx"),
  route("/wiki", "./routes/Wiki.tsx"),
  route("/flowers", "./routes/Flowers.tsx"),
  route("/settings", "./routes/Settings.tsx"),
] satisfies RouteConfig;
