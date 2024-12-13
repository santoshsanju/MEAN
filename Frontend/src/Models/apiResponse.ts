import Post from "./post";

export default interface ApiResponse {
  result?: Post[],
  message: String;
}