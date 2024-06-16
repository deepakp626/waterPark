// const defaultEnvironment = "staging";

// export const getBaseUrl = function () {
//   return defaultEnvironment === "production"
//     ? Environments["production"].BASE_URL
//     : Environments["staging"].BASE_URL;
// };

const getBaseUrl = "http://localhost:4000"

export const allUsers = `${getBaseUrl}/admin/allUsers`