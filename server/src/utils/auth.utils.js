import bcrypt from "bcrypt";

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedpassword = await bcrypt.hash(password, saltRounds);
    return hashedpassword;
  } catch (error) {
    console.log(error);
  }
};
const comparePassword = (password, hashedpassword) => {
  return bcrypt.compare(password, hashedpassword);
};

export { hashPassword, comparePassword };

// import bcrypt from "bcrypt";
// import { promisify } from "util";

// const hashPassword = async (password) => {
//   try {
//     const saltRounds = 10;
//     const hashAsync = promisify(bcrypt.hash);
//     const hashedPassword = await hashAsync(password, saltRounds);
//     return hashedPassword;
//   } catch (error) {
//     console.error(error);
//     throw error; // Rethrow the error to handle it further up the call stack
//   }
// };

// const comparePassword = (password, hashedPassword) => {
//   return bcrypt.compare(password, hashedPassword);
// };

// export { hashPassword, comparePassword };
